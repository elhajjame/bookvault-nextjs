"use client";
import { IBook } from "@/app/models/Book";
import { Calendar, FileText, Layers, MapPin } from "lucide-react";

interface BookDetailsProps {
  book: IBook;
}

export default function BookInfo({ book }: BookDetailsProps) {
  return (
    <div className="space-y-8 lg:col-span-7">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="rounded border border-ivory-border bg-ivory-hover px-3 py-1 text-xs font-mono font-medium uppercase text-bronze dark:border-[#2A201B] dark:bg-[#1C1612] dark:text-gold">
            {book.category}
          </span>

          <span className="text-xs font-mono text-zinc-400">
            ISBN: {book.isbn}
          </span>
        </div>

        <h1 className="font-serif text-4xl font-bold tracking-tight text-walnut dark:text-ivory-card md:text-5xl">
          {book.title}
        </h1>

        <p className="text-lg font-light italic text-zinc-500 dark:text-zinc-400 md:text-xl">
          by{" "}
          <span className="font-medium not-italic text-walnut dark:text-zinc-300">
            {book.author}
          </span>
        </p>
      </div>

      <div className="space-y-4 rounded-2xl border border-ivory-border bg-ivory-card p-8 shadow-sm dark:border-[#2A201B] dark:bg-[#1C1612]">
        <h3 className="flex items-center gap-2 font-serif text-lg font-medium text-walnut dark:text-ivory-card">
          <FileText size={18} className="text-bronze" />
          <span>Curator&apos;s Synopsis</span>
        </h3>

        <p className="text-sm font-light leading-relaxed text-zinc-600 dark:text-zinc-300 md:text-base">
          {book.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="space-y-1 rounded-xl border border-ivory-border bg-white p-5 text-center dark:border-[#2A201B] dark:bg-[#1C1612]">
          <MapPin size={18} className="mx-auto mb-1 text-bronze" />

          <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
            Availability
          </p>

          <p className="text-sm font-medium text-walnut dark:text-zinc-100">
            {book.available ? "Available now" : "Currently unavailable"}
          </p>
        </div>

        <div className="space-y-1 rounded-xl border border-ivory-border bg-white p-5 text-center dark:border-[#2A201B] dark:bg-[#1C1612]">
          <Calendar size={18} className="mx-auto mb-1 text-bronze" />

          <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
            Publication Year
          </p>

          <p className="text-sm font-medium text-walnut dark:text-zinc-100">
            {book.publicationYear}
          </p>
        </div>

        <div className="space-y-1 rounded-xl border border-ivory-border bg-white p-5 text-center dark:border-[#2A201B] dark:bg-[#1C1612]">
          <Layers size={18} className="mx-auto mb-1 text-bronze" />

          <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
            Category
          </p>

          <p className="text-sm font-medium text-walnut dark:text-zinc-100">
            {book.category}
          </p>
        </div>
      </div>
    </div>
  );
}
