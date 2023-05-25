'use client';

import useSWR from 'swr';
import PostCard from '@/components/PostCard/PostCard';
import { PostsModel } from '@/models/posts';
import { urlFor } from '@/sanity';

export default function PostsSection() {
  const { data: posts, isLoading, error } = useSWR<PostsModel[]>('/api/posts');

  return (
    <section className="py-2">
      {posts !== undefined &&
        posts.length > 0 &&
        posts.map((post) => <PostCard key={post._id} {...post} image={urlFor(post.image)} />)}
    </section>
  );
}
