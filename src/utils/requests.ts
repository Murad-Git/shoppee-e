import { Product } from '@/types/main';
import { sanityClient } from 'sanity';

export const sanityRequest = async (slug?: string) => {
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
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    throw new Error(message);
  }
};
