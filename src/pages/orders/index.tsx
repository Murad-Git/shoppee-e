import Button from '@/components/ui/Button';
import OrdersUI from '@/orders/OrdersUI';
import { Order } from '@/types/main';
import db from '@/utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import moment from 'moment';
import { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

export interface ordersProps {
  noOrders?: boolean;
  orders: {
    status: string;
    value: Order;
  }[];
}

const Orders: NextPage<ordersProps> = ({ orders, noOrders }: ordersProps) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Your orders</title>
        <meta name="description" content="Your orders" key="desc" />
      </Head>
      <main className="py-20 container">
        <h2 className="font-bold mb-22 border-b-2 border-[rgb(217,217,217)] pb-6">
          Your Orders
        </h2>
        {noOrders ? (
          <div className="p-10">
            <h2>You do not have orders yet</h2>
            <Button
              variant="primary small"
              onClick={() => router.push(`/shop`)}
            >
              Go Shopping
            </Button>
          </div>
        ) : (
          <>
            <OrdersUI orders={orders} />
          </>
        )}
      </main>
    </>
  );
};
export default Orders;

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
    // const stripeOrders = ordersSnapshot.docs.map((doc) => doc.data());

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
          orders: null,
          noOrders: true,
        },
      };
    }
  }
};
