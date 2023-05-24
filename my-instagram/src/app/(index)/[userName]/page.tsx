import UserInfo from '@/components/UserInfo/UserInfo';
import UserPosts from '@/components/UserPosts/UserPosts';

interface UserPageProps {
  params: {
    userName: string;
    searchParams: {};
  };
}
export default function UserPage(props: UserPageProps) {
  const { userName } = props.params;

  return (
    <div>
      <div className="divider"></div>
      <UserInfo userName={userName} />
      <div className="divider"></div>
      <UserPosts userName={userName} />
    </div>
  );
}
