import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Users, 
  Clock, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Zap,
  Award,
  HeadphonesIcon,
  TruckIcon,
  FileTextIcon,
  MapPinIcon
} from 'lucide-react';
import { ServiceLists } from '@/util/ServiceLists';
import { Fragment } from 'react';

export const metadata = {
  title: 'All RTO Services - Complete Vehicle Documentation Solutions | EZRTO',
  description: 'Browse all our professional RTO services including hypothecation termination, duplicate RC, address change, NOC assistance, ownership transfer and doorstep delivery.',
  keywords: 'RTO services, vehicle documentation, hypothecation termination, duplicate RC, address change, NOC assistance, ownership transfer, doorstep delivery',
};

export default function ServicesPage() {
  
  const stats = [
    {
      icon: Users,
      number: '15,000+',
      label: 'Happy Customers',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: CheckCircle,
      number: '100%',
      label: 'Success Rate',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Clock,
      number: '7-15',
      label: 'Days Average',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Award,
      number: '4.9/5',
      label: 'Customer Rating',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Secure Processing',
      description: 'Your documents are handled with bank-level security and complete confidentiality.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Quick processing with most services completed within 7-15 business days.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you throughout the process.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: TruckIcon,
      title: 'Doorstep Service',
      description: 'Document pickup and delivery right to your doorstep for maximum convenience.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: FileTextIcon,
      title: 'Expert Documentation',
      description: 'Professional handling of all paperwork with zero errors and full compliance.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: MapPinIcon,
      title: 'Pan-India Service',
      description: 'Available across all major cities and states with local RTO expertise.',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Submit Request',
      description: 'Fill out our simple form and upload required documents securely online.'
    },
    {
      step: '02',
      title: 'Document Review',
      description: 'Our experts review your documents and coordinate with relevant authorities.'
    },
    {
      step: '03',
      title: 'Processing',
      description: 'We handle all RTO procedures and keep you updated with real-time progress.'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Receive your completed documents via secure doorstep delivery service.'
    }
  ];

  return (
    <Fragment>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white py-16 sm:py-20 lg:py-24 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-sky-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-sky-600/20 text-sky-300 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Professional RTO Services
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Complete <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">RTO Solutions</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Professional vehicle documentation services with expert handling, 
              doorstep delivery, and guaranteed results across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-sky-400 text-sky-400 hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Browse Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                <CardContent className="p-4 sm:p-6">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                    <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose EZRTO */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EZRTO?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Experience the difference with India&apos;s most trusted RTO service provider. 
              Professional, secure, and hassle-free solutions for all your vehicle documentation needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                <CardContent className="p-6 sm:p-8">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${benefit.bgColor} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg mb-4 sm:mb-6 text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2">
              Complete Service Portfolio
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RTO Services</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              From hypothecation termination to doorstep delivery, we provide comprehensive 
              RTO solutions with expert handling and guaranteed results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {ServiceLists.map((service, index) => (
              <ServiceCard service={service} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              How It <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Our streamlined 4-step process makes getting your RTO services completed simple and stress-free.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-16 left-1/8 right-1/8 h-0.5 bg-gradient-to-r from-sky-200 via-sky-300 to-sky-200"></div>
            
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white relative z-10">
                <CardContent className="p-6 sm:p-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                    <span className="text-lg sm:text-xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-sky-50 to-slate-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 sm:mb-6">
              Ready to Get <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Started?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Join thousands of satisfied customers who trust EZRTO for their vehicle documentation needs. 
              Professional service, guaranteed results, and complete peace of mind.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8 text-xs sm:text-sm text-slate-500">
              <div className="flex items-center bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 mr-2" />
                4.9/5 Rating
              </div>
              <div className="flex items-center bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2" />
                100% Success Rate
              </div>
              <div className="flex items-center bg-white px-3 sm:px-4 py-2 rounded-full shadow-sm">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-2" />
                Fast Processing
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Call Now: +1 (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
