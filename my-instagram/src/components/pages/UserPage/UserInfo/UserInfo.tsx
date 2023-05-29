import { UserModel } from '@/models/user';
import Follow from '@/components/pages/UserPage/UserInfo/Follow/Follow';

interface UserInfoProps {
  user: UserModel;
}
export default function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="flex w-full justify-center items-center py-2">
      <div className="avatar px-4">
        <div className="w-20 rounded-full">
          <img src={user.userImage} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between py-1">
          <p>{user.userName}</p>
          <Follow user={user} />
        </div>
        <div className="flex items-center py-1">
          <p className="tracking-tighter">
            <strong className="font-medium">{user.posts ?? 0}</strong> posts
          </p>
          <p className="tracking-tighter pl-2">
            <strong className="font-medium">{(typeof user.followers === 'number' && user.followers) ?? 0}</strong>{' '}
            followers
          </p>
          <p className="tracking-tighter pl-2">
            <strong className="font-medium">{(typeof user.following === 'number' && user.following) ?? 0}</strong>{' '}
            following
          </p>
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="font-semibold">{user.name}</p>
        </div>
      </div>
    </div>
  );
}
