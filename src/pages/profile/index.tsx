import ShopItems from '@/components/shopSection/ShopItems';
import Button from '@/components/ui/Button';
import OrdersUI from '@/components/ui/OrdersUI';
import { useAppSelector } from '@/types/hooks';
import db from '@/utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import moment from 'moment';
import { GetServerSideProps, NextPage } from 'next';
import { getSession, useSession } from 'next-auth/react';
import Image from 'next/dist/client/image';
import { useRouter } from 'next/router';

import { useState } from 'react';
import { ordersProps } from '../orders';

const Profile: NextPage<ordersProps> = ({ orders }: ordersProps) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [toggleRender, setToggleRender] = useState({
    liked: true,
  });
  const likedProducts = useAppSelector(
    (state) => state.productsSlice.likedProducts,
  );

  return (
    <main className="mt-32 container mb-20">
      <div className="flex items-end mb-8">
        <div className="w-20 mr-8">
          <Image
            src={session?.user?.image || `/images/profile/no-person.png`}
            width={500}
            height={500}
            objectFit="cover"
            alt="product"
          />
        </div>
        <h4>
          Hello <span>{session?.user?.name}</span>
        </h4>
      </div>
      <div className="grid">
        <div className="flex items-center justify-evenly">
          <Button
            className={
              !toggleRender.liked
                ? `btn btn-primary`
                : `btn btn-outline-primary`
            }
            onClick={() =>
              setToggleRender((prev) => ({ ...prev, liked: false }))
            }
          >
            Your orders
          </Button>
          <Button
            className={
              toggleRender.liked ? `btn btn-primary` : `btn btn-outline-primary`
            }
            onClick={() =>
              setToggleRender((prev) => ({ ...prev, liked: true }))
            }
          >
            Liked products
          </Button>
        </div>
        <div className="mt-10">
          {toggleRender.liked ? (
            likedProducts.length ? (
              <ShopItems products={likedProducts} />
            ) : (
              <Button
                className="btn btn-primary mt-4"
                onClick={() => router.push(`/shop`)}
              >
                Go Shopping
              </Button>
            )
          ) : (
            <>
              {session ? (
                <OrdersUI orders={orders} />
              ) : (
                <h4>Please sign in to see your orders</h4>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
};
export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const stripe = require(`stripe`)(process.env.STRIPE_SECRET_KEY);

  // Get the users logged in credentials
  const session = await getSession(context);
  if (!session) {
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
      encodeURIComponent(session.user?.email as string).replace(/\./g, `%2E`) +
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
