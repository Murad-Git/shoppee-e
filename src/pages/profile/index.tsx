import { ProfilePage } from '@/components/pages/ProfilePage';
import type { ordersProps } from '@/types/main';
import db from '@/utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import moment from 'moment';
import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';

const Profile: NextPage<ordersProps> = ({ orders, noOrders }: ordersProps) => {
  return (
    <>
      <Head>
        <title>Your profile</title>
        <meta
          name="description"
          content="Find your orders and list of your favourite products"
          key="desc"
        />
      </Head>
      <ProfilePage orders={orders} noOrders={noOrders} />
    </>
  );
};
export default Profile;

//@ts-ignore: Unreachable code error
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const stripe = require(`stripe`)(process.env.STRIPE_SECRET_KEY);

    // Get the users logged in credentials
    const session = await getSession(context);
    if (!session?.user) {
      return {
        redirect: {
          destination: `/`,
          permanent: false,
        },
      };
    }
    // Firebase db
    const ordersCol = collection(
      db,
      `users/` +
        encodeURIComponent(session.user?.email as string).replace(
          /\./g,
          `%2E`,
        ) +
        `/orders/`,
    );
    const ordersSnapshot = await getDocs(ordersCol);
    // Stripe orders
    const orders = await Promise.allSettled(
      ordersSnapshot.docs.map(async (order) => ({
        id: order.id,
        amount: order.data().amount,
        amountShipping: order.data().amount_shipping,
        images: order.data().images,
        timestamp: moment(order.data().timestamp.toDate()).unix(),
        items: (
          await stripe.checkout.sessions.listLineItems(order.id, { limit: 100 })
        ).data,
      })),
    );
    return {
      props: {
        orders,
      },
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return {
        props: {
          noOrders: true,
        },
      };
    }
  }
};
