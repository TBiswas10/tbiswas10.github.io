"use client";


export default function Footer() {
  return (
    <footer className="h-24 py-6 flex flex-col sm:flex-row items-center justify-between px-6 lg:px-12 bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-t border-slate-200 dark:border-zinc-800 text-sm gap-2 sm:gap-0">
      <span className="text-black dark:text-white">© 2025 Tirtha Biswas</span>
      <div className="flex gap-4 items-center">
        <a
          href="/goals"
          className="hover:underline text-black dark:text-gray-300"
        >
          Goals
        </a>

  
      </div>
    </footer>
  );
}
