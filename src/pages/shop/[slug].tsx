import { ShopSlugPage } from '@/components/pages/ShopSlugPage';
import type { Product } from '@/types/main';
import { sanityRequest } from '@/utils/requests';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next//head';
import { useRouter } from 'next/router';

interface Props {
  product: Product;
  products: Product[];
}

const Product: NextPage<Props> = ({ product, products }) => {
  const router = useRouter();
  if (!router.isFallback && !product?.name && !products) {
    return <p>Error accured</p>;
  }
  // const removeAllItems = () => {
  //   dispatch(removeAllProducts());
  // };
  return (
    <>
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <>
          <Head>
            <title>{product.name}</title>
            <meta name="description" content={product.description} />
          </Head>
          <ShopSlugPage products={products} product={product} />
        </>
      )}
    </>
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
    revalidate: 30,
  };
};
