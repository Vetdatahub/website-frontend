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
                    Find quick answers
                  </h3>
                  <p className="text-sm text-[#4c809a] dark:text-slate-400 mb-5">
                    Before you reach out, you might find your answer in our
                    support resources.
                  </p>
                  <div className="space-y-4">
                    <a
                      className="flex items-center gap-4 p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-primary text-2xl">
                        quiz
                      </span>
                      <span className="font-medium text-[#0d171b] dark:text-slate-200">
                        Frequently Asked Questions
                      </span>
                    </a>
                    <a
                      className="flex items-center gap-4 p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                      href="#"
                    >
                      <span className="material-symbols-outlined text-primary text-2xl">
                        menu_book
                      </span>
                      <span className="font-medium text-[#0d171b] dark:text-slate-200">
                        Support Documentation
                      </span>
                    </a>
                  </div>
                </div>
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
                          For urgent inquiries
                        </p>
                        <a
                          className="text-[#4c809a] dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                          href="mailto:support@vetdatahub.org"
                        >
                          support@vetdatahub.org
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary mt-1 text-xl">
                        location_on
                      </span>
                      <div>
                        <p className="font-semibold text-sm text-[#0d171b] dark:text-slate-200">
                          Our Headquarters
                        </p>
                        <p className="text-[#4c809a] dark:text-slate-400">
                          123 Vet Science Avenue, Ithaca, NY 14850
                        </p>
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
