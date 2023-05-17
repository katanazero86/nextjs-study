interface AvatarProps {
  imgUrl?: string;
}

export default function Avatar({ imgUrl = '' }: AvatarProps) {
  console.log(imgUrl);
  return (
    <label tabIndex={0} className="avatar cursor-pointer">
      <div className="w-10 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2">
        <img src={imgUrl} alt="avatar-img" width={40} height={40} />
      </div>
    </label>
  );
}
