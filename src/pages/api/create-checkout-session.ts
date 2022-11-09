import { Product } from '@/types/main';
import type { NextApiRequest, NextApiResponse } from 'next';

const stripe = require(`stripe`)(process.env.STRIPE_SECRET_KEY);

interface Props {
  products: Product[];
  email: string;
}

const checkoutSession = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === `POST`) {
    try {
      const { products, email }: Props = req.body;

      const transformedProducts = products.map((product) => ({
        quantity: product.quantity,
        price_data: {
          currency: `usd`,
          unit_amount: product.price * 100,
          product_data: {
            name: product.name,
            images: [product.image],
            description: product.description,
          },
        },
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: [`card`],
        shipping_options: [
          { shipping_rate: `shr_1LzS6uGs9BLa1ieT3nQqbAk2` },
          { shipping_rate: `shr_1LzS5uGs9BLa1ieT4yQOTApo` },
        ],
        shipping_address_collection: {
          allowed_countries: [
            `US`,
            `CA`,
            `GB`,
            `PL`,
            `UZ`,
            `DK`,
            `TR`,
            `BY`,
            `UA`,
          ],
        },
        line_items: transformedProducts,
        mode: `payment`,
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
          email,
          images: JSON.stringify(
            products.map((product) =>
              product.image
                .replaceAll(`https://cdn.sanity.io/images/`, `%1T`)
                .replaceAll(`production`, `%2T`)
                .replaceAll(`-765x825.png`, `%3T`),
            ),
          ),
          description: `${products.length} items for ${email}`,
        },
      });
      res.status(200).json({ id: session.id });
    } catch (error) {
      if (error instanceof Error) res.status(500).json(error.message);
    }
  } else {
    res.setHeader(`Allow`, `POST`);
    res.status(405).send(`Method Not Allowed`);
  }
};
export default checkoutSession;
