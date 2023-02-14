import { Comments } from '@/components/shopSection/Comments';
import { ItemInfo } from '@/components/shopSection/ItemInfo';
import { ShopItem } from '@/components/shopSection/ShopItem';
import { Slider } from '@/components/ui/Slider';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { Props } from '../shopSection/ShopSection';

export const ShopSlugPage = ({ product, products }: Props) => {
  return (
    <div className="container py-20">
      <div className="product  md:px-8 lg:px-12">
        <div className="product_main my-12 grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div
            className={`mx-auto w-[20rem] ${
              product.onstock === false && `bg-white opacity-40`
            }`}
          >
            <Image
              src={product.image}
              height={500}
              width={500}
              objectFit="cover"
              alt="product"
              layout="responsive"
              priority
            />
          </div>
          <ItemInfo product={product} />
        </div>
        <hr className="lg:mt-20" />
        <Comments />
        <hr className="lg:mt-20" />
      </div>
      <hr />
      <div className="my-10">
        <p className="font-bold">You may also like:</p>
      </div>
      <div className="mx-auto flex">
        <Slider>
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ShopItem product={product} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </div>
  );
};
