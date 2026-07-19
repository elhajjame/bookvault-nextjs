"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import type { IBook } from "@/app/models/Book";

interface BookContextType {
  books: IBook[];
  book: IBook | null;
  loading: boolean;
  error: string | null;
  fetchBooks: () => Promise<void>;
  fetchBookById: (id: string) => Promise<void>;
  deleteBook: (id: string) => Promise<void>;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export function BookProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<IBook[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [book, setBook] = useState<IBook | null>(null);

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/books");

      if (!res.ok) {
        throw new Error("Failed to fetch books");
      }

      const data = await res.json();
      setBooks(data);
    } catch (error) {
      console.error(error);
      setBooks([]);
      setError(
        error instanceof Error ? error.message : "Failed to fetch books",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchBookById = useCallback(async (id: string): Promise<void> => {
    setLoading(true);
    setError(null);
    setBook(null);

    try {
      const res = await fetch(`/api/books/${id}`);

      if (!res.ok) {
        const errorData = await res
          .json()
          .catch(() => ({ message: "Book not found" }));
        throw new Error(errorData.message || "Failed to fetch book");
      }

      const data = await res.json();
      setBook(data);
    } catch (error) {
      console.error(error);
      setBook(null);
      setError(error instanceof Error ? error.message : "Failed to fetch book");
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteBook = async (id: string) => {
    try {
      const res = await fetch(`/api/books/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete book");
      }

      setBooks((prev) => prev.filter((book) => book._id.toString() !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BookContext.Provider
      value={{
        books,
        loading,
        error,
        book,
        fetchBooks,
        fetchBookById,
        deleteBook,
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
