import BookCard from "./BookCard";
import type { IBook } from "@/app/models/Book";

interface BookGridProps {
  books: IBook[];
  onDelete?: (id: string) => void;
}

export default function BookGrid({ books, onDelete }: BookGridProps) {
  if (books.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-ivory-border bg-white py-20 text-center dark:border-[#2A201B] dark:bg-[#1C1612]">
        <h3 className="font-serif text-2xl text-walnut dark:text-ivory-card">
          No books found
        </h3>

        <p className="mt-2 text-zinc-500">
          Try changing your search or add your first book.
        </p>
      </div>
    );
  }

  return (
    <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {books.map((book) => (
        <BookCard key={book._id.toString()} book={book} onDelete={onDelete} />
      ))}
    </section>
  );
}
