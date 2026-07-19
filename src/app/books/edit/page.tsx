"use client";

import { Save } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useBooks } from "@/app/context/BookContext";

const emptyForm = {
  title: "",
  author: "",
  category: "",
  isbn: "",
  publicationYear: new Date().getFullYear(),
  imageUrl: "",
  description: "",
  available: true,
};

export default function EditBookPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const { book, fetchBookById, updateBook, loading } = useBooks();
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (id) {
      void fetchBookById(id);
    }
  }, [id, fetchBookById]);

  const formValues = book
    ? {
        ...emptyForm,
        ...book,
        ...formData,
      }
    : formData;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "publicationYear" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id) return;

    await updateBook(id, formData);
    router.push(`/books/${id}`);
  };

  if (!id) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-zinc-500">No book selected for editing.</p>
      </div>
    );
  }

  if (loading && !book) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-zinc-500">Loading book...</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="relative overflow-hidden rounded-[18px] border border-ivory-border bg-ivory-card p-8 shadow-xl dark:border-[#2A201B] dark:bg-[#1C1612] md:p-12">
        <div className="space-y-10">
          <div className="space-y-3">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-walnut dark:text-ivory-card md:text-4xl">
              Edit Book
            </h2>

            <p className="text-sm font-light text-zinc-500 dark:text-zinc-400">
              Update the selected volume in the BookVault system.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-1">
                <label className="block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                  Book Title
                </label>
                <input
                  name="title"
                  value={formValues.title}
                  onChange={handleChange}
                  className="w-full px-4.5 py-3.5 rounded-xl border border-ivory-border dark:border-[#2A201B] bg-white dark:bg-[#120E0B] text-walnut dark:text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-bronze"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                  Author
                </label>
                <input
                  name="author"
                  value={formValues.author}
                  onChange={handleChange}
                  className="w-full px-4.5 py-3.5 rounded-xl border border-ivory-border dark:border-[#2A201B] bg-white dark:bg-[#120E0B] text-walnut dark:text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-bronze"
                  required
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-1">
                <label className="block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                  Category / Genre
                </label>
                <select
                  name="category"
                  value={formValues.category}
                  onChange={handleChange}
                  className="w-full cursor-pointer rounded-xl border border-ivory-border bg-white px-4.5 py-3.5 text-sm text-walnut focus:outline-none focus:ring-1 focus:ring-bronze dark:border-[#2A201B] dark:bg-[#120E0B] dark:text-zinc-100"
                >
                  <option value="Fiction">Fiction</option>
                  <option value="Philosophy">Philosophy</option>
                  <option value="History">History</option>
                  <option value="Science & Tech">Science &amp; Tech</option>
                  <option value="Art & Design">Art &amp; Design</option>
                  <option value="Poetry">Poetry</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                  ISBN Identifier
                </label>
                <input
                  name="isbn"
                  value={formValues.isbn}
                  onChange={handleChange}
                  className="w-full px-4.5 py-3.5 rounded-xl border border-ivory-border dark:border-[#2A201B] bg-white dark:bg-[#120E0B] text-walnut dark:text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-bronze"
                  required
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-1">
                <label className="block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                  Publication Year
                </label>
                <input
                  name="publicationYear"
                  type="number"
                  value={formValues.publicationYear}
                  onChange={handleChange}
                  className="w-full px-4.5 py-3.5 rounded-xl border border-ivory-border dark:border-[#2A201B] bg-white dark:bg-[#120E0B] text-walnut dark:text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-bronze"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                  Cover Image URL (Optional)
                </label>
                <input
                  name="imageUrl"
                  value={formValues.imageUrl}
                  onChange={handleChange}
                  className="w-full px-4.5 py-3.5 rounded-xl border border-ivory-border dark:border-[#2A201B] bg-white dark:bg-[#120E0B] text-walnut dark:text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-bronze"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                Synopsis &amp; Curator&apos;s Notes
              </label>
              <textarea
                name="description"
                rows={4}
                value={formValues.description}
                onChange={handleChange}
                className="w-full resize-y rounded-xl border border-ivory-border bg-white px-4.5 py-3.5 text-sm leading-relaxed text-walnut focus:outline-none focus:ring-1 focus:ring-bronze dark:border-[#2A201B] dark:bg-[#120E0B] dark:text-zinc-100"
                required
              />
            </div>

            <div className="flex items-center justify-end gap-4 border-t border-ivory-border pt-6 dark:border-[#2A201B]">
              <button
                onClick={() => router.push(`/books/${id}`)}
                type="button"
                className="rounded-xl border border-ivory-border px-6 py-3.5 text-sm font-medium text-zinc-600 transition-all hover:bg-ivory-hover dark:border-[#2A201B] dark:text-zinc-400 dark:hover:bg-[#1C1612]"
              >
                Discard Changes
              </button>

              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-[#A67C52] px-8 py-3.5 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#523d29] hover:shadow-lg dark:bg-bronze dark:hover:bg-walnut"
              >
                <Save size={16} />
                <span>Save Changes</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
