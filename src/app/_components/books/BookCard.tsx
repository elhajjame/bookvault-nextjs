"use client";
import type { IBook } from "@/app/models/Book";
import Link from "next/link";
import { BookOpen, Edit, Trash2, User } from "lucide-react";

interface BookCardProps {
  book: IBook;
  onDelete?: (id: string) => void;
}

export default function BookCard({
  book,
  onDelete,
}: BookCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-ivory-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-bronze hover:shadow-xl dark:border-[#2A201B] dark:bg-[#1C1612]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-ivory-border px-6 py-4 dark:border-[#2A201B]">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-bronze/10 p-2 text-bronze dark:bg-bronze/20 dark:text-gold">
            <BookOpen size={20} />
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-walnut dark:text-ivory-card">
              {book.title}
            </h3>

            <div className="mt-1 flex items-center gap-1 text-sm text-zinc-500">
              <User size={14} />
              {book.author}
            </div>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            book.available
              ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
              : "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
          }`}
        >
          {book.available ? "Available" : "Borrowed"}
        </span>
      </div>

      {/* Body */}
      <div className="space-y-3 px-6 py-5">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-400">
            Genre
          </p>

          <p className="mt-1 text-sm font-medium text-walnut dark:text-ivory-card">
            {book.genre}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-2 border-t border-ivory-border px-6 py-4 dark:border-[#2A201B]">
        <Link
          href={`/books/${book._id}/edit`}
          className="flex items-center gap-2 rounded-lg border border-bronze px-4 py-2 text-sm font-medium text-bronze transition-colors hover:bg-bronze hover:text-white"
        >
          <Edit size={16} />
          Edit
        </Link>

        <button
        //   onClick={() => onDelete?.(book._id)}
          className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-600"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
}