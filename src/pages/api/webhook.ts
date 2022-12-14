import { Session } from '@/types/main';
import * as admin from 'firebase-admin';
import { buffer } from 'micro';
import type { NextApiRequest, NextApiResponse } from 'next';

// Secure a connection to Firebase from the backend
const app = !admin?.apps?.length
  ? admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: process.env.FIREBASE_PRIVATE_KEY
          ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/gm, `\n`)
          : undefined,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      }),
      // credential: admin.credential.cert(serviceAccount),
      databaseURL: `https://e-shoppee-a2938.firebaseio.com`,
    })
  : admin.app();

// Establish connection to Stripe
const stripe = require(`stripe`)(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session: Session) => {
  console.log(`fulfilling the order`);
  console.log(session);

  return app
    .firestore()
    .collection(`users`)
    .doc(encodeURIComponent(session.metadata.email).replace(/\./g, `%2E`)) //to decode use decodeURIComponent(email)
    .collection(`orders`)
    .doc(session.id)
    .set({
      amount: !!session.amount_total && session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images).map((image: string) =>
        image
          .replaceAll(`%1T`, `https://cdn.sanity.io/images/`)
          .replaceAll(`%2T`, `production`)
          .replaceAll(`%3T`, `-765x825.png`),
      ),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} has been added to DB`);
    });
};

const webhook = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `POST`) {
    try {
      const requestBuffer = await buffer(req);
      const payload = requestBuffer.toString();
      const sig = req.headers[`stripe-signature`];

      let event;
      // Verify that the Event posted came from stripe
      try {
        event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
      } catch (error) {
        if (error instanceof Error)
          res.status(400).send(`Webhook error ${error.message}`);
      }

      // Handle the checkout.session.completed event
      if (event.type === `checkout.session.completed`) {
        const session = event.data.object;

        // Fulfill the order
        return fulfillOrder(session)
          .then(() => res.status(200).end())
          .catch((err) => res.status(400).send(`webhook error ${err.message}`));
      }
    } catch (error) {
      if (error instanceof Error) res.status(500).json(error.message);
    }
  }
};
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default webhook;
