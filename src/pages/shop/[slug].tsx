import InfoBlock from '@/components/infoBlock/InfoBlock';
import InstagramFollow from '@/components/InstagramFollow/InstagramFollow';
import ShopItem from '@/components/shopSection/ShopItem';
import Button from '@/components/ui/Button';
import Slider from '@/components/ui/Slider';
import useSnackBar from '@/hooks/use-snackBar';
import { addProduct, removeAllProducts } from '@/store/productsSlice';
import { useAppDispatch } from '@/types/hooks';
import { Product } from '@/types/main';
import { sanityRequest } from '@/utils/requests';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';

interface Props {
  product: Product;
  products: Product[];
}

const Product: NextPage<Props> = ({ product, products }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  // const productsList = useAppSelector(productsValue);
  const [quantity, setQuantity] = useState(1);
  const { image, category, name, description, price } = product;
  const formattedProduct = { ...product };
  formattedProduct.quantity = quantity;
  formattedProduct.totalPrice = product.price * quantity;

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
  // const removeAllItems = () => {
  //   dispatch(removeAllProducts());
  // };
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
    <div className="container mt-32">
      <div className="product  md:px-8 lg:px-12">
        <div className="product_main my-12 grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div
            className={`mx-auto w-[20rem] ${
              product.onstock === false && `bg-white opacity-40`
            }`}
          >
            <Image
              src={image}
              height={500}
              width={500}
              objectFit="cover"
              alt="product"
              layout="responsive"
              priority
            />
          </div>
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col justify-between">
              <h6 className="text-[#555] mt-5 md:mt-0 capitalize">
                {category}
              </h6>
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
              <Button
                onClick={OnBuyNow}
                className="btn btn-outline-primary mr-4 w-1/2 md:w-[40%] md:p-3"
              >
                buy now
              </Button>
              <Button
                onClick={addToBasket}
                className="btn btn-primary  w-1/2 md:w-[40%] md:p-3"
              >
                add to cart
              </Button>
            </div>
          </div>
        </div>
        <hr className="lg:mt-20" />
        <div className="reviews my-10">
          <div className="flex justify-between items-center">
            <h4 className="font-bold">Reviews:</h4>
            <button
              className="cursor-pointer text-accent-color font-bold text-sm leading-[1.5] text-center relative transition-all duration-300 ease-linear  uppercase p-1"
              onClick={() => dispatch(removeAllProducts())}
            >
              Leave Feedback
            </button>
          </div>
          <div className="review mt-8">
            {/* userImage */}
            <div className="flex flex-col justify-between items-start">
              <div className="flex justify-between w-full ">
                <h6 className="font-bold mb-0">Bill Harrison</h6>
                <p className="text-[#555] mb-0">2021-12-30</p>
              </div>
              <div className="flex items-start justify-start">
                <button className="flex cursor-pointer border-0">
                  <FontAwesomeIcon icon={faStar} className="h-2" />
                </button>
                <button className="flex cursor-pointer border-0">
                  <FontAwesomeIcon icon={faStar} className="h-2" />
                </button>
                <button className="flex cursor-pointer border-0">
                  <FontAwesomeIcon icon={faStar} className="h-2" />
                </button>
                <button className="flex cursor-pointer border-0">
                  <FontAwesomeIcon icon={faStar} className="h-2" />
                </button>
                <button className="flex cursor-pointer border-0">
                  <FontAwesomeIcon icon={faStar} className="h-2" />
                </button>
              </div>
              <p className="mb-0 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus.
                Vestibulum ultricies aliquam.
              </p>
            </div>
          </div>
          <div className="review mt-8">
            {/* userImage */}
            <div className="flex flex-col justify-between items-start">
              <div className="flex justify-between w-full ">
                <h6 className="font-bold mb-0">Bill Harrison</h6>
                <p className="text-[#555] mb-0">2021-12-30</p>
              </div>
              <div className="flex items-start justify-start">
                <button className="flex cursor-pointer border-0">
                  <FontAwesomeIcon icon={faStar} className="h-2" />
                </button>
                <button className="flex cursor-pointer border-0">
                  <FontAwesomeIcon icon={faStar} className="h-2" />
                </button>
                <button className="flex cursor-pointer border-0">
                  <FontAwesomeIcon icon={faStar} className="h-2" />
                </button>
                <button className="flex cursor-pointer border-0">
                  <FontAwesomeIcon icon={faStar} className="h-2" />
                </button>
                <button className="flex cursor-pointer border-0">
                  <FontAwesomeIcon icon={faStar} className="h-2" />
                </button>
              </div>
              <p className="mb-0 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus.
                Vestibulum ultricies aliquam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-10">
        <p className="font-bold">You may also like:</p>
      </div>
      <div className="h-[40rem] md:h-[35rem] my-12 mx-auto flex">
        <Slider>
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ShopItem product={product} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <hr />
      <InfoBlock />
      <hr />
      <InstagramFollow />
    </div>
  );
};

export default Product;
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const products = await sanityRequest();
    if (!products) throw new Error(`Could not find product items from CMS`);
    const paths = products.map((product) => ({
      params: {
        slug: product.slug,
      },
    }));
    return {
      paths,
      fallback: `blocking`,
    };
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await sanityRequest(params?.slug as string);
  const products = await sanityRequest();

  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: product[0],
      products,
    },
  };
};
