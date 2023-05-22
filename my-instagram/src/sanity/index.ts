import { createClient } from '@sanity/client';
import { sanityUser } from '@/sanity/user';
import { sanityPosts } from '@/sanity/posts';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: 'production',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN || '',
  apiVersion: '2021-10-21',
});

export const sanityClient = {
  sanityUser,
  sanityPosts,
};
