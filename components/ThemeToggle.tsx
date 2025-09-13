"use client";

export default function ThemeToggle() {
  // simple client-side toggle with localStorage
  return (
    <button
      className="px-2 py-1 rounded border border-gray-300 dark:border-gray-700 text-xs hover:bg-gray-50 dark:hover:bg-gray-900"
      onClick={() => {
        const root = document.documentElement;
        const isDark = root.classList.contains("dark");
        if (isDark) {
          root.classList.remove("dark");
          localStorage.setItem("theme", "light");
        } else {
          root.classList.add("dark");
          localStorage.setItem("theme", "dark");
        }
      }}
      aria-live="polite"
      aria-label="Toggle theme"
    >
      🌓
    </button>
  );
}
