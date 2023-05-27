'use client';

import PostCard from '@/components/PostCard/PostCard';
import { urlFor } from '@/sanity';
import usePosts from '@/hooks/usePosts';

export default function PostsSection() {
  const { posts, isLoading, error } = usePosts();

  return (
    <section className="py-2">
      {posts !== undefined &&
        posts.length > 0 &&
        posts.map((post) => <PostCard key={post._id} {...post} imgUrl={urlFor(post.image)} />)}
    </section>
  );
}
