import React from 'react';
import { useAppSelector } from '@/types/hooks';
import { productsValue } from '@/store/productsSlice';
import TableItem from './TableItem';
import Button from './Button';
import { useRouter } from 'next/router';

export default function CartTable() {
  const products = useAppSelector(productsValue);
  const router = useRouter();
  const handleOnGoShop = () => {
    router.push(`/products`);
  };
  return (
    <table>
      <thead>
        <tr className="border-b-2 border-[rgb(217,217,217)]">
          <th className="bg-transparent text-dark px-0">Products</th>
          <th className="bg-transparent text-dark px-0">Quantity</th>
          <th className="bg-transparent text-dark px-0">Price</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 ? (
          products.map((product) => (
            <TableItem product={product} key={product.id} />
          ))
        ) : (
          <div>
            <h2 className="my-8">Your shopping cart is empty</h2>
            <Button className="btn btn-primary" onClick={handleOnGoShop}>
              Go Shop
            </Button>
          </div>
        )}
      </tbody>
    </table>
  );
}
