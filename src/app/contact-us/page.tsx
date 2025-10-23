import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

export default function ContactUsPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1 px-4 md:px-10 lg:px-20 py-10 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-[#0d171b] dark:text-white">
                Get in Touch
              </h1>
              <p className="mt-4 text-lg text-[#4c809a] dark:text-slate-400 max-w-2xl mx-auto">
                We&apos;re here to help. Whether you have a question, a suggestion,
                or a concern, we want to hear from you. Use the form below or
                find other ways to connect with our team.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 bg-white dark:bg-background-dark p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <h2 className="text-2xl font-bold mb-1 text-[#0d171b] dark:text-white">
                  Send us a message
                </h2>
                <p className="text-sm text-[#4c809a] dark:text-slate-400 mb-6">
                  We typically respond within 1-2 business days.
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="flex flex-col">
                      <p className="text-sm font-medium leading-normal pb-2 text-[#0d171b] dark:text-slate-300">
                        Name
                      </p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] dark:text-slate-50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdfe7] dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:border-primary dark:focus:border-primary h-12 placeholder:text-[#4c809a] dark:placeholder:text-slate-500 px-4 text-base font-normal"
                        placeholder="Enter your full name"
                        defaultValue=""
                      />
                    </label>
                    <label className="flex flex-col">
                      <p className="text-sm font-medium leading-normal pb-2 text-[#0d171b] dark:text-slate-300">
                        Email
                      </p>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] dark:text-slate-50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdfe7] dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:border-primary dark:focus:border-primary h-12 placeholder:text-[#4c809a] dark:placeholder:text-slate-500 px-4 text-base font-normal"
                        placeholder="you@example.com"
                        defaultValue=""
                      />
                    </label>
                  </div>
                  <label className="flex flex-col">
                    <p className="text-sm font-medium leading-normal pb-2 text-[#0d171b] dark:text-slate-300">
                      Subject
                    </p>
                    <select
                      className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d171b] dark:text-slate-50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdfe7] dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:border-primary dark:focus:border-primary h-12 appearance-none bg-no-repeat bg-right px-4 text-base font-normal"
                      style={{
                        backgroundImage:
                          "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e')",
                        backgroundPosition: "right 0.5rem center",
                        backgroundSize: "1.5em 1.5em",
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="contribution">Data Contribution</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">
                        Feedback &amp; Suggestions
                      </option>
                    </select>
                  </label>
                  <label className="flex flex-col">
                    <p className="text-sm font-medium leading-normal pb-2 text-[#0d171b] dark:text-slate-300">
                      Message
                    </p>
                    <textarea
                      className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#0d171b] dark:text-slate-50 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdfe7] dark:border-slate-700 bg-background-light dark:bg-slate-800 focus:border-primary dark:focus:border-primary h-36 placeholder:text-[#4c809a] dark:placeholder:text-slate-500 p-4 text-base font-normal"
                      placeholder="How can we help?"
                    ></textarea>
                  </label>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[#4c809a] dark:text-slate-500">
                      Your information is protected. See our{" "}
                      <a className="underline hover:text-primary" href="#">
                        Privacy Policy
                      </a>
                      .
                    </p>
                    <button
                      className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/50"
                      type="submit"
                    >
                      <span className="truncate">Submit Message</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="lg:col-span-2 space-y-10">
                <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                  <h3 className="text-xl font-bold mb-4 text-[#0d171b] dark:text-white">
                    Other ways to reach us
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary mt-1 text-xl">
                        alternate_email
                      </span>
                      <div>
                        <p className="font-semibold text-sm text-[#0d171b] dark:text-slate-200">
                          Email us
                        </p>
                        <a
                          className="text-[#4c809a] dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors break-all"
                          href="mailto:vetdatahub@gmail.com"
                        >
                          vetdatahub@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary mt-1 text-xl">
                        share
                      </span>
                      <div>
                        <p className="font-semibold text-sm text-[#0d171b] dark:text-slate-200">
                          Connect on social
                        </p>
                        <div className="mt-2 flex items-center gap-4">
                          {/* LinkedIn */}
                          <a
                            href="https://www.linkedin.com/company/vetdatahub"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="VetDataHub on LinkedIn"
                            className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                            title="LinkedIn"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                              <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.983 2.12 4.983 3.5zM.25 8.25h4.5V23h-4.5V8.25zM8.25 8.25h4.31v2.01h.06c.6-1.14 2.08-2.34 4.28-2.34 4.58 0 5.42 3.01 5.42 6.93V23h-4.5v-6.56c0-1.56-.03-3.57-2.18-3.57-2.19 0-2.53 1.71-2.53 3.46V23h-4.5V8.25z" />
                            </svg>
                          </a>
                          {/* X (Twitter) */}
                          <a
                            href="https://x.com/vetdatahub"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="VetDataHub on X"
                            className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                            title="X (Twitter)"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                              <path d="M18.244 2H21.5l-7.5 8.57L23.25 22h-5.98l-4.68-5.7L7.2 22H3.94l8.03-9.17L1.75 2h6.09l4.23 5.11L18.244 2zm-1.05 18h1.65L7.9 4H6.16l11.034 16z"/>
                            </svg>
                          </a>
                          {/* GitHub */}
                          <a
                            href="https://github.com/Vetdatahub"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="VetDataHub on GitHub"
                            className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                            title="GitHub"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.52 1.06 1.52 1.06.89 1.56 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.36-2.22-.26-4.55-1.13-4.55-5 0-1.11.38-2.01 1.02-2.72-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.04A9.3 9.3 0 0 1 12 7.07c.85 0 1.71.12 2.51.35 1.9-1.31 2.74-1.04 2.74-1.04.56 1.42.21 2.47.11 2.73.64.71 1.02 1.61 1.02 2.72 0 3.88-2.34 4.73-4.57 4.98.36.32.67.94.67 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" clipRule="evenodd"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
