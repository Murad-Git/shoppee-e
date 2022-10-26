import { selectTotal } from '@/store/productsSlice';
import { useAppSelector } from '@/types/hooks';
import React from 'react';
import Button from './Button';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function CartTotal() {
  const { data: session } = useSession();
  const totalPrice = useAppSelector(selectTotal);

  return (
    <div className="lg:col-span-1 mt-auto lg:my-auto">
      <section className="bg-[#f5f5f5] flex flex-col">
        <div className="p-8">
          <h2 className="font-bold mb-12">Cart Total</h2>
          <div className="flex">
            <h6 className="font-bold mr-12 mb-0">Subtotal:</h6>
            <h6 className="font-bold mb-0">{totalPrice}$</h6>
          </div>
          <hr className="my-6 lg:my-10" />
          <div className="flex">
            <h6 className="mr-12 font-bold">Shipping:</h6>
            <div>
              <h6 className="font-bold mb-4">Free Shipping</h6>
              <p className="mb-0">
                Shipping options will be updated during checkout.
              </p>
            </div>
          </div>
          <hr className="my-6 lg:my-10" />
          <div className="flex">
            <h5 className="font-bold mr-16">Total:</h5>
            <h5 className="font-bold">{totalPrice}$</h5>
          </div>
        </div>
        <Button
          className={`btn btn-primary w-full ${
            !session && `!bg-unlogged-color`
          }`}
        >
          {session ? `check out` : `login to proceed`}
        </Button>
      </section>
    </div>
  );
}
