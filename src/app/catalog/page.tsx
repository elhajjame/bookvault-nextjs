"use client";

import { useEffect, useState } from "react";
import SearchBar from "../_components/books/SearchBar";
import { useBooks } from "../context/BookContext";
import BookGrid from "../_components/books/BookGrid";

export default function BooksPage() {
  const { fetchBooks, books, loading } = useBooks();
  console.log("books dtrat", books);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

//   const filteredBooks = books.filter((book) =>
//     `${book.title} ${book.author} ${book.category}`
//       .toLowerCase()
//       .includes(search.toLowerCase()),
//   );

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {/* <SearchBar search={search} setSearch={setSearch} /> */}

      <BookGrid books={books} />
    </>
  );
}
