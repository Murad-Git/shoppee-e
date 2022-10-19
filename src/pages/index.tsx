import { sanityClient, urlFor } from '../../sanity';
import DiscountSection from '@/components/discountSection/DiscountSection';
import FromBlog from '@/components/fromBlog/FromBlog';
import HeroCarousel from '@/components/hero/HeroCarousel';
import InfoBlock from '@/components/infoBlock/InfoBlock';
import InstagramFollow from '@/components/InstagramFollow/InstagramFollow';
import ShopSection from '@/components/shopSection/ShopSection';
import TopProducts from '@/components/topProducts/TopProducts';
import { State, wrapper } from '@/store/store';
import { Product } from '@/types/main';

// import { addProduct } from '@/store/productsSlice';
import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next';
import { addProduct } from '@/store/productsSlice';
// import { useAppSelector } from '@/types/hooks';
// import { RootState } from '@/store/store';

interface Props {
  products: [Product];
}

const Home: NextPage<Props> = ({ products }) => {
  return (
    <div>
      <HeroCarousel />
      <ShopSection />
      <DiscountSection />
      <TopProducts />
      <hr />
      <InfoBlock />
      <hr />
      <FromBlog />
      <InstagramFollow />
    </div>
  );
};
export default Home;

// Home.getStaticProps = wrapper.getStaticProps()
export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    const query = `*[_type== 'product']{
  "id":_id,
  name,
  description,
  "onstock":availability,
  category,
  price,
  currency,
  "image":image.asset->url,
  "slug":slug.current
}`;

    const products: [Product] = await sanityClient.fetch(query);

    if (!products)
      return {
        notFound: true,
        redirect: `/`,
      };
    products.forEach((product) => store.dispatch(addProduct(product)));
    console.log(store.getState().reducer.products);
    return {
      props: {
        products,
      },
      revalidate: 10000,
    };
  },
);
