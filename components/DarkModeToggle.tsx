"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark";
    if (stored) setTheme(stored);
    else if (window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme("dark");
  }, []);

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button onClick={toggle} className="p-2 rounded bg-gray-200 dark:bg-gray-800">
      {theme === "light" ? "🌞" : "🌜"}
    </button>
  );
}
