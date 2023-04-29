import Profile from "@/components/Profile/Profile";
import PostsSection from "@/components/PostsSection/PostsSection";

export default function Home() {
    return (
        <main className="px-5">
            <Profile/>
            <PostsSection>
                Featured Posts
            </PostsSection>
        </main>
    )
}
