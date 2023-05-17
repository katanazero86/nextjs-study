import PostCard from '@/components/PostCard/PostCard';

export default function PostsSection() {
  return (
    <section className="py-2">
      {/*TODO: posts API call list render*/}
      <PostCard />
      <PostCard />
    </section>
  );
}
