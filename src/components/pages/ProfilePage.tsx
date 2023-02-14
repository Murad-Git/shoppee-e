import { OrdersUI } from '@/components/orders/OrdersUI';
import { ShopItems } from '@/components/shopSection/ShopItems';
import { Button } from '@/components/ui/Button';
import { useAppSelector } from '@/hooks/hooks';
import type { ordersProps } from '@/types/main';
import { useSession } from 'next-auth/react';
import Image from 'next/dist/client/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const ProfilePage = ({ orders, noOrders }: ordersProps) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [toggleRender, setToggleRender] = useState({
    liked: true,
  });
  const likedProducts = useAppSelector(
    (state) => state.productsSlice.likedProducts,
  );
  return (
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
            variant={toggleRender.liked ? `outline` : `primary`}
            size="small"
            onClick={() =>
              setToggleRender((prev) => ({ ...prev, liked: false }))
            }
          >
            Your orders
          </Button>
          <Button
            variant={toggleRender.liked ? `primary` : `outline`}
            size="small"
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
                  variant="primary"
                  size="small"
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
                variant="primary"
                size="small"
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
  );
};
