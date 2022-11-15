import { Product } from '@/types/main';
import { sanityClient } from '@/utils/sanity';

export const sanityRequest = async (slug?: any) => {
  try {
    const query = `*[_type== 'product' ${
      slug ? `&& slug.current == "${slug}"` : ``
    }]{
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
    const products: [Product] = await sanityClient.fetch(
      query,
      slug && { slug },
    );
    return products;
  } catch (error) {
    console.error(error);
    if (error instanceof Error) throw new Error(error.message);
  }
};
