export default function SearchSection() {
  return (
    <section>
      <input
        type="text"
        placeholder="Input a userName or name..."
        className="input w-full input-bordered focus:outline-0"
      />
      <div className="flex flex-col w-full mt-4">
        <div className="grid card border border-2 rounded-box place-items-start p-4">
          <div className="flex flex-row items-center min-w-0 w-full">
            <div className="avatar cursor-pointer">
              <div className="w-10 rounded-full ring-2 ring-base-300 ring-offset-base-100 ring-offset-2">
                <img src="/imgs/avatar/test.jpg" alt="user-img" />
              </div>
            </div>
            <p className="pl-3 font-semibold truncate tracking-tight">test</p>
          </div>
          <div className="mt-1">
            <p>name</p>
            <p>0 followers</p>
            <p>4 following</p>
          </div>
        </div>
      </div>
    </section>
  );
}
