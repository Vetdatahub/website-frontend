import Footer from "../components/footer";
import Header from "../components/header";


export default function HomePage() {
  return (

      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <div className="flex flex-1 justify-center">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
              <Header />
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
                        alt="A friendly dog looking at the camera"
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
                          Discover the powerful features that make VetDataHub
                          the ideal platform for veterinary data.
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
                <h2 className="font-display text-slate-900 dark:text-white text-4xl font-bold leading-tight tracking-[-0.015em] text-center mb-12">
                  Featured Datasets
                </h2>
                <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden pb-4">
                  <div className="flex items-stretch p-4 gap-6">
                    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-light dark:bg-slate-800 shadow-lg min-w-80 border border-slate-200 dark:border-slate-700 transition-shadow duration-300 hover:shadow-2xl">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl flex flex-col"
                        data-alt="A chart showing data trends"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBEWSv7hD4l_-Cg-BoDQUUwBF8xcnr5U-HGmK2QaQ9l6SZQ-asMDJUIpxR0H0HS4CLIievwJr5SmVI66RiyxQXZ0VMPUmHphoHZYTY6ZV0_DXXae1ohACMujoiq5VfjuwAdV97AVbHR2zUB4q9HhkoQ8uZ84CV335v40TPlLCc2U6JvCZtKNlroDiU8HLddLQkHZXTZUluw3-16PVgn81h8htX6ZbfgL2-5bn95tV3dbCZBPyu9r7zB6breHmmN7v1tODO170JwEw")',
                        }}
                      ></div>
                      <div className="flex flex-col flex-1 justify-between p-6 pt-0 gap-4">
                        <div>
                          <p className="font-display text-slate-900 dark:text-white text-lg font-semibold leading-normal">
                            Feline Chronic Kidney Disease Study
                          </p>
                          <p className="font-body text-slate-600 dark:text-slate-300 text-sm font-normal leading-normal mt-2">
                            A comprehensive dataset on feline chronic kidney
                            disease, including clinical and laboratory findings.
                          </p>
                        </div>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/20 transition-colors">
                          <span className="truncate">View Dataset</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-light dark:bg-slate-800 shadow-lg min-w-80 border border-slate-200 dark:border-slate-700 transition-shadow duration-300 hover:shadow-2xl">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl flex flex-col"
                        data-alt="A map with data points"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAs5lIeo-ZgInZKZhMrTIca0cGwyKcPEh3ircEuYErBxYk1zL7bnddclCQKrml9zn2l9c3r-EdYOvOqnNWlmNMSLnaxPH5Ai2y1pYkfk0WChVOBRwf6l_jdOHgXJUoqD2t-UxucS7JPG9rmMacL6S1949Bs9b3IpUAM130wLzlfpUnGA8qTlmNw5jVAYhiWuSIgSy22GV5uh0Z58vaczdLRGmN-6lo6uGkNhhq3dLO65ayaCQvQGduQbLmZPddcmOU1YfYEU7JYbQ")',
                        }}
                      ></div>
                      <div className="flex flex-col flex-1 justify-between p-6 pt-0 gap-4">
                        <div>
                          <p className="font-display text-slate-900 dark:text-white text-lg font-semibold leading-normal">
                            Canine Parvovirus Prevalence Data
                          </p>
                          <p className="font-body text-slate-600 dark:text-slate-300 text-sm font-normal leading-normal mt-2">
                            Geospatial data on the incidence of canine
                            parvovirus across North America.
                          </p>
                        </div>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/20 transition-colors">
                          <span className="truncate">View Dataset</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex h-full flex-1 flex-col gap-4 rounded-xl bg-background-light dark:bg-slate-800 shadow-lg min-w-80 border border-slate-200 dark:border-slate-700 transition-shadow duration-300 hover:shadow-2xl">
                      <div
                        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl flex flex-col"
                        data-alt="A microscopic view of cells"
                        style={{
                          backgroundImage:
                            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8q7zG6O_nLQECKEgJon-vifK98qYzsKdFKUzlAA0FqsbPG-XBSOKzqXN_P2AqCplW6HrbcaFX5kOLyvWsc3rwAsq9M4aEU9VdVTwVcc0Zw31Ztq8virni8_w3Z8KAxFCfayplGIp7SaprIdpY6IzRjk9yVWyv2GLyCc6Qv6mPkl-11oPLvi4YPCYLvOqpUOkL2tDj2l3Wbe8qiCJjrFsQzSchebFYUFyptUkDuNxhONeDPW9E4tvIUfTmbWodD2gfTTtZsU2ktg")',
                        }}
                      ></div>
                      <div className="flex flex-col flex-1 justify-between p-6 pt-0 gap-4">
                        <div>
                          <p className="font-display text-slate-900 dark:text-white text-lg font-semibold leading-normal">
                            Cattle Vaccine Efficacy Trial
                          </p>
                          <p className="font-body text-slate-600 dark:text-slate-300 text-sm font-normal leading-normal mt-2">
                            Data from a clinical trial evaluating the efficacy
                            of a new vaccine for a common bovine respiratory
                            disease.
                          </p>
                        </div>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/20 transition-colors">
                          <span className="truncate">View Dataset</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-5 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
                  <div className="max-w-[1200px] mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
                    <div className="flex flex-col gap-3 sm:gap-4 text-center">
                      <h2 className="font-display text-slate-900 dark:text-white tracking-light text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-[720px] mx-auto">
                        How to Contribute
                      </h2>
                      <p className="font-body text-slate-600 dark:text-slate-300 text-base sm:text-lg font-normal leading-normal max-w-[720px] mx-auto px-4">
                        Help us grow the world&apos;s largest open-source
                        veterinary dataset. It&apos;s easy to get started.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 text-center relative">
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
                      <div
                        className="absolute top-1/2 left-0 w-full h-px bg-slate-300 dark:bg-slate-600 hidden md:block"
                        style={{
                          background:
                            "repeating-linear-gradient(90deg, #d1d5db, #d1d5db 10px, transparent 10px, transparent 20px)",
                        }}
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
              <Footer />
            </div>
          </div>
        </div>
      </div>
  );
}
