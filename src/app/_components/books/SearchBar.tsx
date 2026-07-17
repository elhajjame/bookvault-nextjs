"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search books...",
}: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ivory-border bg-white py-3 pl-11 pr-4 text-sm text-walnut shadow-sm outline-none transition-all duration-300 placeholder:text-zinc-400 focus:border-bronze focus:ring-2 focus:ring-bronze/20 dark:border-[#2A201B] dark:bg-[#1C1612] dark:text-ivory-card dark:placeholder:text-zinc-500 dark:focus:border-gold dark:focus:ring-gold/20"
      />
    </div>
  );
}