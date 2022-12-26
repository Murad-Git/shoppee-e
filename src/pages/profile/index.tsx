import OrdersUI from '@/components/orders/OrdersUI';
import ShopItems from '@/components/shopSection/ShopItems';
import Button from '@/components/ui/Button';
import { useAppSelector } from '@/types/hooks';
import { ordersProps } from '@/types/main';
import db from '@/utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import moment from 'moment';
import { GetServerSideProps, NextPage } from 'next';
import { getSession, useSession } from 'next-auth/react';
import Image from 'next/dist/client/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Profile: NextPage<ordersProps> = ({ orders, noOrders }: ordersProps) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [toggleRender, setToggleRender] = useState({
    liked: true,
  });
  const likedProducts = useAppSelector(
    (state) => state.productsSlice.likedProducts,
  );
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
      <main className="py-20 container">
        <h2 className="font-bold mb-22 border-b-2 mb-3 border-[rgb(217,217,217)] pb-6">
          Your Profile
        </h2>
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
            Hello <p>{session?.user?.name}</p>
          </h4>
        </div>
        <div className="grid">
          <div className="flex items-center justify-evenly ">
            <Button
              variant={toggleRender.liked ? `outline small` : `primary small`}
              onClick={() =>
                setToggleRender((prev) => ({ ...prev, liked: false }))
              }
            >
              Your orders
            </Button>
            <Button
              variant={toggleRender.liked ? `primary small` : `outline small`}
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
                <div className="p-10">
                  <h2>You do not have liked products</h2>
                  <Button
                    variant="primary small"
                    onClick={() => router.push(`/shop`)}
                  >
                    Go Shopping
                  </Button>
                </div>
              )
            ) : noOrders ? (
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
              <OrdersUI orders={orders} />
            )}
          </div>
        </div>
      </main>
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
          noOrders: true,
        },
      };
    }
  }
};
