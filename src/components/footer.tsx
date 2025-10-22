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
                <div className="flex gap-4"></div>
              </div>
            </footer>
    )
}