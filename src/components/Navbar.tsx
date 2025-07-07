"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "https://wa.me/919876543210", label: "Call Now" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm border-b border-secondary-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <svg className="h-8 w-8 text-primary" viewBox="0 0 32 32" fill="currentColor">
                            <path d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 2.5L25.5 9 16 13.5 6.5 9 16 4.5zM6 10.5l9 4.5v11l-9-4.5v-11zm11 15.5v-11l9-4.5v11l-9 4.5z"/>
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h1 className="text-xl font-bold text-primary">RCEase</h1>
                    </div>
                </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-secondary-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">{link.label}</Link>
                        ))}
                    </div>
                </div>
                <div className="md:hidden">
                    <button type="button" className="text-secondary-600 hover:text-primary p-2" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden bg-white border-t border-secondary-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-secondary-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">{link.label}</Link>
                ))}
            </div>
        </div>
    </nav>
  );
} 