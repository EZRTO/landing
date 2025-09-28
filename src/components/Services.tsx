'use client';

import { 
  ArrowRight} from 'lucide-react';
import Link from 'next/link';
import { ServiceLists } from '@/util/ServiceLists';
import ServiceCard from './ServiceCard';

export default function Services() {
  const popularIndex = ServiceLists.findIndex(s => s.popular);
  const randomIndex = ServiceLists.findIndex(s => s.popular === false);


  const popularService = popularIndex !== -1 ? ServiceLists[popularIndex] : ServiceLists[0];
  const nonPopularServices = ServiceLists.filter((_, idx) => idx !== popularIndex);
  const randomServices = nonPopularServices.sort(() => Math.random() - 0.5).slice(0, 2);
  const displayServices = [randomServices[0], popularService, randomServices[1]];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Expert RTO Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive RTO solutions designed to save your time and ensure compliance with all legal requirements. 
            <span className="text-blue-600 font-semibold"> Fast, reliable, and hassle-free.</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <ServiceCard service={service} index={index} key={index}/>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href={"/services"} className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}
