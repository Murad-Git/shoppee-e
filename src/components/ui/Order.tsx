import { Orders } from '@/types/main';
import moment from 'moment';
import React from 'react';
import Currency from 'react-currency-formatter';

interface Props {
  order: Orders;
}

export default function Order({ order }: Props) {
  const { id, amount, amountShipping, items, timestamp, images } = order;
  const deliveryText =
    amountShipping === 0 ? ` - Free Shipping ` : ` - Next Day Delivery `;
  console.log(images);
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="uppercase font-bold text-xs">order placed</p>
          <p>{moment.unix(timestamp).format(`DD MMM YYYY`)}</p>
        </div>
        <div>
          <p className="uppercase text-xs font-bold">total</p>
          <p>
            <Currency quantity={amount} currency="USD" />
            {deliveryText}
            <Currency quantity={amountShipping} currency="USD" />
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
          {items.length} items
        </p>
        <p className="uppercase absolute top-2 right-2 w-40 lg:w-96 truncate text-xs whitespace-nowrap">
          order #{id}
        </p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="product"
              className="h-20 object-contain sm:h-44"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
