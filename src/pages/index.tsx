import DiscountSection from '@/components/discountSection/DiscountSection';
import HeroCarousel from '@/components/hero/HeroCarousel';
import ShopSection from '@/components/shopSection/ShopSection';
import TopProducts from '@/components/topProducts/TopProducts';
import { Product } from '@/types/main';
import { sanityRequest } from '@/utils/requests';
import { GetStaticProps, NextPage } from 'next';
interface Props {
  products: [Product];
}

const Home: NextPage<Props> = ({ products }: Props) => {
  return (
    <>
      <HeroCarousel />
      <ShopSection products={products} />
      <DiscountSection />
      <TopProducts />
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const products = await sanityRequest();
    if (!products)
      return {
        notFound: true,
        redirect: `/`,
      };
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    throw new Error(error as string);
  }
};
