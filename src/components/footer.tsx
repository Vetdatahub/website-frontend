import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    return (
            <footer className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 font-body">
              <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 lg:py-12 flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="text-primary size-5 sm:size-6">
                    <Image src="/logo.jpg" alt="VetDataHub" width={32} height={32} />
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
                <div className="flex gap-4">
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
            </footer>
    )
}