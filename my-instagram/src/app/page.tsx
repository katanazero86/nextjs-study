import FollowingSection from '@/components/FollowingSection/FollowingSection';
import PostsSection from '@/components/PostsSection/PostsSection';

export default function Home() {
  return (
    <main className="p-2">
      <FollowingSection />
      <PostsSection />
    </main>
  );
}
