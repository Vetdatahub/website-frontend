

export default function LoginPage() {
  return (
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4">
        <main className="w-full max-w-md">
          <div className="bg-white dark:bg-[#1A202C] p-8 md:p-12 rounded-xl shadow-lg">
            <div className="mb-8 text-center">
              <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-text-light dark:text-text-dark">
                Welcome Back
              </p>
              <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal mt-2">
                Log in to your VetDataHub account
              </p>
            </div>
            <form className="space-y-6">
              <div>
                <label className="flex flex-col">
                  <p className="text-base font-medium leading-normal pb-2">
                    Email or Username
                  </p>
                  <input
                    className="form-input w-full min-w-0 resize-none overflow-hidden rounded-lg focus:outline-none focus:ring-0 h-14 p-4 text-base font-normal leading-normal placeholder:text-subtle-light dark:placeholder:text-subtle-dark"
                    placeholder="Enter your email or username"
                    type="text"
                  />
                </label>
              </div>
              <div>
                <label className="flex flex-col">
                  <p className="text-base font-medium leading-normal pb-2">
                    Password
                  </p>
                  <div className="relative flex w-full items-center">
                    <input
                      className="form-input w-full min-w-0 resize-none overflow-hidden rounded-lg focus:outline-none focus:ring-0 h-14 p-4 pr-12 text-base font-normal leading-normal placeholder:text-subtle-light dark:placeholder:text-subtle-dark"
                      placeholder="Enter your password"
                      type="password"
                    />
                    <button
                      className="absolute right-0 mr-4 text-subtle-light dark:text-subtle-dark"
                      type="button"
                    >
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-x-3">
                  <input
                    className="form-checkbox h-5 w-5 rounded border-2 border-[#CFD8DC] dark:border-[#4A5568] bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:outline-none"
                    type="checkbox"
                  />
                  <p className="text-sm font-normal leading-normal text-text-light dark:text-text-dark">
                    Remember Me
                  </p>
                </label>
                <a
                  className="text-sm font-medium text-primary hover:underline"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center"
                type="submit"
              >
                Log In
              </button>
            </form>
            <div className="mt-8 text-center">
              <p className="text-sm text-subtle-light dark:text-subtle-dark">
                Don&apos;t have an account?
                <a className="font-medium text-primary hover:underline" href="#">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </main>
            
      </div>
  );
}
