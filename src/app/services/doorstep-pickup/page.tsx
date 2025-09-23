import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, CheckCircle, Clock, Shield, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

export const metadata = {
  title: 'Doorstep Delivery Service - Secure Document Pickup & Delivery | EZRTO',
  description: 'Premium doorstep pickup and delivery service for RTO documents. Secure handling of vehicle papers with tracking and insurance coverage.',
  keywords: 'doorstep delivery, document pickup, secure delivery, RTO document delivery, vehicle paper delivery',
};

export default function DoorstepDelivery() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  const benefits = [
    'Secure document pickup',
    'Insured transportation',
    'Real-time tracking',
    'Professional handling',
    'Contactless delivery',
    'Same-day service available'
  ];

  const process = [
    {
      step: '01',
      title: 'Schedule Pickup',
      description: 'Book convenient pickup time and location for your document collection'
    },
    {
      step: '02',
      title: 'Secure Collection',
      description: 'Our trained executive collects documents with proper verification and receipt'
    },
    {
      step: '03',
      title: 'Processing & Tracking',
      description: 'Documents processed at RTO with real-time updates and tracking information'
    },
    {
      step: '04',
      title: 'Safe Delivery',
      description: 'Completed documents delivered securely to your specified address'
    }
  ];

  return (
    <Fragment>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white py-20 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-sky-600/20 text-sky-300 rounded-full text-sm font-semibold mb-6">
              <Truck className="w-4 h-4 mr-2" />
              Premium Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Doorstep <span className="text-gradient">Delivery</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Premium pickup and delivery service for all your RTO documents. 
              Secure, tracked, and insured handling from your doorstep to completion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-gradient text-white px-8 py-4 text-lg"
              >
                Book Pickup Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-sky-400 text-sky-400 hover:bg-white/10 px-8 py-4 text-lg"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Premium Delivery Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the convenience of professional document handling with complete security and tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              How Our Delivery Service Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From pickup to delivery, every step is handled with professional care and complete transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {process.map((step, index) => (
              <Card key={index} className="text-center border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gradient">{step.step}</span>
                  </div>
                  <CardTitle className="text-xl text-slate-800">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-slate-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Experience Premium Convenience
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Skip the RTO visits and paperwork hassles. Let us handle everything from your doorstep.
            </p>
            <div className="flex items-center justify-center space-x-8 mb-8 text-sm text-slate-500">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                4.9/5 Rating
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                Fully Insured
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-blue-500 mr-2" />
                Real-time Tracking
              </div>
            </div>
            <Button
              size="lg"
              className="btn-gradient text-white px-8 py-4 text-lg"
            >
              Book Premium Service
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}