"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import type { IBook } from "@/app/models/Book";

interface BookContextType {
  books: IBook[];
  loading: boolean;
  fetchBooks: () => Promise<void>;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export function BookProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<IBook[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchBooks() {
    setLoading(true);

    try {
      const res = await fetch("/api/books");

      if (!res.ok) {
        throw new Error("Failed to fetch books");
      }

      const data = await res.json();
      const nextBooks = Array.isArray(data) ? data : (data?.books ?? []);

      setBooks(nextBooks);
    } catch (err) {
      console.error("Failed to fetch books:", err);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <BookContext.Provider
      value={{
        books,
        loading,
        fetchBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error("useBooks must be used inside BookProvider");
  }

  return context;
}
