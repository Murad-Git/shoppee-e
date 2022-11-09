import ShopItem from './ShopItem';
import { Props } from './ShopSection';

export default function ShopItems({ products, ...props }: Props) {
  return (
    <div
      className="mx-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 px-12"
      {...props}
    >
      {products.map((item) => (
        <ShopItem key={item.id} {...item} />
      ))}
    </div>
  );
}
