import Image from "next/image";

export default function ForgotPasswordPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 flex flex-1 justify-center items-center py-10">
          <div className="layout-content-container flex flex-col w-full max-w-md">
            <div className="flex flex-col items-center mb-8">
              <Image src="/logo.jpg" alt="VetDataHub Logo" width={80} height={80} />
              <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">
                VetDataHub
              </h1>
            </div>
            <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm p-8 border border-border-light dark:border-border-dark">
              <div className="flex flex-col gap-2 mb-6 text-center">
                <p className="text-2xl font-bold leading-tight tracking-tight text-text-light dark:text-text-dark">
                  Forgot Your Password?
                </p>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">
                  Enter your email address below, and we&apos;ll send you a link
                  to reset your password.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium leading-normal pb-2 text-text-light dark:text-text-dark">
                    Email Address
                  </p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-gray-700 h-12 placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark p-3 text-sm font-normal leading-normal focus:border-primary"
                    placeholder="you@example.com"
                    defaultValue=""
                  />
                </label>
                <button className="flex min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark">
                  <span className="truncate">Send Reset Link</span>
                </button>
              </div>
              <div className="mt-6">
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal text-center">
                  <a className="underline hover:text-primary" href="#">
                    Back to Login
                  </a>
                </p>
              </div>
              <div className="mt-6 p-4 rounded-lg bg-success/10 border border-success/20">
                <p className="text-sm font-medium text-success text-center">
                  A password reset link has been sent to your email address.
                  Please check your inbox.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
