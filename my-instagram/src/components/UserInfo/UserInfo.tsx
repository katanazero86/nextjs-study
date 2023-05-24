export default function UserInfo() {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="avatar px-4">
        <div className="w-20 rounded-full">
          <img src="/imgs/avatar/test.jpg" />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between py-1">
          <p>userName</p>
          <button className="btn  btn-sm btn-primary">Follow</button>
        </div>
        <div className="flex items-center py-1">
          <p className="tracking-tighter">
            <strong className="font-medium">2</strong> posts
          </p>
          <p className="tracking-tighter pl-2">
            <strong className="font-medium">2</strong> followers
          </p>
          <p className="tracking-tighter pl-2">
            <strong className="font-medium">2</strong> following
          </p>
        </div>
        <div className="flex items-center justify-between py-1">
          <p className="font-semibold">Name</p>
        </div>
      </div>
    </div>
  );
}
