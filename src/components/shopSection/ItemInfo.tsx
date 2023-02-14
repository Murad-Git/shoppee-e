import { Button } from '@/components/ui/Button';
import { useAppDispatch } from '@/hooks/hooks';
import { useSnackBar } from '@/hooks/use-snackBar';
import { addProduct } from '@/store/productsSlice';
import type { Product } from '@/types/main';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const ItemInfo = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const { category, name, description, price } = product;
  const formattedProduct = {
    ...product,
    quantity,
    totalPrice: product.price * quantity,
  };
  const addProductInfo = useSnackBar({
    amount: quantity,
    product: product.name,
    snacktype: {
      type: `product`,
      func: `add`,
    },
    variant: `success`,
  });
  const unavailableProduct = useSnackBar({
    snacktype: {
      type: `message`,
      message: `Product is not unavailable. Please choose another one`,
    },
    variant: `warning`,
  });
  const addToBasket = () => {
    if (product.onstock === false) return unavailableProduct();
    addProductInfo();
    dispatch(
      addProduct({
        newProduct: formattedProduct,
      }),
    );
  };

  const OnBuyNow = () => {
    if (product.onstock === false) return unavailableProduct();
    addProductInfo();
    dispatch(
      addProduct({
        newProduct: formattedProduct,
      }),
    );
    router.push(`/cart`);
  };
  return (
    <div className="flex flex-col justify-between ">
      <div className="flex flex-col justify-between">
        <h6 className="text-[#555] mt-5 md:mt-0 capitalize">{category}</h6>
        <h4 className=" font-bold">{name}</h4>
        <div className="reviews flex items-center">
          <FontAwesomeIcon icon={faStar} className="h-4" />
          <FontAwesomeIcon icon={faStar} className="h-4" />
          <FontAwesomeIcon icon={faStar} className="h-4" />
          <FontAwesomeIcon icon={faStar} className="h-4" />
        </div>
        <p className="my-4">{description}</p>
        <div className="quantity flex">
          <div className="flex flex-col mr-12 justify-between">
            <h6 className="font-bold text-[#555] uppercase">Quantity</h6>
            <div className="flex items-center">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))
                }
                className="flex cursor-pointer p-1 mr-4 border-0"
              >
                <FontAwesomeIcon icon={faMinus} className="h-2" />
              </button>
              <p className="font-bold mb-0">{quantity}</p>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="flex cursor-pointer p-1 ml-4 border-0"
              >
                <FontAwesomeIcon icon={faPlus} className="h-2" />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h6 className="font-bold text-[#555] uppercase">price</h6>
            <h6 className="font-bold">{price}$</h6>
          </div>
        </div>
      </div>
      <div className="mt-6 flex md:justify-center">
        <Button onClick={OnBuyNow} variant="outline" size="normal">
          buy now
        </Button>
        <Button onClick={addToBasket} variant="primary" size="normal">
          add to cart
        </Button>
      </div>
    </div>
  );
};
