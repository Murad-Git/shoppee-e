import { productsValue, selectTotalPrice } from '@/store/productsSlice';
import { useAppSelector } from '@/types/hooks';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Button from './Button';
const stripePromise = loadStripe(process.env.stripe_public_key as string);

export default function CartTotal() {
  const { data: session } = useSession();
  const totalPrice = useAppSelector(selectTotalPrice);
  const products = useAppSelector(productsValue);

  const createCheckoutSession = async () => {
    if (!session) return;
    const stripe = await stripePromise;

    // Call the backend to create checkout session
    const checkoutSession = await axios.post(`/api/create-checkout-session`, {
      products,
      email: session?.user?.email,
    });

    // Redirect to Stripe Checkout
    const result = await stripe?.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result?.error) alert(result.error.message);
  };
  return (
    <div className="lg:col-span-1 mt-auto lg:mt-6">
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
          onClick={createCheckoutSession}
          aria-disabled={!session}
          role="link"
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
