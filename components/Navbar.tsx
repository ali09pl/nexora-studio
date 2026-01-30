import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 glass px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">Nexora Studio</Link>
      <button onClick={() => setOpen(!open)} className="md:hidden"><Menu /></button>
      <div className={`md:flex gap-6 ${open ? "block" : "hidden"}`}>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
