"use client";

import BookSidebar from "./BookSidebar";
import BookInfo from "./BookInfo";
import { useBooks } from "@/app/context/BookContext";
import { useEffect } from "react";

interface BookDetailsProps {
  id: string;
}

export default function BookDetails({ id }: BookDetailsProps) {
  const { book, fetchBookById, loading, error } = useBooks();

  useEffect(() => {
    void fetchBookById(id);
  }, [id, fetchBookById]);

  if (loading) return <p className="px-6 py-16">Loading...</p>;

  if (!book) {
    return (
      <section className="px-6 py-16">
        <p className="text-lg text-zinc-600">
          {error ?? "The requested book could not be found."}
        </p>
      </section>
    );
  }

  return (
    <section className="mt-15 py-16 max-w-[1200px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <BookSidebar book={book} />
        <BookInfo book={book} />
      </div>
    </section>
  );
}
