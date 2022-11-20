import ShopItem from './ShopItem';
import { Props } from './ShopSection';

export default function ShopItems({ products, ...props }: Props) {
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
        </div>
      )}
    </div>
  );
}
