import React from 'react';
import CartTable from '@/components/ui/CartTable';
import { useAppSelector } from '@/types/hooks';
import { productsValue } from '@/store/productsSlice';
import CartTotal from '@/components/ui/CartTotal';

export default function Cart() {
  const products = useAppSelector(productsValue);
  return (
    <div className="container mt-32 lg:grid lg:grid-cols-3 lg:gap-4 xl:gap-12">
      <div className="lg:col-span-2">
        <h2 className="font-bold mb-12 mt-6">Shopping Cart</h2>

        <CartTable />
      </div>
      {products.length > 0 && <CartTotal />}
    </div>
  );
}
