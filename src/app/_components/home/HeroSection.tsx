"use client";
import { ChevronRight, Sparkles } from "lucide-react";
import HeroImage from "./HeroImage";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative z-10 mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12 lg:gap-16">
      <div className="space-y-8 text-left lg:col-span-7">
        <div className="inline-flex items-center gap-2 rounded-full border border-ivory-border bg-ivory-hover px-4.5 py-1.5 shadow-sm dark:border-[#2A201B] dark:bg-[#1C1612]">
          <Sparkles size={14} className="animate-pulse text-gold" />

          <span className="font-mono text-xs font-medium uppercase tracking-wider text-bronze dark:text-gold">
            The Art of Reading Preservation
          </span>
        </div>

        <h1 className="font-serif text-5xl font-semibold leading-[1.1] tracking-tight text-walnut dark:text-ivory-card md:text-6xl lg:text-7xl">
          Where Every Book
          <br className="hidden sm:block" />
          <span className="font-light italic text-bronze">
            {" "}
            Finds Its Place.
          </span>
        </h1>

        <p className="max-w-xl text-lg font-light leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-xl">
          BookVault helps you build, organize, and explore your personal library
          with elegance. Manage every title, track availability, and rediscover
          your collection through a beautifully crafted experience.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={() => router.push("/catalog")}
            className="flex items-center gap-2 bg-[#866543] hover:bg-[#A67C52] dark:bg-[#A67C52] dark:hover:bg-[#866543] text-white px-7 py-4 rounded-xl text-base font-medium shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Browse Collection</span>
            <ChevronRight size={18} />
          </button>

          <button
            onClick={() => router.push("/books/create")}
            className="bg-white hover:bg-ivory-hover dark:bg-[#1C1612] dark:hover:bg-[#2A201B] text-walnut dark:text-ivory-card border border-ivory-border dark:border-[#2A201B] px-7 py-4 rounded-xl text-base font-medium shadow-sm hover:shadow-md transition-all duration-300"
          >
            Add Your First Book
          </button>
        </div>
      </div>
      <HeroImage />
    </section>
  );
}
