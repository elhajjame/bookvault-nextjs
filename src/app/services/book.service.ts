import { connectDb } from "../lib/db";
import { BookInput } from "../lib/validators";
import Book from "../models/Book";

export async function getAllBooks() {
  await connectDb();

  return Book.find().sort({ createdAt: 1 });
}

export async function getBookById(id: string) {
  await connectDb();

  return Book.findById(id);
}

export async function createBook(data: BookInput) {
  await connectDb();

  const existing = await Book.findOne({
    isbn: data.isbn,
  });

  if (existing) {
    throw new Error("A book with this ISBN already exists.");
  }

  return Book.create(data);
}

export async function updateBook(id: string, data: Partial<BookInput>) {
  await connectDb();

  return Book.findByIdAndUpdate(id, data, { new: true, runValidator: true });
}

export async function deleteBook(id: string) {
  await connectDb();

  return Book.findByIdAndDelete(id);
}
