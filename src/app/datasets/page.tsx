import Header from "@/src/components/header";
import Footer from "@/src/components/footer";


export default function DatasetsPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-1/4 lg:w-1/5">
              <div className="flex h-full min-h-[700px] flex-col justify-start bg-background-light dark:bg-background-dark p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col gap-6">
                  <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Filters
                  </h1>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        Species
                      </p>
                      <div className="flex flex-col gap-1 pl-2">
                        <label className="flex items-center gap-2">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50"
                            type="checkbox"
                          />{" "}
                          Canis
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50"
                            type="checkbox"
                          />{" "}
                          Felis
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50"
                            type="checkbox"
                          />{" "}
                          Equus
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50"
                            type="checkbox"
                          />{" "}
                          Bos
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        File Type
                      </p>
                      <div className="flex flex-col gap-1 pl-2">
                        <label className="flex items-center gap-2">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50"
                            type="checkbox"
                          />{" "}
                          CSV
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50"
                            type="checkbox"
                          />{" "}
                          JSON
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50"
                            type="checkbox"
                          />{" "}
                          SQL
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50"
                            type="checkbox"
                          />{" "}
                          Images
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        Category
                      </p>
                      <div className="flex flex-col gap-1 pl-2">
                        <label className="flex items-center gap-2">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50"
                            type="checkbox"
                          />{" "}
                          Cardiology
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50"
                            type="checkbox"
                          />{" "}
                          Oncology
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50"
                            type="checkbox"
                          />{" "}
                          Neurology
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            className="form-checkbox rounded text-primary focus:ring-primary/50"
                            type="checkbox"
                          />{" "}
                          Parasitology
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        Uploader
                      </p>
                      <input
                        className="form-input w-full rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark text-sm"
                        placeholder="Search uploader..."
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        Size
                      </p>
                      <input
                        className="form-range w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        style={{ accentColor: "#3B82F6" }}
                        type="range"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div className="w-full md:w-3/4 lg:w-4/5">
              <div className="flex flex-col gap-6">
                <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <label className="flex flex-col min-w-40 h-12 w-full">
                    <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                      <div className="text-gray-500 flex items-center justify-center pl-4">
                        <span className="material-symbols-outlined">
                          search
                        </span>
                      </div>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-gray-200 focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-gray-500 px-4 pl-2 text-base font-normal leading-normal"
                        placeholder="Search datasets by keyword, species, or country…"
                        defaultValue=""
                      />
                    </div>
                  </label>
                </div>
                <div className="flex justify-between items-center px-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Showing 1-12 of 128 results
                  </p>
                  <div className="relative">
                    <select className="form-select appearance-none block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md bg-background-light dark:bg-background-dark">
                      <option>Sort by: Relevance</option>
                      <option>Sort by: Newest</option>
                      <option>Sort by: Most Downloads</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
                      <span className="material-symbols-outlined text-sm">
                        expand_more
                      </span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                  <div className="flex flex-col gap-3 pb-3 border rounded-lg p-4 hover:shadow-lg dark:border-gray-700 dark:hover:border-primary/50 transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Canine Cardiac Health Study
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary-800 dark:bg-secondary/30 dark:text-secondary-200">
                        CSV
                      </span>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary-800 dark:bg-secondary/30 dark:text-secondary-200">
                        Public
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Uploaded by Dr. Jane Doe
                    </p>
                    <div className="flex items-center gap-2 mt-auto pt-2">
                      <span className="material-symbols-outlined text-base">
                        download
                      </span>
                      <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        1,234
                      </p>
                      <button className="ml-auto flex items-center justify-center rounded-md h-9 px-3 bg-highlight text-white text-sm font-bold">
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 pb-3 border rounded-lg p-4 hover:shadow-lg dark:border-gray-700 dark:hover:border-primary/50 transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Feline Kidney Disease Data
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary-800 dark:bg-secondary/30 dark:text-secondary-200">
                        JSON
                      </span>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary-800 dark:bg-secondary/30 dark:text-secondary-200">
                        Public
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Uploaded by Dr. John Smith
                    </p>
                    <div className="flex items-center gap-2 mt-auto pt-2">
                      <span className="material-symbols-outlined text-base">
                        download
                      </span>
                      <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        876
                      </p>
                      <button className="ml-auto flex items-center justify-center rounded-md h-9 px-3 bg-highlight text-white text-sm font-bold">
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 pb-3 border rounded-lg p-4 hover:shadow-lg dark:border-gray-700 dark:hover:border-primary/50 transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Avian Flu Outbreak Records
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary-800 dark:bg-secondary/30 dark:text-secondary-200">
                        CSV
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Uploaded by Dr. Emily White
                    </p>
                    <div className="flex items-center gap-2 mt-auto pt-2">
                      <span className="material-symbols-outlined text-base">
                        download
                      </span>
                      <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        543
                      </p>
                      <button className="ml-auto flex items-center justify-center rounded-md h-9 px-3 bg-highlight text-white text-sm font-bold">
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 pb-3 border rounded-lg p-4 hover:shadow-lg dark:border-gray-700 dark:hover:border-primary/50 transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Bovine Growth Hormone Analysis
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary-800 dark:bg-secondary/30 dark:text-secondary-200">
                        SQL
                      </span>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary-800 dark:bg-secondary/30 dark:text-secondary-200">
                        Private
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Uploaded by Dr. Michael Brown
                    </p>
                    <div className="flex items-center gap-2 mt-auto pt-2">
                      <span className="material-symbols-outlined text-base">
                        download
                      </span>
                      <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        432
                      </p>
                      <button className="ml-auto flex items-center justify-center rounded-md h-9 px-3 bg-highlight text-white text-sm font-bold">
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 pb-3 border rounded-lg p-4 hover:shadow-lg dark:border-gray-700 dark:hover:border-primary/50 transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Equine Lameness Indicators
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary-800 dark:bg-secondary/30 dark:text-secondary-200">
                        CSV
                      </span>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary-800 dark:bg-secondary/30 dark:text-secondary-200">
                        Public
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Uploaded by Dr. Sarah Green
                    </p>
                    <div className="flex items-center gap-2 mt-auto pt-2">
                      <span className="material-symbols-outlined text-base">
                        download
                      </span>
                      <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        321
                      </p>
                      <button className="ml-auto flex items-center justify-center rounded-md h-9 px-3 bg-highlight text-white text-sm font-bold">
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 pb-3 border rounded-lg p-4 hover:shadow-lg dark:border-gray-700 dark:hover:border-primary/50 transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Exotic Animal Parasite Study
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary/20 text-secondary-800 dark:bg-secondary/30 dark:text-secondary-200">
                        Images
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Uploaded by Dr. David Black
                    </p>
                    <div className="flex items-center gap-2 mt-auto pt-2">
                      <span className="material-symbols-outlined text-base">
                        download
                      </span>
                      <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        210
                      </p>
                      <button className="ml-auto flex items-center justify-center rounded-md h-9 px-3 bg-highlight text-white text-sm font-bold">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
                <nav
                  aria-label="Pagination"
                  className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 px-4 py-3 sm:px-6"
                >
                  <div className="hidden sm:block">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Showing <span className="font-medium">1</span> to{" "}
                      <span className="font-medium">12</span> of{" "}
                      <span className="font-medium">128</span> results
                    </p>
                  </div>
                  <div className="flex-1 flex justify-between sm:justify-end">
                    <a
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                      href="#"
                    >
                      Previous
                    </a>
                    <a
                      className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                      href="#"
                    >
                      Next
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
