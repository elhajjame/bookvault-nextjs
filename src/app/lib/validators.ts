import { z } from "zod";

export const BookSchema = z.object({
  title: z.string().trim().min(3, "Title must be at least 3 characters long."),

  author: z.string().trim().min(1, "Author is required."),

  isbn: z.string().trim().min(1, "ISBN is required."),

  category: z.string().trim().min(1, "Category is required."),

  publicationYear: z
    .number({
      error: "Publication year must be a number.",
    })
    .int()
    .min(1000, "Enter a valid publication year.")
    .max(new Date().getFullYear(), "Publication year cannot be in the future."),

  pages: z
    .number({
      error: "Pages must be a number.",
    })
    .positive(),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters long."),

  imageUrl: z.string().trim(),

  available: z.boolean().optional().default(true),
});

export type BookInput = z.infer<typeof BookSchema>;
