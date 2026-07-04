import { useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  buttonLabel?: string;
  onSearch: (value: string) => void;
  light?: boolean;
}

export default function SearchBar({
  placeholder = "Enter ZIP code",
  buttonLabel = "Search",
  onSearch,
  light = false,
}: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) onSearch(value.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className={`w-full pl-10 pr-4 py-3 text-base font-sans border-0 outline-none ${
            light
              ? "bg-white text-gray-900 placeholder-gray-400"
              : "bg-white/10 text-white placeholder-white/60 border border-white/30 focus:border-white"
          }`}
        />
      </div>
      <button
        type="submit"
        className="bg-[var(--gaf-red)] hover:bg-[var(--gaf-red-dark)] text-white font-semibold px-6 py-3 text-sm transition-colors whitespace-nowrap font-sans"
      >
        {buttonLabel}
      </button>
    </form>
  );
}
