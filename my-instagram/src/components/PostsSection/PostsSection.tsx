'use client';

import PostCard from '@/components/PostCard/PostCard';
import useSWR from 'swr';
import { PostsModel } from '@/models/posts';

export default function PostsSection() {
  const { data, isLoading, error } = useSWR<PostsModel>('/api/posts');
  console.log(data);

  return (
    <section className="py-2">
      <PostCard />
      <PostCard />
    </section>
  );
}
