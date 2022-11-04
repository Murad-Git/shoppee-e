import { GetServerSideProps, NextPage } from 'next';
import { getSession, useSession } from 'next-auth/react';
import React from 'react';
import db from '../../firebase';
import moment from 'moment';
import { collection, getDocs } from 'firebase/firestore';
import { Orders } from '@/types/main';
import Order from '@/components/ui/Order';

interface Props {
  // orders: Orders | ArrayProps;
  orders: {
    status: string;
    value: Orders;
  }[];
}

const Orders: NextPage<Props> = ({ orders }) => {
  const { data: session } = useSession();
  console.log(orders);
  return (
    <main className="mt-32 container">
      <h2 className="font-bold mb-22 mt-6 border-b-2 border-[rgb(217,217,217)] pb-6">
        Your Orders
      </h2>
      {session ? (
        <h4>
          {orders.length > 1 ? orders.length + ` Orders` : `1 Order`}
          {/* {orders instanceof Array ? orders.length + ` Orders` : `1 Order`} */}
        </h4>
      ) : (
        <h4>Please sign in to see your orders</h4>
      )}
      <div className="mt-5 space-y-4">
        {orders?.map((order, index) => (
          <Order key={index} order={order.value} />
        ))}
      </div>
    </main>
  );
};
export default Orders;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const stripe = require(`stripe`)(process.env.STRIPE_SECRET_KEY);

  // Get the users logged in credentials
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }
  // Firebase db
  const ordersCol = collection(
    db,
    `users/` +
      encodeURIComponent(session.user?.email).replace(/\./g, `%2E`) +
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
};
