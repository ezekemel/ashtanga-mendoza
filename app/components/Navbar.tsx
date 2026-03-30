"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#practica", label: "Práctica" },
    { href: "#espacio", label: "Espacio" },
    { href: "#experiencias", label: "Experiencias" },
    { href: "#planes", label: "Planes" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-400 ${
        scrolled
          ? "bg-cream/97 shadow-[0_1px_20px_rgba(0,0,0,0.06)] py-3 px-8"
          : "bg-transparent py-4 px-8"
      }`}
    >
      <Link
        href="#"
        className={`font-serif text-xl font-medium tracking-wide no-underline transition-colors duration-400 ${
          scrolled ? "text-charcoal" : "text-white"
        }`}
      >
        Ashtanga Mendoza
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`text-[0.82rem] uppercase tracking-[0.08em] font-normal no-underline transition-colors duration-300 hover:text-gold ${
              scrolled ? "text-warm-gray" : "text-white/90"
            }`}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contacto"
          className="bg-gold text-white text-[0.78rem] uppercase tracking-[0.1em] px-5 py-2 rounded-sm no-underline hover:bg-gold-light transition-colors"
        >
          Comenzar
        </a>
      </div>

      {/* Hamburger */}
      <button
        className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menú"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`block w-6 h-0.5 transition-colors duration-400 ${
              scrolled ? "bg-charcoal" : "bg-white"
            }`}
          />
        ))}
      </button>

      {/* Mobile menu */}
      <div
        className={`fixed md:hidden top-0 ${
          menuOpen ? "right-0" : "-right-full"
        } w-3/4 h-screen bg-cream flex flex-col items-center justify-center gap-8 transition-[right] duration-400 shadow-[-4px_0_30px_rgba(0,0,0,0.1)]`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="text-charcoal text-[0.9rem] uppercase tracking-[0.08em] no-underline"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contacto"
          onClick={() => setMenuOpen(false)}
          className="bg-gold text-white text-[0.78rem] uppercase tracking-[0.1em] px-5 py-2 rounded-sm no-underline"
        >
          Comenzar
        </a>
      </div>
    </nav>
  );
}
