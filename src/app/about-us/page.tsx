import Link from "next/link";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

export default function AboutUsPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-4">
                <div className="space-y-24 section-fade-in" id="about">
                  <div className="text-center space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-black text-heading-light dark:text-heading-dark tracking-tighter">
                      Driving the Future of Veterinary Medicine Through Open
                      Data
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-text-light dark:text-text-dark">
                      VetDataHub is a catalyst for scientific discovery,
                      dedicated to breaking down barriers in veterinary
                      research. We believe that shared data is the key to
                      unlocking unprecedented advancements in animal health.
                    </p>
                  </div>
                  <div className="bg-sidebar-light dark:bg-sidebar-dark py-16 px-8 rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div className="space-y-4">
                        <p className="text-primary font-bold tracking-wider uppercase">
                          Our Mission
                        </p>
                        <h2 className="text-3xl font-bold text-heading-light dark:text-heading-dark">
                          Democratize Access to Veterinary Data
                        </h2>
                        <p className="text-text-light dark:text-text-dark">
                          Our primary mission is to build and maintain a robust,
                          open-source repository of diverse veterinary datasets.
                          We empower researchers, clinicians, and data
                          scientists by providing the critical data
                          infrastructure needed to accelerate discovery, enhance
                          diagnostic accuracy, and develop novel treatments for
                          animals worldwide.
                        </p>
                      </div>
                      <div className="w-full aspect-square bg-slate-200 dark:bg-slate-700 rounded-lg">
                        <img
                          className="w-full h-full object-cover rounded-lg"
                          data-alt="Abstract visualization of interconnected data nodes forming a global network."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwa7sBjukbaV8vXNQvZ1qbG0HqNmDJMQn8fO4MjpmdukYGKdipFTr5MGEA0X8T61W1GZY5MdktY7xK_Ofqa93w8DxGq9OBd4RpuyySjCM-40Wv36l4JxALksEthERLxUSiK81UvcIApkDjep1W5J9z3bQdS9EVXf5BG95451voq_GQyprC2dQqbHZvgJC9soa9I0fZasOPH4yfI1WIy_wtni2rznvCfJk0OZU_6gD8Uijc0HYIDyh1SSoZoqh3LqOJ7dCwQXoxqw"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="w-full aspect-square bg-slate-200 dark:bg-slate-700 rounded-lg order-last md:order-first">
                      <img
                        className="w-full h-full object-cover rounded-lg"
                        data-alt="A futuristic image of a veterinarian analyzing complex holographic data of an animal's anatomy."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxW8qsTBQgMVo33-SYCSw3AL_cZzAAOMXbprTvblMzQtOHG8GpRfUE1fmfS7aezdaArpo44mHjMkCyCAgiBrCYChtkP9jDkWvBUBCoZVrbKzu7aCfcpPA7Y5cq-OKLR-512B6GzMiNtEmtKRFhQSN179yqiUCUHSDatf9aEYkAw2nyliN5fZ7emN7ae_-5sDhHLGl0b_dbC_J-vi3FAcze7bn8MZajoUFzXiGUWp3zDm6MMfRvCXSi1-yQG-6blepZsX2IDnOirA"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="text-primary font-bold tracking-wider uppercase">
                        Our Vision
                      </p>
                      <h2 className="text-3xl font-bold text-heading-light dark:text-heading-dark">
                        A World Cured by Collaborative Insight
                      </h2>
                      <p className="text-text-light dark:text-text-dark">
                        We envision a future where every veterinary
                        professional, regardless of location or institution, can
                        contribute to and benefit from a global pool of shared
                        data. This collaborative ecosystem will power predictive
                        analytics, personalized medicine for animals, and a
                        proactive approach to global animal health challenges.
                      </p>
                    </div>
                  </div>
                  <div className="bg-sidebar-light dark:bg-sidebar-dark py-16 px-8 rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="max-w-4xl mx-auto text-left">
                      <p className="text-primary font-bold tracking-wider uppercase text-center">
                        Our Values
                      </p>
                      <h2 className="text-3xl font-bold text-heading-light dark:text-heading-dark text-center mt-4 mb-12">
                        The Principles That Guide Us
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="text-center">
                          <span className="material-symbols-outlined text-secondary text-5xl mb-4 inline-block">
                            lock_open
                          </span>
                          <h3 className="text-xl font-bold text-heading-light dark:text-heading-dark mb-2">
                            Radical Openness
                          </h3>
                          <p>
                            We are committed to the free and unrestricted
                            sharing of data, tools, and knowledge to maximize
                            scientific impact.
                          </p>
                        </div>
                        <div className="text-center">
                          <span className="material-symbols-outlined text-secondary text-5xl mb-4 inline-block">
                            verified
                          </span>
                          <h3 className="text-xl font-bold text-heading-light dark:text-heading-dark mb-2">
                            Scientific Rigor
                          </h3>
                          <p>
                            We uphold the highest standards of data quality,
                            curation, and ethical conduct to ensure the
                            reliability of our repository.
                          </p>
                        </div>
                        <div className="text-center">
                          <span className="material-symbols-outlined text-secondary text-5xl mb-4 inline-block">
                            diversity_3
                          </span>
                          <h3 className="text-xl font-bold text-heading-light dark:text-heading-dark mb-1">
                            Community First
                          </h3>
                          <p>
                            We thrive on collaboration, inclusivity, and mutual
                            respect, building a supportive network for global
                            progress.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center  ">
                    <h2 className="text-3xl font-bold text-heading-light dark:text-heading-dark">
                      Join the Movement
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-text-light dark:text-text-dark">
                      Your data can be the missing piece that leads to a
                      breakthrough. By contributing, you directly impact the
                      future of animal health.
                    </p>
                    <div className="flex justify-center items-center gap-4">
                      <Link
                        className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/90 transition-transform transform hover:scale-105"
                        href="/datasets"
                      >
                        Explore Open Datasets
                      </Link>
                      <a
                        className="inline-block bg-secondary text-white font-bold py-3 px-8 rounded-lg hover:bg-secondary/90 transition-transform transform hover:scale-105"
                        href="#"
                      >
                        Contribute Your Data
                      </a>
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
