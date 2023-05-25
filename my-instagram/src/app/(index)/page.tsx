import FollowingSection from '@/components/pages/IndexPage/FollowingSection/FollowingSection';
import PostsSection from '@/components/pages/IndexPage/PostsSection/PostsSection';

export default function IndexPage() {
  return (
    <main className="p-2">
      <FollowingSection />
      <PostsSection />
    </main>
  );
}
