import Header from "@/src/components/header";
export default function SponsorUsPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-body">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              <Header />
              <main className="flex-grow">
                <div className="px-10 py-16 @container">
                  <div className="flex flex-col items-center justify-center gap-8 text-center max-w-4xl mx-auto">
                    <div className="flex flex-col gap-4">
                      <h1 className="font-display text-slate-900 dark:text-white text-5xl font-bold leading-tight tracking-[-0.033em] @[480px]:text-6xl @[480px]:font-bold @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                        Support VetDataHub
                      </h1>
                      <h2 className="font-body text-slate-600 dark:text-slate-300 text-lg font-normal leading-normal @[480px]:text-xl @[480px]:font-normal @[480px]:leading-normal">
                        Your sponsorship helps us maintain and grow the leading
                        open-source platform for veterinary data, ensuring it
                        remains a free and valuable resource for the global
                        research community.
                      </h2>
                    </div>
                    <div className="relative w-full max-w-md h-64">
                      <img
                        className="rounded-xl shadow-xl object-cover w-full h-full"
                        data-alt="A veterinarian gently holding a small kitten"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqksvMM5n3kJOG83CQDW36P2DW6QAJkdaBk49LCU-6iHgDRhCD7jlSIW4C3J8F0GC6-Ial3lBbOT3-qZjVXDsAoPI_S2T54ne55qBV35INqJobyMnMNajoHuJrqtoP7-rUy7e3q0sMHiPWip4B5eDViUyUH24B5L-KBeB1WX6a4Qa6TYV2-uQzgH4aEIJiCrsqo3ZTUIQlciHCv8yccm9aYOTBgygXHTEnWzkGVUlfkZekNB16TqNRvfCpe9R7UfGjhDYgjf_LOw"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-light dark:bg-background-dark py-20">
                  <div className="px-10 @container">
                    <div className="flex flex-col gap-12 max-w-[1200px] mx-auto">
                      <div className="flex flex-col gap-4 text-center">
                        <h2 className="font-display text-slate-900 dark:text-white tracking-light text-4xl font-bold leading-tight @[480px]:text-5xl @[480px]:font-bold @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto">
                          Why Your Support Matters
                        </h2>
                        <p className="font-body text-slate-600 dark:text-slate-300 text-lg font-normal leading-normal max-w-[720px] mx-auto">
                          We rely on the generosity of our community to fund our
                          operations and drive innovation.
                        </p>
                      </div>
                      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8 p-0">
                        <div className="flex flex-1 gap-4 rounded-xl border border-transparent bg-transparent p-6 flex-col items-center text-center">
                          <div className="text-primary bg-primary/10 p-4 rounded-lg">
                            <span className="material-symbols-outlined text-4xl">
                              code
                            </span>
                          </div>
                          <div className="flex flex-col gap-2">
                            <h3 className="font-display text-slate-900 dark:text-white text-xl font-semibold leading-tight">
                              Fund Development
                            </h3>
                            <p className="font-body text-slate-600 dark:text-slate-300 text-base font-normal leading-normal">
                              Support the continuous improvement of our platform
                              and the development of new features.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-1 gap-4 rounded-xl border border-transparent bg-transparent p-6 flex-col items-center text-center">
                          <div className="text-primary bg-primary/10 p-4 rounded-lg">
                            <span className="material-symbols-outlined text-4xl">
                              dns
                            </span>
                          </div>
                          <div className="flex flex-col gap-2">
                            <h3 className="font-display text-slate-900 dark:text-white text-xl font-semibold leading-tight">
                              Cover Hosting Costs
                            </h3>
                            <p className="font-body text-slate-600 dark:text-slate-300 text-base font-normal leading-normal">
                              Help us pay for the servers and bandwidth required
                              to host our growing collection of datasets.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-1 gap-4 rounded-xl border border-transparent bg-transparent p-6 flex-col items-center text-center">
                          <div className="text-primary bg-primary/10 p-4 rounded-lg">
                            <span className="material-symbols-outlined text-4xl">
                              school
                            </span>
                          </div>
                          <div className="flex flex-col gap-2">
                            <h3 className="font-display text-slate-900 dark:text-white text-xl font-semibold leading-tight">
                              Foster Community
                            </h3>
                            <p className="font-body text-slate-600 dark:text-slate-300 text-base font-normal leading-normal">
                              Enable us to organize workshops, tutorials, and
                              events to support our users.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-20 px-10">
                  <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
                    <div className="flex flex-col gap-4 text-center">
                      <h2 className="font-display text-slate-900 dark:text-white tracking-light text-4xl font-bold leading-tight @[480px]:text-5xl @[480px]:font-bold @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto">
                        Sponsorship Options
                      </h2>
                      <p className="font-body text-slate-600 dark:text-slate-300 text-lg font-normal leading-normal max-w-[720px] mx-auto">
                        Choose the way to contribute that works best for you.
                        Every contribution, big or small, makes a huge
                        difference.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col items-center text-center gap-6 p-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 transition-shadow duration-300 hover:shadow-2xl">
                        <svg
                          className="h-12 w-12 text-slate-800 dark:text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                        <div className="flex flex-col gap-2">
                          <h3 className="font-display text-slate-900 dark:text-white text-2xl font-semibold leading-tight">
                            GitHub Sponsors
                          </h3>
                          <p className="font-body text-slate-600 dark:text-slate-300 text-base font-normal leading-normal">
                            Make a recurring or one-time donation through
                            GitHub. This is the best way to provide sustained
                            support for the project.
                          </p>
                        </div>
                        <iframe src="https://github.com/sponsors/JohananOppongAmoateng/card" title="Sponsor JohananOppongAmoateng" height="225" width="600" style={{border: 0}}></iframe>
                      </div>
                      <div className="flex flex-col items-center text-center gap-6 p-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-slate-800 transition-shadow duration-300 hover:shadow-2xl">
                        <svg
                          className="h-12 w-12 text-[#FFDD00]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.996 4.095c-1.397 0-2.69.57-3.64 1.488-.95-.918-2.243-1.488-3.64-1.488-2.736 0-4.964 2.158-4.964 4.812 0 1.27.504 2.42 1.328 3.296l.288.307.288.307c1.378 1.47 3.23 3.03 5.61 4.99l.088.07c.07.056.16.084.248.084s.178-.028.248-.084l.088-.07c2.38-1.96 4.232-3.52 5.61-4.99l.288-.308.288-.307c.824-.875 1.328-2.025 1.328-3.295 0-2.654-2.228-4.812-4.964-4.812zm-3.64 1.765c.66 0 1.25.26 1.68.708l.18.188.18-.188c.43-.448 1.02-.708 1.68-.708 1.68 0 3.04 1.31 3.04 2.923 0 .73-.29 1.39-.77 1.88l-.29.308-.29.308c-1.32 1.4-3.07 2.88-5.37 4.76-.02.01-.05.03-.08.05-.03-.02-.06-.04-.08-.05-2.3-1.88-4.05-3.36-5.37-4.76l-.29-.308-.29-.308c-.48-.49-.77-1.15-.77-1.88 0-1.613 1.36-2.923 3.04-2.923zM21.996 18h-20c-1.1 0-2 .9-2 2s.9 2 2 2h20c1.1 0 2-.9 2-2s-.9-2-2-2z"></path>
                        </svg>
                        <div className="flex flex-col gap-2">
                          <h3 className="font-display text-slate-900 dark:text-white text-2xl font-semibold leading-tight">
                            Buy Me a Coffee
                          </h3>
                          <p className="font-body text-slate-600 dark:text-slate-300 text-base font-normal leading-normal">
                            If you prefer a simple, one-time donation, you can
                            support us by buying us a coffee. It’s a quick and
                            easy way to show your appreciation.
                          </p>
                        </div>
                        <a
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#FFDD00] text-black text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#FFDD00]/90 transition-all duration-300 transform hover:scale-105"
                          href="https://www.buymeacoffee.com/johananoa"
                        >
                          <span className="truncate">Buy Me a Coffee</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="bg-gray-light dark:bg-slate-900/50 py-20 px-10">
                  <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <h2 className="font-display text-slate-900 dark:text-white text-4xl font-bold leading-tight tracking-[-0.015em] mb-4">
                      Sponsorship Tiers
                    </h2>
                    <p className="font-body text-slate-600 dark:text-slate-300 text-lg mb-8 max-w-2xl">
                      We offer different tiers for individuals and
                      organizations, with special recognition for our
                      supporters.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                      <div className="bg-background-light dark:bg-slate-800 p-8 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 w-full flex flex-col items-center">
                        <span className="material-symbols-outlined text-highlight text-5xl mb-4">
                          person
                        </span>
                        <h3 className="font-display text-primary dark:text-secondary text-2xl font-bold mb-4">
                          Individual Sponsor
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                          For individuals who want to support our mission.
                        </p>
                        <ul className="text-left space-y-3 text-slate-600 dark:text-slate-300 text-sm">
                          <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-secondary mt-0.5">
                              check
                            </span>
                            <span>Your name listed on our website.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-secondary mt-0.5">
                              check
                            </span>
                            <span>Access to our supporter newsletter.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-secondary mt-0.5">
                              check
                            </span>
                            <span>A warm feeling of satisfaction!</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-background-light dark:bg-slate-800 p-8 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 w-full flex flex-col items-center">
                        <span className="material-symbols-outlined text-highlight text-5xl mb-4">
                          apartment
                        </span>
                        <h3 className="font-display text-primary dark:text-secondary text-2xl font-bold mb-4">
                          Organizational Sponsor
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-4">
                          For companies and institutions that want to partner
                          with us.
                        </p>
                        <ul className="text-left space-y-3 text-slate-600 dark:text-slate-300 text-sm">
                          <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-secondary mt-0.5">
                              check
                            </span>
                            <span>Your logo featured on our homepage.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-secondary mt-0.5">
                              check
                            </span>
                            <span>
                              Recognition in our official communications.
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-secondary mt-0.5">
                              check
                            </span>
                            <span>Opportunities for collaboration.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-8 text-slate-500 dark:text-slate-400">
                      For custom sponsorship packages, please{" "}
                      <a className="text-primary hover:underline" href="#">
                        contact us
                      </a>
                      .
                    </p>
                  </div>
                </div> */}
              </main>
              <footer className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-body">
                <div className="max-w-[1200px] mx-auto px-10 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex items-center gap-4">
                    <div className="text-primary size-6">
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
                    <span className="font-display text-lg font-bold text-slate-800 dark:text-white">
                      VetDataHub
                    </span>
                  </div>
                  <div className="flex gap-6">
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Terms of Service
                    </a>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                    <a
                      className="hover:text-primary transition-colors"
                      href="#"
                    >
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
