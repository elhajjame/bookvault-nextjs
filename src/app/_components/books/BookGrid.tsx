import BookCard from "./BookCard";
import type { IBook } from "@/app/models/Book";

interface BookGridProps {
  books: IBook[];
  onDelete?: (id: string) => void;
}

export default function BookGrid({ books, onDelete }: BookGridProps) {
  if (books.length === 0) {
    return (
      <div className="mt-[5em] flex min-h-[60vh] items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border border-dashed border-ivory-border bg-white py-20 text-center dark:border-[#2A201B] dark:bg-[#1C1612]">
          <h3 className="font-serif text-2xl text-walnut dark:text-ivory-card">
            No books found
          </h3>

          <p className="mt-2 text-zinc-500">
            Try changing your search or add your first book.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="p-4 m-4 mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {books.map((book) => (
        <BookCard key={book._id.toString()} book={book} onDelete={onDelete} />
      ))}
    </section>
  );
}
