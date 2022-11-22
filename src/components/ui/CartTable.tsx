import { productsValue } from '@/store/productsSlice';
import { useAppSelector } from '@/types/hooks';
import { useRouter } from 'next/router';
import Button from './Button';
import TableItem from './TableItem';

export default function CartTable() {
  const products = useAppSelector(productsValue);
  const router = useRouter();

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
        <>
          {products.length > 0 ? (
            products.map((product) => (
              <TableItem product={product} key={product.id} />
            ))
          ) : (
            <div>
              <h2 className="my-8">Your shopping cart is empty</h2>
              <Button
                className="btn btn-primary"
                onClick={() => router.push(`/shop`)}
              >
                Go Shop
              </Button>
            </div>
          )}
        </>
      </tbody>
    </table>
  );
}
