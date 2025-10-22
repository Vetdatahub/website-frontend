import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-10 py-4 font-display">
      <div className="flex items-center gap-2 sm:gap-4 text-slate-800 dark:text-white">
        <Image src="/logo.jpg" alt="VetDataHub" width={32} height={32} />

        <h2 className="text-slate-800 dark:text-white text-lg sm:text-xl font-bold leading-tight tracking-[-0.015em]">
          VetDataHub
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-2 sm:gap-4 lg:gap-8 items-center font-body">
        <div className="hidden md:flex items-center gap-4 lg:gap-9">
          <Link
            className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors"
            href="/datasets"
          >
            Datasets
          </Link>
          <Link
            className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors"
            href="/contact-us"
          >
            Contact us
          </Link>
          <Link
            className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors"
            href="/about-us"
          >
            About Us
          </Link>
          <Link
            className="text-slate-600 dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors"
            href="/sponsor-us"
          >
            Sponsor Us
          </Link>
        </div>
        <button className="hidden md:flex min-w-[70px] sm:min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 sm:h-10 px-3 sm:px-5 bg-primary text-white text-xs sm:text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span className="truncate">Sign In/Up</span>
        </button>
        {/* Mobile menu */}
        <details className="relative md:hidden">
          <summary className="list-none flex items-center justify-center p-2 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer select-none">
            <span className="material-symbols-outlined text-2xl">menu</span>
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg py-2 z-50">
            <Link
              className="block px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
              href="/"
            >
              Home
            </Link>
            <Link
              className="block px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
              href="/datasets"
            >
              Datasets
            </Link>
            <Link
              className="block px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
              href="/contact-us"
            >
              Contact Us
            </Link>
            <Link
              className="block px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
              href="/about-us"
            >
              About Us
            </Link>
            <Link
              className="block px-4 py-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700"
              href="/sponsor-us"
            >
              Sponsor Us
            </Link>
            <div className="px-3 pt-2">
              <button className="w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span className="truncate">Sign In/Up</span>
              </button>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
