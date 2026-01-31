"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800">
      <div className="font-bold text-lg">Nexora Studio</div>
      <ul className={`flex space-x-4 ${open ? "block" : "hidden"} md:flex`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <button className="md:hidden" onClick={() => setOpen(!open)}>Menu</button>
    </nav>
  );
}
