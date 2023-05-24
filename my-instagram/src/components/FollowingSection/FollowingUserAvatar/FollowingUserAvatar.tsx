import Link from 'next/link';

interface FollowingUserAvatarProps {
  userName: string;
  userImage: string;
}

export default function FollowingUserAvatar({ userName, userImage }: FollowingUserAvatarProps) {
  return (
    <Link href={`/${userName}`}>
      <div className="avatar flex flex-col mx-1.5 cursor-pointer items-center">
        <div className="w-10 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2">
          <img src={userImage} alt="avatar-img" />
        </div>
        <p className="pt-2 w-16 text-xs text-center truncate tracking-tight">{userName}</p>
      </div>
    </Link>
  );
}
