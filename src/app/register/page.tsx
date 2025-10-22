import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display">
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden p-4">
        <div className="layout-container flex h-full grow flex-col w-full max-w-md">
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.jpg"
                alt="VetDataHub Logo"
                width={100}
                height={100}
              />
              <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200">
                VetDataHub
              </h1>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-xl p-8">
            <div className="flex flex-col gap-2 mb-6 text-center">
              <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-[-0.033em]">
                Create Your VetDataHub Account
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                Join a community of veterinary researchers and contribute to
                open science.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <label className="flex flex-col gap-2">
                <p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">
                  Email Address
                </p>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-600 bg-background-light dark:bg-background-dark h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-4 text-base font-normal leading-normal"
                  placeholder="Enter your email"
                  type="email"
                />
              </label>
              <label className="flex flex-col gap-2">
                <p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">
                  Password
                </p>
                <div className="flex w-full flex-1 items-stretch rounded-lg">
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-600 bg-background-light dark:bg-background-dark h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-4 border-r-0 text-base font-normal leading-normal"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <div className="text-slate-400 dark:text-slate-500 flex border border-slate-300 dark:border-slate-600 bg-background-light dark:bg-background-dark items-center justify-center px-4 rounded-r-lg border-l-0">
                    <span className="material-symbols-outlined">
                      visibility_off
                    </span>
                  </div>
                </div>
              </label>
              <label className="flex flex-col gap-2">
                <p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal">
                  Confirm Password
                </p>
                <div className="flex w-full flex-1 items-stretch rounded-lg">
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-600 bg-background-light dark:bg-background-dark h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-4 border-r-0 text-base font-normal leading-normal"
                    placeholder="Confirm your password"
                    type="password"
                  />
                  <div className="text-slate-400 dark:text-slate-500 flex border border-slate-300 dark:border-slate-600 bg-background-light dark:bg-background-dark items-center justify-center px-4 rounded-r-lg border-l-0">
                    <span className="material-symbols-outlined">
                      visibility_off
                    </span>
                  </div>
                </div>
              </label>
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 ring-offset-2 ring-offset-background-light dark:ring-offset-background-dark transition-colors duration-200 mt-2">
                <span className="truncate">Create Account</span>
              </button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                By creating an account, you agree to our
                <a
                  className="font-medium text-primary hover:underline"
                  href="#"
                >
                  Terms of Service
                </a>{" "}
                and
                <a
                  className="font-medium text-primary hover:underline"
                  href="#"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-slate-600 dark:text-slate-400">
              Already have an account?
              <a className="font-bold text-primary hover:underline" href="#">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
