'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const services = [
  'RC Transfer',
  'NOC Assistance',
  'Address Change',
  'Vehicle Registration',
  'Permit Assistance',
  'Insurance Renewal',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [serviceIndex, setServiceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
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

  const scrollToSection = (id: any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg"
          alt="Vehicles and roads background"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="absolute top-0 left-0 object-cover filter blur-xl scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/60 via-slate-900/50 to-sky-800/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[100vh] px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl w-full">

          {/* LEFT - Headline and CTA */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg mb-4">
              Simplifying <span className="text-sky-300">RTO Services</span><br />
              For Your Vehicle
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-lg mx-auto lg:mx-0 mb-8">
              From RC transfers to insurance renewals — we handle all your vehicle documentation quickly and hassle-free, right at your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-white px-6 sm:px-8 py-3 rounded-xl shadow-lg transition-transform hover:scale-105 text-sm sm:text-base"
              >
                Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('services')}
                className="border-sky-400 text-sky-400 hover:bg-white/20 px-6 sm:px-8 py-3 rounded-xl shadow-lg transition-transform hover:scale-105 text-sm sm:text-base"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* RIGHT - Typewriter Card */}
          <div className="text-center lg:text-left">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl max-w-md mx-auto lg:mx-0">
              <p className="text-lg sm:text-xl text-white/90 font-medium mb-3">
                We Specialize In:
              </p>
              <div className="h-14 sm:h-16 flex items-center justify-center lg:justify-start">
                <p className="text-xl sm:text-2xl md:text-3xl text-sky-300 font-semibold tracking-wide">
                  {text}
                  <span className="blinking-cursor text-sky-400">|</span>
                </p>
              </div>
              <p className="text-sm sm:text-base text-white/80 mt-4">
                Get reliable and professional RTO services tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute bottom-5 w-full px-4">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-white/90 max-w-4xl mx-auto">
          {[
            '✓ 10,000+ Vehicles Processed',
            '✓ 100% Success Rate',
            '✓ Trusted by Vehicle Owners',
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs sm:text-sm font-semibold"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Blinking cursor animation */}
      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
