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
    try {
      const res = await fetch("/api/books");
      console.log("res", res);
      const data = await res.json();
      console.log(data);
      setBooks(data.books);
    } catch (err) {
      console.error(err);
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
