import UserInfo from '@/components/pages/UserPage/UserInfo/UserInfo';
import UserPosts from '@/components/pages/UserPage/UserPosts/UserPosts';
import Divider from '@/components/atoms/Divider/Divider';
import { sanityClient } from '@/sanity';

interface UserPageProps {
  params: {
    userName: string;
    searchParams: {};
  };
}
export default async function UserPage(props: UserPageProps) {
  const { userName } = props.params;
  const user = await sanityClient.sanityUser.findUserForProfileByUserName(userName);
  console.log(user);

  return (
    <div>
      <Divider />
      <UserInfo user={user} />
      <Divider />
      <UserPosts userName={userName} />
    </div>
  );
}
