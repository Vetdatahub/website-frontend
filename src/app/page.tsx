import Image from "next/image";
export default function HomePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-body">
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
            <header className="flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-10 py-4 font-display">
              <div className="flex items-center gap-2 sm:gap-4 text-slate-800 dark:text-white">
                
                  <Image src="/logo.jpg" alt="VetDataHub" width={32} height={32} />
                
                <h2 className="text-slate-800 dark:text-white text-lg sm:text-xl font-bold leading-tight tracking-[-0.015em]">
                  VetDataHub
                </h2>
              </div>
              <div className="flex flex-1 justify-end gap-2 sm:gap-4 lg:gap-8 items-center font-body">
                <div className="hidden md:flex items-center gap-4 lg:gap-9">
                  <a
                    className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors"
                    href="#"
                  >
                    Home
                  </a>
                  <a
                    className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors"
                    href="#"
                  >
                    Datasets
                  </a>
                  <a
                    className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors"
                    href="#"
                  >
                    Contribute
                  </a>
                  <a
                    className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors"
                    href="#"
                  >
                    About
                  </a>
                </div>
                <button className="flex min-w-[70px] sm:min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 sm:h-10 px-3 sm:px-5 bg-primary text-white text-xs sm:text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                  <span className="truncate">Sign In/Up</span>
                </button>
              </div>
            </header>
            <main className="flex-grow">
              <div className="px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16 @container">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
                  <div className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left lg:max-w-xl">
                    <h1 className="font-display text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-[-0.033em]">
                      Empowering Veterinary Data Sharing
                    </h1>
                    <h2 className="font-body text-slate-600 dark:text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-normal">
                      Advancing animal health through open, collaborative, and
                      accessible data.
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 self-center lg:self-start">
                      <button className="flex min-w-[84px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 sm:h-12 px-5 sm:px-6 bg-highlight text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:bg-highlight/90 transition-all duration-300 transform hover:scale-105">
                        <span className="truncate">Explore Datasets</span>
                      </button>
                      
                    </div>
                  </div>
                  <div className="relative w-full max-w-lg lg:max-w-xl">
                    <img
                      className="rounded-xl shadow-2xl object-cover w-full h-64 sm:h-80 lg:h-full"
                      data-alt="A friendly dog looking at the camera"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_qUvvWqUWrOi6AlBC3QsIuwYXtFZ1cxW9C0xvxfSJunwpgroo1CGPwFARkB1_EPebViYsFSM7Q5nTjnrQ6oHJipbtFU6dONk_DEyEaWlHp1YxwQ4D41iA-x6qnjeloSq_KNJbBgtFDO30da6m3Ih7ux8li5VFb8b459CruWy3rJSbDRWX2OHAGEgMjI25rfSpjOdbJtouc90gDbXXU1IhfSXxaKPEzAFfHQ-4gKHFZGW3uFFsYgZ0kgi9thng83AzcMB3RcYIbw"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-light dark:bg-background-dark py-12 sm:py-16 lg:py-20">
                <div className="px-4 sm:px-6 lg:px-10 @container">
                  <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 max-w-[1200px] mx-auto">
                    <div className="flex flex-col gap-3 sm:gap-4 text-center">
                      <h2 className="font-display text-slate-900 dark:text-white tracking-light text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-[720px] mx-auto">
                        Features
                      </h2>
                      <p className="font-body text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal leading-normal max-w-[720px] mx-auto px-4">
                        Discover the powerful features that make VetDataHub the
                        ideal platform for veterinary data.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 p-0">
                      <div className="flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-6 flex-col items-start transition-transform duration-300 hover:-translate-y-2">
                        <div className="text-secondary bg-secondary/10 p-3 rounded-lg">
                          <span className="material-symbols-outlined text-3xl">
                            database
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="font-display text-slate-900 dark:text-white text-xl font-semibold leading-tight">
                            Dataset Hosting
                          </h3>
                          <p className="font-body text-slate-600 dark:text-slate-300 text-base font-normal leading-normal">
                            Securely host and manage your veterinary datasets
                            with ease.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-6 flex-col items-start transition-transform duration-300 hover:-translate-y-2">
                        <div className="text-secondary bg-secondary/10 p-3 rounded-lg">
                          <span className="material-symbols-outlined text-3xl">
                            groups
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="font-display text-slate-900 dark:text-white text-xl font-semibold leading-tight">
                            Collaboration
                          </h3>
                          <p className="font-body text-slate-600 dark:text-slate-300 text-base font-normal leading-normal">
                            Collaborate with researchers and data scientists
                            from around the world.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-6 flex-col items-start transition-transform duration-300 hover:-translate-y-2">
                        <div className="text-secondary bg-secondary/10 p-3 rounded-lg">
                          <span className="material-symbols-outlined text-3xl">
                            search
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="font-display text-slate-900 dark:text-white text-xl font-semibold leading-tight">
                            Metadata Search
                          </h3>
                          <p className="font-body text-slate-600 dark:text-slate-300 text-base font-normal leading-normal">
                            Effortlessly find relevant datasets using our
                            advanced metadata search.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 p-6 flex-col items-start transition-transform duration-300 hover:-translate-y-2">
                        <div className="text-secondary bg-secondary/10 p-3 rounded-lg">
                          <span className="material-symbols-outlined text-3xl">
                            api
                          </span>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="font-display text-slate-900 dark:text-white text-xl font-semibold leading-tight">
                            API Access
                          </h3>
                          <p className="font-body text-slate-600 dark:text-slate-300 text-base font-normal leading-normal">
                            Integrate our data into your applications with our
                            robust API.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
                  <div className="flex flex-col gap-3 sm:gap-4 text-center">
                    <h2 className="font-display text-slate-900 dark:text-white tracking-light text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-[720px] mx-auto">
                      How to Contribute
                    </h2>
                    <p className="font-body text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal leading-normal max-w-[720px] mx-auto px-4">
                      Help us grow the world&apos;s largest open-source veterinary
                      dataset. It&apos;s easy to get started.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 text-center relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
                    <div
                      className="absolute top-1/2 left-0 w-full h-px bg-slate-300 dark:bg-slate-600 hidden md:block"
                      style={{ background: 'repeating-linear-gradient(90deg, #d1d5db, #d1d5db 10px, transparent 10px, transparent 20px)' }}
                    ></div>
                    <div className="flex flex-col items-center gap-3 sm:gap-4 z-10">
                      <div className="flex items-center justify-center bg-primary text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full text-xl sm:text-2xl font-bold font-display ring-4 sm:ring-8 ring-background-light dark:ring-background-dark">
                        1
                      </div>
                      <div className="flex items-center justify-center text-primary bg-primary/10 p-3 sm:p-4 rounded-xl">
                        <span className="material-symbols-outlined text-4xl sm:text-5xl">
                          upload_file
                        </span>
                      </div>
                      <h3 className="font-display text-slate-900 dark:text-white text-lg sm:text-xl font-semibold leading-tight mt-2">
                        Prepare Your Data
                      </h3>
                      <p className="font-body text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal leading-normal px-2">
                        Anonymize and format your dataset according to our
                        simple guidelines.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-3 sm:gap-4 z-10">
                      <div className="flex items-center justify-center bg-primary text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full text-xl sm:text-2xl font-bold font-display ring-4 sm:ring-8 ring-background-light dark:ring-background-dark">
                        2
                      </div>
                      <div className="flex items-center justify-center text-primary bg-primary/10 p-3 sm:p-4 rounded-xl">
                        <span className="material-symbols-outlined text-4xl sm:text-5xl">
                          cloud_upload
                        </span>
                      </div>
                      <h3 className="font-display text-slate-900 dark:text-white text-lg sm:text-xl font-semibold leading-tight mt-2">
                        Upload &amp; Describe
                      </h3>
                      <p className="font-body text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal leading-normal px-2">
                        Upload your files and add metadata to make them
                        discoverable.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-3 sm:gap-4 z-10">
                      <div className="flex items-center justify-center bg-primary text-white w-12 h-12 sm:w-16 sm:h-16 rounded-full text-xl sm:text-2xl font-bold font-display ring-4 sm:ring-8 ring-background-light dark:ring-background-dark">
                        3
                      </div>
                      <div className="flex items-center justify-center text-primary bg-primary/10 p-3 sm:p-4 rounded-xl">
                        <span className="material-symbols-outlined text-4xl sm:text-5xl">
                          share
                        </span>
                      </div>
                      <h3 className="font-display text-slate-900 dark:text-white text-lg sm:text-xl font-semibold leading-tight mt-2">
                        Share with the World
                      </h3>
                      <p className="font-body text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal leading-normal px-2">
                        Publish your dataset and contribute to advancing
                        veterinary science.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-6 sm:mt-8">
                    <button className="flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 sm:h-12 px-5 sm:px-6 bg-secondary text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:bg-secondary/90 transition-all duration-300 transform hover:scale-105">
                      <span className="truncate">Start Contributing</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-gray-light dark:bg-slate-900/50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                  <h2 className="font-display text-slate-900 dark:text-white text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em] mb-3 sm:mb-4">
                    Join Our Growing Community
                  </h2>
                  <p className="font-body text-slate-600 dark:text-slate-300 text-base sm:text-lg mb-6 max-w-2xl px-4">
                    Become part of a vibrant community of researchers,
                    veterinarians, and data scientists dedicated to
                    revolutionizing animal health.
                  </p>
                  <div className="bg-background-light dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 w-full">
                    <h3 className="font-display text-primary dark:text-secondary text-xl sm:text-2xl font-bold mb-4">
                      Why Join VetDataHub?
                    </h3>
                    <ul className="text-left space-y-3 text-slate-600 dark:text-slate-300">
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="material-symbols-outlined text-secondary mt-1 text-xl sm:text-2xl flex-shrink-0">
                          check_circle
                        </span>
                        <span className="text-sm sm:text-base">
                          <span className="font-semibold text-slate-800 dark:text-white">
                            Accelerate Research:
                          </span>{" "}
                          Access a diverse range of datasets to power your
                          studies and discoveries.
                        </span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="material-symbols-outlined text-secondary mt-1 text-xl sm:text-2xl flex-shrink-0">
                          check_circle
                        </span>
                        <span className="text-sm sm:text-base">
                          <span className="font-semibold text-slate-800 dark:text-white">
                            Increase Visibility:
                          </span>{" "}
                          Get your work recognized and cited by a global
                          community.
                        </span>
                      </li>
                      <li className="flex items-start gap-2 sm:gap-3">
                        <span className="material-symbols-outlined text-secondary mt-1 text-xl sm:text-2xl flex-shrink-0">
                          check_circle
                        </span>
                        <span className="text-sm sm:text-base">
                          <span className="font-semibold text-slate-800 dark:text-white">
                            Collaborate &amp; Innovate:
                          </span>{" "}
                          Connect with peers, share insights, and foster new
                          collaborations.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <button className="mt-6 sm:mt-8 flex min-w-[84px] max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 sm:h-12 px-5 sm:px-6 bg-highlight text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] hover:bg-highlight/90 transition-all duration-300 transform hover:scale-105">
                    <span className="truncate">Become a Member Today!</span>
                  </button>
                  <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 lg:gap-4 mt-8 sm:mt-10 lg:mt-12">
                    <img
                      alt="Contributor avatar"
                      className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-white dark:ring-slate-800"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpEZmQM7_otyOFPEisJ_MzpdE5r7dbJQymYh5CiwkOpsFfFvOSoERe8Je5VLWzKkxlpqItua-FIsE8pJpC9r0koRYO2V_ZN0taxlh_D3P5-xznH1PPmbAvpWu4gK90YU0WZImgdimVwErH_rnkvYIu84d32e7BcGMaErNSZtRUWQ9gCALCdqLamKfLC7x75RNjo3XxGxqTdjTYhV3RDmlsq9JO1z4NpUy8YJg3iGG7sBJUnm7V4APS_b5uCSuqatHkKGOCmTUdTw"
                    />
                    <img
                      alt="Contributor avatar"
                      className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-2 ring-white dark:ring-slate-800"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoJ0MeRRR587fobH9vykFQbdg4DGlvGQ7WyA0aB3Ov0-AUB4B6jqBGASk0ox7juA3PeWB18k1mxuhTOQv8a-FRAcjw1kifnmm_H4hcW2P2_3k8Mbq-Iw4ShuYQwimICAcIeCp9rGlhrKhDIgB0mpebPSngoo5BQz4CL_MZL-6cMkgwgH5mOtymBxyaOFYAPOz1ge7EFuRPBpJL72rPJZg4jpm9B4VljegWAtYTxQM0XNPdohrSdxVNH45p83e8SAlpxx2kXatQZQ"
                    />
                    <img
                      alt="Contributor avatar"
                      className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover ring-2 ring-white dark:ring-slate-800"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJggfOR9JMMAc4f-ylUD-hGltOKJqp-NlTnak23USLN1aeNd78OESUiG6RpA59Ypp5TTllMQjmmfZGPmFm1AtmnfwMek2cYp8YFx9Y0tDVFVLa8ggXkDgerF7ElwybhNmVI0ppik87Bl1VWZbeVgKvMBui0mIJewTEnU8XIgvz3-Ja_llWlG2w2uNX9EqCE-fU513wN6Y7OcgbkDnx42hb93FYfRsKSdcau587hRvP1V4VVvB6aQlAN2p-LaYdCE-FtQMLATtqqA"
                    />
                    <img
                      alt="Contributor avatar"
                      className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-2 ring-white dark:ring-slate-800"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7APTLSssrf6TlTNxbbYtqnZP2qe3ILc_Vu7j6zs6OA61EK5KgFdixVaruUjWe8bPbFj8W_XWWljWOr1fgfwyALuNRlUJFDVbjeWM7eMTpYFzwch4TT1HErSxxkzm_6Z2ZYqPoZCrRJOPFJKI9y8gwMR7b313zyhhKL6ATWLZHE9s3_lPPMp56CNG-7E_IjXwp3z8ufWAUhgJrLkbTQuIu-HiVVMySVNEEJ-_aVHrDjwx2eL2lVOlhfFAKCmElRQCrEU2Wxhy6QA"
                    />
                    <img
                      alt="Contributor avatar"
                      className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-white dark:ring-slate-800"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRMNXGAs1v5uPRN1wUaCALMt2bvTbbb7ce5JoIaxKsfCNgb3fWiuxFJ6uWsAsgErNDzbk_QP3oTAdZx0VjuSL_K8PnHFZiwqRd-lJDgXUkk3M8Fx9p2nVReT5oTuu0HPfA-MRY777DfwW4Ks2XPHTg3K4SsZe4BbjugRA-XS56AAg8omdkwW6mmSPqWiwK-eK8uUwBt-jZ9YnONV4UgjQ13RYJ-dFhbX_JdCkltneas0ipVlbn3GnHeIxBeAdFCNMhCzLEF10Hgw"
                    />
                  </div>
                </div>
              </div>
            </main>
            <footer className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-body">
              <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="text-primary size-5 sm:size-6">
                    <svg
                      fill="none"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span className="font-display text-base sm:text-lg font-bold text-slate-800 dark:text-white">
                    VetDataHub
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center text-sm">
                  <a className="hover:text-primary transition-colors" href="#">
                    Terms of Service
                  </a>
                  <a className="hover:text-primary transition-colors" href="#">
                    Privacy Policy
                  </a>
                  <a className="hover:text-primary transition-colors" href="#">
                    Contact
                  </a>
                </div>
                <div className="flex gap-4"></div>
              </div>
            </footer>
          </div>
          </div>  
        </div>
      </div>
    </div>
  );
}
