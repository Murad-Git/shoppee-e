import { DiscountSection } from '@/components/footer/DiscountSection';
import { TopProducts } from '@/components/footer/TopProducts';
import { HeroCarousel } from '@/components/hero/HeroCarousel';
import { ShopSection } from '@/components/shopSection/ShopSection';
import type { Product } from '@/types/main';
import { sanityRequest } from '@/utils/requests';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface Props {
  products: [Product];
}

const Home: NextPage<Props> = ({ products }) => {
  const router = useRouter();

  if (!router.isFallback && !products) {
    return <p>Error accured</p>;
  }
  return (
    <>
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <>
          <Head>
            <title>E-commerce webshop</title>
            <meta
              name="google-site-verification"
              content="YaDnZV8r5BtNQxmiuO0NtkvOulT9dthyYDf15q_cUtE"
            />
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
        </>
      )}
    </>
  );
};
export default Home;

//@ts-ignore: Unreachable code error
export const getStaticProps: GetStaticProps = async () => {
  try {
    const products = await sanityRequest();
    if (!products)
      return {
        notFound: true,
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
