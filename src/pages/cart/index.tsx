import { CartPage } from '@/components/pages/CartPage';
import { useAppSelector } from '@/hooks/hooks';
import { productsValue } from '@/store/productsSlice';
import Head from 'next/head';

export default function Cart() {
  const productsList = useAppSelector(productsValue);

  return (
    <>
      <Head>
        <title>
          {productsList && productsList?.length > 0 ? productsList.length : ``}
          {` `}
          items in your cart
        </title>
        <meta name="description" content="Your cart" key="desc" />
      </Head>
      <CartPage />
    </>
  );
}
