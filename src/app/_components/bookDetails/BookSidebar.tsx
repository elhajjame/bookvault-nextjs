import { Pen, Trash2 } from "lucide-react";
import { IBook } from "@/app/models/Book";

interface BookDetailsProps {
  book: IBook;
  handelDelete: () => void;
}

export default function BookSidebar({ handelDelete, book }: BookDetailsProps) {
  return (
    <div className="lg:col-span-5 space-y-6">
      <div className="relative aspect-3/4 overflow-hidden rounded-3xl border border-ivory-border bg-ivory-card shadow-xl dark:border-[#2A201B] dark:bg-[#1C1612] group">
        {book.imageUrl ? (
          <img
            src={book.imageUrl}
            alt={book.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-400/20 dark:from-zinc-800/60 dark:to-zinc-700/30" />
        )}

        <div className="absolute top-6 right-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-badge-available/20 bg-[#2E7D32]/15 px-4 py-1.5 text-xs font-medium text-badge-available shadow-md backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2E7D32]" />
            {book.available ? "Available" : "Unavailable"}
          </span>
        </div>

        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-sm font-medium text-walnut dark:text-zinc-100">
            {book.title}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 rounded-2xl border border-ivory-border bg-white p-6 shadow-sm dark:border-[#2A201B] dark:bg-[#1C1612]">
        <button
          type="button"
          className="cursor-pointer flex flex-1 items-center justify-center gap-2 rounded-xl border border-ivory-border px-4 py-3 text-sm font-medium text-walnut transition-all hover:border-bronze hover:bg-ivory-hover dark:border-[#2A201B] dark:text-zinc-200 dark:hover:border-gold dark:hover:bg-[#2A201B]"
        >
          <Pen size={15} className="text-bronze" />
          <span>Edit Details</span>
        </button>

        <button
          onClick={handelDelete}
          type="button"
          className="cursor-pointer flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-badge-borrowed transition-all hover:bg-red-100/80 dark:bg-red-950/20 dark:text-red-300 dark:hover:bg-red-950/40"
        >
          <Trash2 size={15} />
          <span>Delete Book</span>
        </button>
      </div>
    </div>
  );
}
