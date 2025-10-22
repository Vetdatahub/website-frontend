import Link from "next/link";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";


export default function DatasetDetailsPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-x-2 rounded-full bg-secondary/20 text-secondary-darker dark:bg-secondary/30 dark:text-secondary-lighter px-3 py-1 text-sm font-medium">
                  <span className="material-symbols-outlined text-base">
                    verified
                  </span>
                  Verified Dataset
                </div>
                <div className="flex items-center gap-x-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 text-sm font-medium">
                  <span className="material-symbols-outlined text-base">
                    school
                  </span>
                  Peer Reviewed
                </div>
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tighter">
                Canine Thoracic Radiograph Database
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                By Dr. Evelyn Reed, Cornell University | CC BY 4.0 | Updated on
                15 March 2023
              </p>
            </div>
            <div className="border-b border-border-light dark:border-border-dark">
              <div className="flex gap-8">
                <Link
                  className="flex flex-col items-center justify-center border-b-2 border-b-primary text-primary pb-3 pt-1"
                  href="#"
                >
                  <p className="text-sm font-bold tracking-wide">Overview</p>
                </Link>
                <Link
                  className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-gray-500 dark:text-gray-400 hover:text-primary hover:border-primary/50 pb-3 pt-1 transition-colors"
                  href="#"
                >
                  <p className="text-sm font-bold tracking-wide">Files</p>
                </Link>
                <Link
                  className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-gray-500 dark:text-gray-400 hover:text-primary hover:border-primary/50 pb-3 pt-1 transition-colors"
                  href="#"
                >
                  <p className="text-sm font-bold tracking-wide">Versions</p>
                </Link>
                <Link
                  className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-gray-500 dark:text-gray-400 hover:text-primary hover:border-primary/50 pb-3 pt-1 transition-colors"
                  href="#"
                >
                  <p className="text-sm font-bold tracking-wide">Discussions</p>
                </Link>
                <Link
                  className="flex flex-col items-center justify-center border-b-2 border-b-transparent text-gray-500 dark:text-gray-400 hover:text-primary hover:border-primary/50 pb-3 pt-1 transition-colors"
                  href="#"
                >
                  <p className="text-sm font-bold tracking-wide">Analytics</p>
                </Link>
              </div>
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold">Abstract</h2>
              <p>
                A comprehensive collection of canine thoracic radiographs for
                the study of cardiovascular and pulmonary diseases. This dataset
                includes over 2,000 images from various breeds, ages, and
                clinical histories. The data has been carefully curated and
                anonymized, making it suitable for training machine learning
                models for automated diagnosis, as well as for educational
                purposes. Each image is accompanied by detailed metadata,
                including clinical findings and patient signalment.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-bold">Files (2,134)</h2>
              <div className="flex justify-end">
                <button className="flex items-center gap-2 rounded-lg h-10 px-4 bg-black text-white text-sm font-bold hover:bg-accent/90 transition-colors">
                  <span className="material-symbols-outlined">download</span>
                  <span>Download All as ZIP</span>
                </button>
              </div>
              <div className="border border-border-light dark:border-border-dark rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">
                        File Name
                      </th>
                      <th className="px-4 py-3 text-left font-semibold">
                        Size
                      </th>
                      <th className="px-4 py-3 text-right font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-light dark:divide-border-dark">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="px-4 py-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-accent">
                          image
                        </span>{" "}
                        radiograph_001.dcm
                      </td>
                      <td className="px-4 py-3">2.5 MB</td>
                      <td className="px-4 py-3 text-right">
                        <button className="text-primary hover:underline font-semibold">
                          Download
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="px-4 py-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-accent">
                          image
                        </span>{" "}
                        radiograph_002.dcm
                      </td>
                      <td className="px-4 py-3">2.8 MB</td>
                      <td className="px-4 py-3 text-right">
                        <button className="text-primary hover:underline font-semibold">
                          Download
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="px-4 py-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary">
                          description
                        </span>{" "}
                        metadata.csv
                      </td>
                      <td className="px-4 py-3">512 KB</td>
                      <td className="px-4 py-3 text-right">
                        <button className="text-primary hover:underline font-semibold ">
                          Download
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <td className="px-4 py-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-gray-500">
                          article
                        </span>{" "}
                        README.md
                      </td>
                      <td className="px-4 py-3">2 KB</td>
                      <td className="px-4 py-3 text-right">
                        <button className="text-primary hover:underline font-semibold">
                          Download
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <aside className="w-full lg:w-1/3 flex flex-col gap-6">
            <div className="bg-gray-50 dark:bg-gray-800/50 border border-border-light dark:border-border-dark rounded-lg p-6 flex flex-col gap-4">
              <h3 className="text-xl font-bold">Actions</h3>
              <button className="w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined">bookmark_add</span>
                <span>Follow Dataset</span>
              </button>
              <button className="w-full flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-black text-white text-sm font-bold hover:bg-accent/90 transition-colors">
                <span className="material-symbols-outlined">download</span>
                <span>Download All (1.2 GB)</span>
              </button>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 border border-border-light dark:border-border-dark rounded-lg p-6 flex flex-col gap-4">
              <h3 className="text-xl font-bold">Metadata</h3>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <dt className="font-semibold text-gray-600 dark:text-gray-300">
                  Species
                </dt>
                <dd className="text-right">Canine</dd>
                <dt className="font-semibold text-gray-600 dark:text-gray-300">
                  Sample Count
                </dt>
                <dd className="text-right">2,134 radiographs</dd>
                <dt className="font-semibold text-gray-600 dark:text-gray-300">
                  Location
                </dt>
                <dd className="text-right">Ithaca, NY, USA</dd>
                <dt className="font-semibold text-gray-600 dark:text-gray-300">
                  Anatomical Region
                </dt>
                <dd className="text-right">Thorax</dd>
              </dl>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 border border-border-light dark:border-border-dark rounded-lg p-6 flex flex-col gap-4">
              <h3 className="text-xl font-bold">Cite this Dataset</h3>
              <div className="text-sm p-4 bg-gray-100 dark:bg-gray-900 rounded-md">
                <p className="font-mono text-xs leading-relaxed">
                  Reed, E. (2023). Canine Thoracic Radiograph Database (Version
                  1.2). VetDataHub. https://doi.org/10.5678/VTH.12345
                </p>
              </div>
              <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 border border-primary text-primary text-sm font-bold hover:bg-primary/10 transition-colors">
                <span className="material-symbols-outlined">content_copy</span>
                <span>Copy Citation</span>
              </button>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/50 border border-border-light dark:border-border-dark rounded-lg p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Ratings &amp; Reviews</h3>
                <div className="flex items-center gap-1 text-accent">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star_half</span>
                  <span className="ml-1 text-sm font-bold text-gray-600 dark:text-gray-300">
                    (4.6)
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <img
                    className="size-10 rounded-full"
                    data-alt="User avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOhSzXziqwHlnNG481CLqlkNLYqYJQAbujlI9K3qZe3lNMwNJZmUCcJrGs9MnyOWJtHXh2IPWlYrO4CVmOu-xnRXkAePUQ9dSgqjlxCqD9ZgyMOnUSBZs84bc1FdheycqxokA5UG6XPZdxM51ALIlBunzhRXvm3viOACZLZhstUIQKc09sF0vg3WY0cXLeVSdcXM1wAFCcZsDUpqS-bGb8htY1i_iAjks-cL8s3UyFYQBMsn-GxQpX_Spdpansy0CztpKARqLv1w"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold">Dr. Alex Chen</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Excellent resource for my research on AI diagnostics. The
                      image quality is superb.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img
                    className="size-10 rounded-full"
                    data-alt="User avatar"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzMWHT-V1FSC5HvAfBZKM6CRntF1pFvd_NB6qw878kFPzSkNa_TFmoZcDZTy08jpMd1Ua30fQDaDYDe6Abdt7KVCgjbtm_Y4Gd2phr5DZz2hG0kGimqkg2A2J7fOS-6tHg_N8PVKkoM8s62SFi4PzfPLyame10Goz7x8ABv9iSAD_lMSh-T2TAj5XI3vk18AGJrSQkEDNnJXHg3FbNuQbjKXgcXs-1az3ejGPMjou8SxqPkXj-GooBHw427aivSFCLj9vR8A3wzA"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold">Maria Garcia, Vet Student</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Incredibly helpful for my studies. The metadata is very
                      detailed.
                    </p>
                  </div>
                </div>
              </div>
              <button className="mt-2 text-primary hover:underline text-sm font-semibold">
                View all 12 reviews
              </button>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
