import { addProduct, toggleLikedProduct } from '@/store/productsSlice';
import { useAppDispatch, useAppSelector } from '@/types/hooks';
import { Product } from '@/types/main';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faCartShopping,
  faHeart as solidHeart,
  faMagnifyingGlassPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';

interface Props {
  product: Product;
}

export default function ShopItem({ product }: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { image, category, name, slug, price } = product;

  const liked = useAppSelector((state) => state.likedProducts);
  const isLiked = liked.some((item) => item.id === product.id);
  console.log(liked);
  const onGoProduct = () => {
    router.push(`/products/${slug}`);
  };
  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const formattedProduct = { ...product };
    formattedProduct.quantity = 1;
    formattedProduct.totalPrice = product.price;
    dispatch(
      addProduct({
        newProduct: formattedProduct,
      }),
    );
  };
  const handleLikedProduct = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      dispatch(
        toggleLikedProduct({
          product,
        }),
      );
    },
    [product, dispatch],
  );
  return (
    <div
      onClick={onGoProduct}
      className="flex flex-col justify-center items-start cursor-pointer"
    >
      <div className="relative">
        <div className="mx-auto" onClick={onGoProduct}>
          <Image
            className="w-full z-0"
            src={image}
            height={500}
            width={500}
            objectFit="cover"
            alt="product"
          />
        </div>

        <div className="absolute h-full top-0 right-8 translate-x-[35%] flex flex-col justify-center text-[#555] space-y-9">
          <button onClick={handleLikedProduct}>
            <a className="cursor-pointer">
              <FontAwesomeIcon
                className="h-6"
                icon={isLiked ? solidHeart : faHeart}
              />
            </a>
          </button>
          <button>
            <a className="cursor-pointer">
              <FontAwesomeIcon className=" h-6" icon={faMagnifyingGlassPlus} />
            </a>
          </button>
          <button onClick={handleAdd}>
            <a
              className="
            mb-3 cursor-pointer"
            >
              <FontAwesomeIcon className="h-6" icon={faCartShopping} />
            </a>
          </button>
        </div>
      </div>

      <div className="mb-4 w-[10rem] ">
        <div className="relative ">
          <div className="flex flex-col items-start max-w-[245px] mx-auto justify-start">
            <div>
              <a className=" mt-4 inline-block text-[#555]">{category}</a>
              <a className="cursor-pointer text-[#232323]">
                <h6 className="text-base font-bold mt-1">{name}</h6>
              </a>
              <h6 className="text-base ">${price}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
