"use client";
import { BookOpen, Plus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-[#120E0B]/85 backdrop-blur-md border-b border-ivory-border dark:border-[#2A201B] py-4 shadow-sm transition-all duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <div
          id="header-logo"
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-full bg-walnut dark:bg-bronze flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
            <BookOpen size={20} className="text-gold" />
          </div>

          <div>
            <span className="font-serif text-2xl font-semibold tracking-wide text-walnut dark:text-ivory-card group-hover:text-bronze transition-colors">
              Book
              <span className="text-bronze dark:text-[#C9A227]">Vault</span>
            </span>
          </div>
        </div>

        <nav id="header-nav" className="hidden md:flex items-center gap-8">
          <Link href="/">
            <button
              className="relative py-1 font-sans font-medium text-sm tracking-wide transition-all text-walnut dark:text-gold"
            >
              Home
              <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gold" />
            </button>
          </Link>
          <Link href="/catalog">
            <button className="relative py-1 font-sans font-medium text-sm tracking-wide transition-all text-zinc-500 dark:text-zinc-400 hover:text-walnut dark:hover:text-gold">
              Catalog
            </button>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/books/create")}
            className="group flex items-center gap-2 rounded-xl bg-[#A67C52] px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#5b3e22] hover:shadow-lg dark:bg-bronze dark:hover:bg-walnut"
          >
            <Plus
              size={16}
              className="transition-transform duration-300 group-hover:rotate-90"
            />
            <span>Add Book</span>
          </button>
        </div>
      </div>
    </header>
  );
}