import { createClient } from 'next-sanity';
// import imageUrlBuilder from '@sanity/image-url';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || `production`,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: `2022-10-12`,
  useCdn: process.env.NEXT_PUBLIC_SANITY_DATASET === `production`,
};

// const builder = imageUrlBuilder(config);

export const sanityClient = createClient(config);

// export const urlFor = (source) => builder.image(source);
// export const urlFor = (source) => createImageUrlBuilder(config).image(source);
