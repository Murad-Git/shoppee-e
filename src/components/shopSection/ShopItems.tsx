import { useRouter } from 'next/router';
import Button from '../ui/Button';
import ShopItem from './ShopItem';
import { Props } from './ShopSection';

export default function ShopItems({ products, ...props }: Props) {
  const router = useRouter();

  return (
    <div
      className="mx-auto mb-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 px-12"
      {...props}
    >
      {products.length ? (
        products.map((product) => (
          <ShopItem key={product.id} product={product} />
        ))
      ) : (
        <div>
          <h3 className="mt-5 mx-auto">No products found</h3>
          <Button
            className="btn btn-primary mt-4"
            onClick={() => router.push(`/shop`)}
          >
            Go Shopping
          </Button>
        </div>
      )}
    </div>
  );
}
