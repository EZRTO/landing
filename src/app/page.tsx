'use client';

import { Fragment, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        // Delay slightly to ensure layout is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <Fragment>
      <Hero />
      <Process />
      <Services />
      <HowItWorks />
      <Contact />
    </Fragment>
  );
}
