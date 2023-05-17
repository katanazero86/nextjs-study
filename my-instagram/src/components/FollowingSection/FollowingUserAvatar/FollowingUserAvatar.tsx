export default function FollowingUserAvatar() {
  return (
    <div className="avatar flex flex-col mx-1.5 cursor-pointer items-center">
      <div className="w-10 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-2">
        <img src="/imgs/avatar/test.jpg" alt="avatar-img" />
      </div>
      <p className="pt-2 w-16 text-xs text-center truncate tracking-tight">useName</p>
    </div>
  );
}
