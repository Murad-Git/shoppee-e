import { ShopPage } from '@/components/pages/ShopPage';
import { Props } from '@/components/shopSection/ShopSection';
import { sanityRequest } from '@/utils/requests';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { NextPage } from 'next/types';

const Shop: NextPage<Props> = ({ products }) => {
  return (
    <>
      <Head>
        <title>E-commerce webshop</title>
        <meta
          name="description"
          content="Find your favourite product, buy it immediately or save it for later"
          key="desc"
        />
      </Head>
      <ShopPage products={products} />
    </>
  );
};

export default Shop;
//@ts-ignore: Unreachable code error
export const getStaticProps: GetStaticProps = async () => {
  try {
    const products = await sanityRequest();
    if (!products)
      return {
        redirect: {
          destination: `/`,
          permanent: false,
        },
      };
    return {
      props: {
        products,
      },
      revalidate: 30,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return {
        notFound: true,
      };
    }
  }
};
