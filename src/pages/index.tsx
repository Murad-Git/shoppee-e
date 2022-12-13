import DiscountSection from '@/components/discountSection/DiscountSection';
import HeroCarousel from '@/components/hero/HeroCarousel';
import ShopSection from '@/components/shopSection/ShopSection';
import TopProducts from '@/components/topProducts/TopProducts';
import { Product } from '@/types/main';
import { sanityRequest } from '@/utils/requests';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

interface Props {
  products: [Product];
}

const Home: NextPage<Props> = ({ products }: Props) => {
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
      <HeroCarousel />
      <ShopSection products={products} />
      <DiscountSection />
      <TopProducts />
      google-site-verification: google11242ba5d2b1ae2c.html
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const products = await sanityRequest();

    return {
      props: {
        products,
      },
      revalidate: 30,
    };
  } catch (error) {
    throw new Error(error as string);
  }
};
