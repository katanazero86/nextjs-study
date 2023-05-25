import UserInfo from '@/components/pages/UserPage/UserInfo/UserInfo';
import UserPosts from '@/components/pages/UserPage/UserPosts/UserPosts';
import Divider from '@/components/atoms/Divider/Divider';

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
      <Divider />
      <UserInfo userName={userName} />
      <Divider />
      <UserPosts userName={userName} />
    </div>
  );
}
