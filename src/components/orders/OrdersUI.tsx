import type { ordersProps } from '@/types/main';
import moment from 'moment';
import Image from 'next/dist/client/image';
// import Currency from 'react-currency-formatter';

export const OrdersUI = ({ orders }: ordersProps) => {
  const totalItems = (items: { quantity: number }[]) =>
    items.reduce((acc, item) => (acc += item.quantity), 0);

  const orderedItems = (items: { quantity: number }[], images: string[]) => {
    return items.map(function (x, i) {
      return { amount: x.quantity, image: images[i] };
    });
  };
  return (
    <>
      <h4>
        {(!!orders && orders?.length === 0 && `You do not have orders yet`) ||
          (orders?.length === 1 && `1 Order`) ||
          (orders?.length > 1 && orders?.length + ` Orders`)}
      </h4>

      <div className="mt-5 space-y-4 overflow-hidden">
        {orders?.length > 0 &&
          orders?.map((order, index) => (
            <div className="relative border rounded-md" key={index}>
              <div className="flex items-center space-x-10 p-5">
                <div>
                  <p className="uppercase font-bold text-xs">order placed</p>
                  <p>
                    {moment.unix(order.value.timestamp).format(`DD MMM YYYY`)}
                  </p>
                </div>
                <div>
                  <p className="uppercase text-xs font-bold">total</p>
                  <p>
                    {order.value.amount} $
                    {/* <Currency quantity={order.value.amount} currency="USD" />
                    {deliveryText(order.value.amountShipping)}
                    <Currency
                      quantity={order.value.amountShipping}
                      currency="USD"
                    /> */}
                  </p>
                </div>
                <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right">
                  {totalItems(order.value.items)} items
                </p>
                <p className="uppercase absolute top-2 right-2 w-40 lg:w-96 truncate text-xs whitespace-nowrap">
                  order id #{order.value.id}
                </p>
              </div>
              <div className="p-5 sm:p-10">
                {/* <div className="whitespace-nowrap space-x-6 overflow-y-hidden overflow-x-auto scrollbar-thin scroll-smooth h-20"> */}
                <div className="space-x-6 overflow-x-auto overflow-y-hidden whitespace-nowrap w-[25rem] sm:w-[30rem] md:w-[40rem] lg:w-full scrollbar-thin scroll-smooth">
                  {orderedItems(order.value.items, order.value.images).map(
                    (item, index) => (
                      <div
                        key={index}
                        className="w-32 object-contain relative inline-block"
                        // className="inline-block w-20 object-contain relative "
                      >
                        <p className="absolute text-sm md:text-base top-2 left-4 z-20 font-bold">
                          {item.amount}x
                        </p>
                        <Image
                          height={500}
                          width={500}
                          objectFit="cover"
                          key={index}
                          src={item.image}
                          alt="product"
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
