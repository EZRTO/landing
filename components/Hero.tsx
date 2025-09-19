'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const services = [
  'RC Transfer',
  'NOC Assistance',
  'Address Change',
  'Vehicle Registration',
  'Permit Assistance',
  'Vehicle Insurance Renewal',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [serviceIndex, setServiceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentService = services[serviceIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text.length < currentService.length) {
      timeout = setTimeout(
        () => setText(currentService.slice(0, text.length + 1)),
        150
      );
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(currentService.slice(0, text.length - 1)),
        100
      );
    } else if (!isDeleting && text.length === currentService.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setServiceIndex((prev) => (prev + 1) % services.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, serviceIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* Background Image */}
      {/* Main Hero Section */}
      <div className="relative h-screen w-full">
        <img
          src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg"
          alt="Hero background"
          className="absolute top-0 left-0 w-full h-full object-cover filter blur-xl scale-105"
        />
        {/* Overlay Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-800/40 via-slate-900/30 to-sky-700/30"></div>

        {/* Optional floating shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-32 -left-32 w-72 h-72 bg-sky-400 rounded-full opacity-20 animate-pulse mix-blend-multiply"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400 rounded-full opacity-15 animate-pulse mix-blend-multiply"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg">
            <span className="text-sky-300">EASY RTO</span> Made Simple
          </h1>
          <p className="mt-6 text-2xl md:text-3xl text-white/90 font-semibold drop-shadow-md">
            From <span className="text-sky-400">{text}</span>
            <span className="blinking-cursor text-sky-300">|</span> to
            hassle-free vehicle services
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 shadow-lg transition-transform hover:scale-105"
            >
              Get Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById('services')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="border-sky-400 text-sky-400 hover:bg-white/20 px-8 py-3 shadow-lg transition-transform hover:scale-105"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>

      {/* Blinking cursor animation */}
      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
