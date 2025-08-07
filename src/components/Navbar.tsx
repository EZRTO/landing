"use client";
import { IconPhone } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm border-b border-secondary-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
                <Link href="/" className="flex items-center">
                    <div className="flex-shrink-0">
                        <svg className="h-8 w-8 text-primary" viewBox="0 0 32 32" fill="currentColor">
                            <path d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 2.5L25.5 9 16 13.5 6.5 9 16 4.5zM6 10.5l9 4.5v11l-9-4.5v-11zm11 15.5v-11l9-4.5v11l-9 4.5z"/>
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h1 className="text-xl font-bold text-primary">RCEase</h1>
                    </div>
                </Link>
                  <div className="hidden md:block">
                    <div className="ml-10 flex justify-between items-baseline space-x-4">                        
                        <Link href="tel:919876543210"
                            className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-md font-semibold shadow hover:bg-primary-700 gap-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
                        >
                            <IconPhone />
                            Call Now
                        </Link>
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
    </nav>
  );
} 