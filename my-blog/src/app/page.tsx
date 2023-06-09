import Profile from "@/components/Profile/Profile";
import PostsSection from "@/components/PostsSection/PostsSection";
import LikePostsSection from "@/components/LikePostsSection/LikePostsSection";

export default function Home() {
    return (
        <main className="px-5">
            <Profile/>
            {/* @ts-expect-error Async Server Component */}
            <PostsSection>
                Featured Posts
            </PostsSection>
            <LikePostsSection />
        </main>
    )
}
