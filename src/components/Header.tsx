'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X, FileText } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);

    if (pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  const list = [
    { name: 'Home', url: 'home' },
    { name: 'Process', url: 'process' },
    { name: 'Services', url: 'services' },
    { name: 'How It Works', url: 'how-it-works' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <FileText className="h-8 w-8 text-sky-700" />
          <span className="text-xl font-bold text-slate-800">EZRTO</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {list.map((item, index) => (
            <button key={index}
              onClick={() => scrollToSection(item.url)}
              className="text-slate-600 hover:text-sky-700 transition-colors"
            >
              {item.name}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-sky-700 hover:bg-sky-800 text-white"
          >
            Free Consultation
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {list.map((item, index) => (
              <button
                onClick={() => scrollToSection(item.url)}
                className="text-slate-600 hover:text-sky-700 transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-sky-700 hover:bg-sky-800 text-white w-full"
            >
              Free Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
