"use client";
import { Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BookForm() {
  const router = useRouter();
  const initialForm = {
    title: "",
    author: "",
    category: "",
    pages: 0,
    isbn: "",
    publicationYear: 0,
    imageUrl: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "publicationYear" || name === "pages" ? Number(value) : value,
    }));
  };

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="relative overflow-hidden rounded-[18px] border border-ivory-border bg-ivory-card p-8 shadow-xl dark:border-[#2A201B] dark:bg-[#1C1612] md:p-12">
      <div className="space-y-10">
        <div className="space-y-3">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-walnut dark:text-ivory-card md:text-4xl">
            Register New Volume
          </h2>

          <p className="text-sm font-light text-zinc-500 dark:text-zinc-400">
            Add a new work to the BookVault system. Leave the Cover URL blank to
            automatically generate a beautiful, dynamic canvas binding.
          </p>
        </div>

        <form onSubmit={handelSubmit} className="space-y-6 text-left">
          <div className="space-y-1">
            <label
              htmlFor="title"
              className="block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400"
            >
              Book Title
            </label>

            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              type="text"
              required
              placeholder="e.g. Meditations"
              className="w-full px-4.5 py-3.5 rounded-xl border border-ivory-border dark:border-[#2A201B] bg-white dark:bg-[#120E0B] text-walnut dark:text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-bronze"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <label
                htmlFor="author"
                className="block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400"
              >
                Author
              </label>

              <input
                name="author"
                value={formData.author}
                onChange={handleChange}
                type="text"
                required
                placeholder="e.g. Marcus Aurelius"
                className="w-full px-4.5 py-3.5 rounded-xl border border-ivory-border dark:border-[#2A201B] bg-white dark:bg-[#120E0B] text-walnut dark:text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-bronze"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="category"
                className="block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400"
              >
                Category / Genre
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full cursor-pointer rounded-xl border border-ivory-border bg-white px-4.5 py-3.5 text-sm text-walnut focus:outline-none focus:ring-1 focus:ring-bronze dark:border-[#2A201B] dark:bg-[#120E0B] dark:text-zinc-100"
              >
                <option value="Fiction">Fiction</option>
                <option value="Philosophy">Philosophy</option>
                <option value="History">History</option>
                <option value="Science & Tech">Science &amp; Tech</option>
                <option value="Art & Art">Art &amp; Design</option>
                <option value="Poetry">Poetry</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <label
                htmlFor="isbn"
                className="block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400"
              >
                ISBN Identifier
              </label>

              <input
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                type="text"
                required
                placeholder="e.g. 978-0140449334"
                className="w-full px-4.5 py-3.5 rounded-xl border border-ivory-border dark:border-[#2A201B] bg-white dark:bg-[#120E0B] text-walnut dark:text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-bronze"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="year"
                className="block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400"
              >
                Publication Year
              </label>

              <input
                name="publicationYear"
                value={formData.publicationYear}
                onChange={handleChange}
                type="number"
                required
                placeholder="e.g. 180"
                className="w-full px-4.5 py-3.5 rounded-xl border border-ivory-border dark:border-[#2A201B] bg-white dark:bg-[#120E0B] text-walnut dark:text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-bronze"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-1">
              <label
                htmlFor="cover"
                className="block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400"
              >
                Cover Image URL (Optional)
              </label>

              <input
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                type="url"
                placeholder="e.g. https://images.unsplash.com/..."
                className="w-full px-4.5 py-3.5 rounded-xl border border-ivory-border dark:border-[#2A201B] bg-white dark:bg-[#120E0B] text-walnut dark:text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-bronze"
              />

              <p className="text-[10px] leading-relaxed text-zinc-400">
                Provide a direct link to an image file. If left blank, a
                beautiful gold-embossed digital spine fallback is automatically
                rendered.
              </p>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="pages"
                className="block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400"
              >
                Page Count
              </label>

              <input
                name="pages"
                value={formData.pages}
                onChange={handleChange}
                type="number"
                required
                placeholder="e.g. 304"
                className="w-full px-4.5 py-3.5 rounded-xl border border-ivory-border dark:border-[#2A201B] bg-white dark:bg-[#120E0B] text-walnut dark:text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-bronze"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="description"
              className="block font-mono text-[11px] font-medium uppercase tracking-wider text-zinc-400"
            >
              Synopsis &amp; Curator&apos;s Notes
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              placeholder="Provide a comprehensive narrative overview, historical significance, themes, and descriptive remarks for this book..."
              className="w-full resize-y rounded-xl border border-ivory-border bg-white px-4.5 py-3.5 text-sm leading-relaxed text-walnut focus:outline-none focus:ring-1 focus:ring-bronze dark:border-[#2A201B] dark:bg-[#120E0B] dark:text-zinc-100"
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-4 border-t border-ivory-border pt-6 dark:border-[#2A201B]">
            <button
              onClick={() => router.push("/")}
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
              <span>Preserve to Vault</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
