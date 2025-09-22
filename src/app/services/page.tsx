import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { ServiceLists } from '@/util/ServiceLists';
import Header from '@/components/Header';
import ServiceCard from '@/components/ServiceCard';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "RTO Services | EZRTO - Professional Vehicle Documentation Services",
  description: "Explore professional RTO services like Hypothecation Termination, Duplicate RC, Address Change, NOC Assistance, Ownership Transfer, and Doorstep Pickup & Delivery.",
  keywords: [
    'easy rto',
    'ezrto',
    'rto service',
    'hypothecation termination',
    'hypothecation removal',
    'duplicate RC',
    'NOC',
    'ownership transfer',
    'address change',
    'doorstep pickup',
  ],
};

const benefits = [
  '100% Legal Compliance',
  'Expert Documentation Support',
  'Fast Processing Times',
  'Doorstep Service Available',
  'Transparent Pricing',
  '24/7 Customer Support'
];

export default function ServicesPage() {
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              Professional RTO Services
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Complete RTO Solutions
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              EZRTO provides professional vehicle documentation services with doorstep delivery 
              for all your RTO needs. Fast, reliable, and hassle-free.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3"
                
                
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3"
               
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose EZRTO?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We make RTO processes simple, fast, and stress-free with our expert team and comprehensive services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors">
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="font-medium text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services-grid" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Expert Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive RTO solutions designed to save your time and ensure compliance with all legal requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ServiceLists.map((service, index) => (
              <ServiceCard service={service} index={index} key={index}/>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Don&apos;t let RTO paperwork stress you out. Our expert team is here to handle everything for you, 
              from document preparation to doorstep delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 text-lg"
              >
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
