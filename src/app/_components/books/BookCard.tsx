import { Calendar, MapPin, Layers, Eye, Pen, Trash2 } from "lucide-react";
import { IBook } from "@/app/models/Book";
import { useRouter } from "next/navigation";
interface BookCardProps {
  book: IBook;
  onDelete?: (id: string) => void;
}
export default function BookCard({ book }: BookCardProps) {
  const router = useRouter();
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-ivory-border bg-ivory-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-[#2A201B] dark:bg-[#1C1612]">
      {/* Cover */}
      <div className="relative aspect-[5/6] overflow-hidden bg-ivory-hover dark:bg-[#120E0B] flex items-center justify-center border-b border-ivory-border/50 dark:border-[#2A201B]/50 ">
        <img
          src={book.imageUrl}
          alt={book.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Availability */}
        <div className="absolute right-4 top-4 z-20">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-badge-available/20 bg-[#2E7D32]/10 px-3 py-1 text-xs font-medium text-badge-available shadow-sm backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2E7D32]" />
            Available
          </span>
        </div>

        <div className="absolute bottom-4 left-4 z-20">
          <span className="rounded-md border border-white/10 bg-walnut/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-sm dark:bg-black/75">
            {book.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-2">
        <div className="cursor-pointer space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-zinc-400">{book.isbn}</span>

            <span className="flex items-center gap-1 text-xs font-light text-zinc-500 dark:text-zinc-400">
              <Calendar className="h-3 w-3 text-bronze" />
              {book.publicationYear}
            </span>
          </div>

          <h3 className="line-clamp-1 font-serif text-lg font-semibold text-walnut transition-colors group-hover:text-bronze dark:text-ivory-card">
            {book.title}
          </h3>

          <p className="font-sans text-xs font-light italic text-zinc-500 dark:text-zinc-400">
            by {book.author}
          </p>

          <div className="flex items-center gap-3 pt-2 font-sans text-xs text-zinc-400 dark:text-zinc-500">
            <span className="flex items-center gap-1">
              <Layers className="h-3 w-3 text-bronze" />
              {} pages
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-ivory-border pt-3 dark:border-[#2A201B]">
          <button
            onClick={() => router.push(`/books/${book._id}`)}
            className="cursor-pointer group/btn flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-ivory-hover px-3 py-2 text-xs font-medium text-walnut transition-all hover:bg-walnut hover:text-white dark:bg-[#2A201B] dark:text-zinc-300 dark:hover:bg-bronze"
          >
            <Eye className=" h-[13px] w-[13px] text-bronze transition-colors group-hover/btn:text-white" />
            <span>Details</span>
          </button>

          <button
            title="Edit"
            onClick={() => router.push(`/books/edit?id=${book._id}`)}
            className="cursor-pointer rounded-lg border border-transparent bg-ivory-hover p-2 text-zinc-600 transition-all hover:border-ivory-border hover:bg-white hover:text-bronze dark:bg-[#2A201B] dark:text-zinc-400 dark:hover:border-[#2A201B] dark:hover:bg-[#1C1612] dark:hover:text-gold"
          >
            <Pen className="h-[13px] w-[13px]" />
          </button>

          <button
            title="Delete"
            className="cursor-pointer rounded-lg border border-transparent bg-ivory-hover p-2 text-zinc-500 transition-all hover:border-red-200 hover:bg-red-50 hover:text-[#A94442] dark:bg-[#2A201B] dark:hover:border-red-950 dark:hover:bg-red-950/20 dark:hover:text-red-400"
          >
            <Trash2 className="h-[13px] w-[13px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
