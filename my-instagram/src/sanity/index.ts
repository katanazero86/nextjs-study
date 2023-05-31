import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { sanityUser } from '@/sanity/user';
import { sanityPosts } from '@/sanity/posts';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: 'production',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN || '',
  apiVersion: '2021-10-21',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source).width(800).url();
}

export const assetsURL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-03-25/assets/images/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;

export const sanityClient = {
  sanityUser,
  sanityPosts,
};
