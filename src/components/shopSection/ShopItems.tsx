import ShopItem from './ShopItem';
import { Props } from './ShopSection';

const ShopItems = ({ products, ...props }: Props) => {
  return (
    <div
      className="mx-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 px-12 space-y-3 mb-4"
      {...props}
    >
      {products && products?.length ? (
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
};
export default ShopItems;
