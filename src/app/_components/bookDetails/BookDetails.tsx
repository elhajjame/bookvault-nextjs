"use client";

import BookSidebar from "./BookSidebar";
import BookInfo from "./BookInfo";
import { useBooks } from "@/app/context/BookContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface BookDetailsProps {
  id: string;
}

export default function BookDetails({ id }: BookDetailsProps) {
  const { book, fetchBookById, loading, error, deleteBook } = useBooks();
  const router = useRouter();
  useEffect(() => {
    void fetchBookById(id);
  }, [id, fetchBookById]);

  const handelDelete = async () => {
    await deleteBook(id.toString());
    router.push("/catalog");
  };
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
        <BookSidebar handelDelete={handelDelete} book={book} />
        <BookInfo book={book} />
      </div>
    </section>
  );
}
