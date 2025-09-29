'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceLists } from '@/util/ServiceLists';

export default function Hero() {
  const [text, setText] = useState('');
  const [serviceIndex, setServiceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const services = ServiceLists.map(service => service.title);

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
      <div className="absolute inset-0">
        <Image
          src="hero_bg.webp"
          alt="Vehicles and roads background"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="absolute top-0 left-0 object-cover filter blur-xl scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/60 via-slate-900/50 to-sky-800/40" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-[100vh] px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl w-full">

          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
              Simplifying <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RTO Services</span><br />
              <span className="text-white/90">Consultancy</span>
              <br />
              For Your Vehicle
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-lg mx-auto lg:mx-0 mb-8">
              From RC transfers to insurance renewals — we handle all your vehicle documentation quickly and hassle-free, right at your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 rounded-xl shadow-lg transition-transform hover:scale-105 text-sm sm:text-base"
              >
                Free Consultation
              </Button>
              <Link href={"services"}>
                <Button variant="outline" size="lg"
                  className="border-sky-400 text-sky-400 hover:bg-white/20 px-6 sm:px-8 py-3 rounded-xl shadow-lg transition-transform hover:scale-105 text-sm sm:text-base"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <div className=" p-6 sm:p-8   max-w-md mx-auto lg:mx-0">
              <p className="text-lg sm:text-xl text-white/90 font-medium mb-3">
                We Specialize In:
              </p>
              <div className="h-14 sm:h-16 flex items-center justify-center lg:justify-start">
                <p className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold tracking-wide">
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
