'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield,
  FileText,
  CheckCircle,
  Users,
  FileX, 
  Copy, 
  MapPin, 
  FileCheck, 
  ArrowRightLeft, 
  Truck,
  ArrowRight,
  Clock,
  Star,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { ServiceLists } from '@/util/ServiceLists';
import ServiceCard from './ServiceCard';

export default function Services() {
  

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
          {ServiceLists.map((service, index) => (
            <ServiceCard service={service} index={index} key={index}/>
          ))}
        </div>
        <div>
          <Link href={"/services"}>View all </Link>
        </div>
        
      </div>
    </section>
  );
}
