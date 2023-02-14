import { CartTable } from '@/components/cart/CartTable';
import { CartTotal } from '@/components/cart/CartTotal';

export const CartPage = () => {
  return (
    <div className="container pt-32 lg:grid lg:grid-cols-3 lg:gap-4 xl:gap-12 pb-6">
      <div className="lg:col-span-2">
        <h2 className="font-bold mb-12 mt-6">Shopping Cart</h2>
        <CartTable />
      </div>
      <CartTotal />
    </div>
  );
};
