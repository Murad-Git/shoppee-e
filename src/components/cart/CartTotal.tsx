import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { useSnackBar } from '@/hooks/use-snackBar';
import {
  productsValue,
  removeAllProducts,
  selectTotalPrice,
} from '@/store/productsSlice';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import Card from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Button } from '../ui/Button';

const stripePromise = loadStripe(process.env.stripe_public_key as string);

export const CartTotal = () => {
  const [isFrontOfCardVisible, setIsFrontOfCardVisible] = useState(true);
  const { data: session } = useSession();
  const totalPrice = useAppSelector(selectTotalPrice);
  const products = useAppSelector(productsValue);
  const dispatch = useAppDispatch();
  const emptyCartInfo = useSnackBar({
    snacktype: {
      type: `message`,
      message: `Your cart is empty. Please add a product`,
    },
    variant: `warning`,
  });
  const createCheckoutSession = async () => {
    if (!session) return;
    if (!products?.length) return emptyCartInfo();
    const stripe = await stripePromise;

    // Call the backend to create checkout session
    const checkoutSession = await axios.post(`/api/create-checkout-session`, {
      products,
      email: session?.user?.email,
    });

    dispatch(removeAllProducts());
    // Redirect to Stripe Checkout
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result?.error) alert(result.error.message);
  };

  const toggleCardFlip = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsFrontOfCardVisible((prev) => !prev);
  };
  const darkState = useAppSelector((state) => state.productsSlice.darkMode);

  return (
    <div
      className={`lg:col-span-1 mt-auto lg:mt-6 pb-4 ${
        darkState ? `bg-slate-700` : `shadow-xl`
      }`}
    >
      <section className="flex flex-col">
        <div className="p-8">
          <h2 className="font-bold mb-12">Cart Total</h2>
          <div className="flex">
            <h6 className="font-bold mr-12 mb-0">Subtotal:</h6>
            <h6 className="font-bold mb-0">
              <>{totalPrice || 0}$</>
            </h6>
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
            <h5 className="font-bold">
              <>{totalPrice || 0}$</>
            </h5>
          </div>
        </div>
        <Button
          onClick={createCheckoutSession}
          aria-disabled={!session}
          role="link"
          variant={session ? `logged` : `unlogged`}
          size="full"
        >
          {session ? `check out` : `login to proceed`}
        </Button>
      </section>
      <div className="cursor-pointer mt-6" onClick={toggleCardFlip}>
        <Card
          cvc="424"
          expiry="08/25"
          name="John Smith"
          number="4242 4242 4242 4242"
          focused={isFrontOfCardVisible ? `number` : `cvc`}
        />
      </div>
    </div>
  );
};
