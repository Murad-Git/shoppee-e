import React from 'react';
import CartTable from '@/components/ui/CartTable';
import { useAppSelector } from '@/types/hooks';
import { productsValue } from '@/store/productsSlice';
import CartTotal from '@/components/ui/CartTotal';

export default function Cart() {
  const products = useAppSelector(productsValue);
  return (
    <div className="container mt-24 lg:grid lg:grid-cols-3 lg:gap-4 xl:gap-12">
      <div className="lg:col-span-2">
        <h2 className="font-bold mb-12 mt-6">Shopping Cart</h2>
        {/* here does table */}
        {products.length > 0 ? (
          <CartTable />
        ) : (
          <h2 className="mb-12">Your Shopping Cart is Empty</h2>
        )}
      </div>
      {products.length > 0 && <CartTotal />}
    </div>
  );
}
