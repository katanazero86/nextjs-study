import Profile from "@/components/Profile/Profile";
import PostsSection from "@/components/PostsSection/PostsSection";
import LikePostsSection from "@/components/LikePostsSection/LikePostsSection";
import CustomLeftArrow from "@/components/Buttons/CustomLeftArrow/CustomLeftArrow";

export default function Home() {
    return (
        <main className="px-5">
            <Profile/>
            <PostsSection>
                Featured Posts
            </PostsSection>
            <LikePostsSection />
        </main>
    )
}
