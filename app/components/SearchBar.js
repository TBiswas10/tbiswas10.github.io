"use client";
import { useState } from "react";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <div
        className={`relative flex items-center transition-all duration-300 rounded-full ${
          isFocused
            ? "ring-2 ring-blue-500 ring-opacity-50 shadow-lg"
            : "shadow-md hover:shadow-lg"
        }`}
      >
        <div className="absolute left-4 text-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full md:w-80 pl-12 pr-4 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-full border border-gray-200 dark:border-slate-600 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300"
        />
        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
