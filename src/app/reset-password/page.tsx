import Header from '@/src/components/header';

export default function ResetPasswordPage() {
  return (
   
      <div className="relative flex min-h-screen flex-col">
        <Header /> 
        <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className="bg-white dark:bg-gray-800 p-8 shadow-lg rounded-xl">
              <div className="space-y-4">
                <div className="text-center">
                  <h2 className="text-3xl font-black tracking-[-0.033em] text-[#0d171b] dark:text-slate-50">
                    Reset Your Password
                  </h2>
                  <p className="mt-2 text-sm text-[#4c809a] dark:text-slate-400">
                    Enter your new password below.
                  </p>
                </div>
                <form action="#" className="mt-8 space-y-6" method="POST">
                  <div className="space-y-4">
                    <label className="flex flex-col flex-1">
                      <p className="text-sm font-medium pb-2 text-[#0d171b] dark:text-slate-200">
                        New Password
                      </p>
                      <div className="flex w-full flex-1 items-stretch rounded-lg">
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] dark:text-slate-50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdfe7] dark:border-gray-600 bg-slate-50 dark:bg-gray-700 h-12 placeholder:text-[#4c809a] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                          placeholder="Enter new password"
                          type="password"
                        />
                        <button
                          aria-label="Toggle password visibility"
                          className="text-[#4c809a] dark:text-slate-400 flex border border-[#cfdfe7] dark:border-gray-600 bg-slate-50 dark:bg-gray-700 items-center justify-center pr-[15px] rounded-r-lg border-l-0"
                          type="button"
                        >
                          <span className="material-symbols-outlined">
                            visibility
                          </span>
                        </button>
                      </div>
                    </label>
                    <label className="flex flex-col flex-1">
                      <p className="text-sm font-medium pb-2 text-[#0d171b] dark:text-slate-200">
                        Confirm New Password
                      </p>
                      <div className="flex w-full flex-1 items-stretch rounded-lg">
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] dark:text-slate-50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdfe7] dark:border-gray-600 bg-slate-50 dark:bg-gray-700 h-12 placeholder:text-[#4c809a] p-[15px] rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
                          placeholder="Confirm new password"
                          type="password"
                        />
                        <button
                          aria-label="Toggle password visibility"
                          className="text-[#4c809a] dark:text-slate-400 flex border border-[#cfdfe7] dark:border-gray-600 bg-slate-50 dark:bg-gray-700 items-center justify-center pr-[15px] rounded-r-lg border-l-0"
                          type="button"
                        >
                          <span className="material-symbols-outlined">
                            visibility_off
                          </span>
                        </button>
                      </div>
                    </label>
                  </div>
                 
                  <div>
                    <button
                      className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-800"
                      type="submit"
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>

              <div
                className="hidden mt-6 bg-success/10 border-l-4 border-success text-success p-4 rounded-md"
                role="alert"
              >
                <div className="flex">
                  <div className="py-1">
                    <span className="material-symbols-outlined">task_alt</span>
                  </div>
                  <div className="ml-3"></div>
                </div>
                <div className="mt-6 text-center">
                  <a
                    className="font-medium text-primary hover:text-primary/90 dark:text-primary dark:hover:text-primary/80"
                    href="#"
                  >
                    Back to Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

  );
}
