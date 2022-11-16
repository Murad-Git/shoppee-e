import { ordersProps } from '@/pages/orders';
import moment from 'moment';
import Image from 'next/dist/client/image';
import Currency from 'react-currency-formatter';

export default function OrdersUI({ orders }: ordersProps) {
  const deliveryText = (amountShipping: number) =>
    amountShipping === 0 ? ` - Free Shipping ` : ` - Next Day Delivery `;

  const totalItems2 = (items: { quantity: number }[]) =>
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

      <div className="mt-5 space-y-4">
        {orders?.length > 0 &&
          orders?.map((order, index) => (
            <div className="relative border rounded-md" key={index}>
              <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
                <div>
                  <p className="uppercase font-bold text-xs">order placed</p>
                  <p>
                    {moment.unix(order.value.timestamp).format(`DD MMM YYYY`)}
                  </p>
                </div>
                <div>
                  <p className="uppercase text-xs font-bold">total</p>
                  <p>
                    <Currency quantity={order.value.amount} currency="USD" />
                    {deliveryText(order.value.amountShipping)}
                    <Currency
                      quantity={order.value.amountShipping}
                      currency="USD"
                    />
                  </p>
                </div>
                <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
                  {totalItems2(order.value.items)} items
                </p>
                <p className="uppercase absolute top-2 right-2 w-40 lg:w-96 truncate text-xs whitespace-nowrap">
                  order id #{order.value.id}
                </p>
              </div>
              <div className="p-5 sm:p-10">
                <div className="flex space-x-6 overflow-x-auto">
                  {orderedItems(order.value.items, order.value.images).map(
                    (item, index) => (
                      <div
                        key={index}
                        className="min-w-[8rem] md:min-w-[13rem] object-contain sm:w-44 relative"
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
}
