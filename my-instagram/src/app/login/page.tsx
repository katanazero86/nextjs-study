export default function LoginPage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full">
        <h2 className="mb-5 text-2xl font-bold">Get Started Login!</h2>
        <div className="card w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control mt-6">
              <button className="btn btn-outline btn-primary">Sign in with google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
