interface UserAvatarProps {
  imgUrl: string;
}

export default function UserAvatar({ imgUrl }: UserAvatarProps) {
  return (
    <div className="avatar">
      <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={imgUrl} alt="user-img" />
      </div>
    </div>
  );
}
