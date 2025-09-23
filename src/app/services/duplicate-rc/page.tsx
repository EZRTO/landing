import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, CheckCircle, Clock, FileText, ArrowRight, Star } from 'lucide-react';
import { Fragment } from 'react';

export const metadata = {
  title: 'Duplicate RC Issuance - Lost RC Replacement Service | EZRTO',
  description: 'Get duplicate RC if original is lost, damaged or stolen. Fast RC replacement service with doorstep delivery. Expert handling of all RTO procedures.',
  keywords: 'duplicate RC, lost RC replacement, RC reissue, vehicle registration copy, RTO duplicate services',
};

export default function DuplicateRC() {
  
  const benefits = [
    'Lost RC replacement service',
    'Damaged RC reissue',
    'Stolen RC documentation',
    'Official RTO processing',
    'Secure doorstep delivery',
    'Fast 7-day completion'
  ];

  const process = [
    {
      step: '01',
      title: 'Report & Documentation',
      description: 'File police complaint (if stolen) and gather required documents for RC reissue'
    },
    {
      step: '02',
      title: 'Application Processing',
      description: 'We prepare and submit your duplicate RC application to the RTO office'
    },
    {
      step: '03',
      title: 'Verification & Approval',
      description: 'RTO verifies your documents and approves the duplicate RC issuance'
    },
    {
      step: '04',
      title: 'RC Delivery',
      description: 'Receive your new duplicate RC with all original details at your doorstep'
    }
  ];

  return (
    <Fragment>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white py-20 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-sky-600/20 text-sky-300 rounded-full text-sm font-semibold mb-6">
              <Copy className="w-4 h-4 mr-2" />
              Emergency Service Available
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Duplicate <span className="text-sky-400">RC Issuance</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Lost, damaged, or stolen RC? Get a duplicate registration certificate 
              quickly with our expert RTO assistance and doorstep delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 text-lg"
              >
                Get Duplicate RC
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-sky-400 text-sky-400 hover:bg-white/10 px-8 py-4 text-lg"
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Complete Duplicate RC Solution
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether lost, damaged, or stolen, we handle all types of RC replacement with expert care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
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
              How We Process Your Duplicate RC
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our streamlined process ensures you get your duplicate RC without any hassle or RTO visits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {process.map((step, index) => (
              <Card key={index} className="text-center border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-sky-600">{step.step}</span>
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
              Need Your Duplicate RC Fast?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Don&apos;t let a lost RC stop you. Get your duplicate registration certificate in just 7 days.
            </p>
            <div className="flex items-center justify-center space-x-8 mb-8 text-sm text-slate-500">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                4.9/5 Rating
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-green-500 mr-2" />
                7-Day Delivery
              </div>
              <div className="flex items-center">
                <FileText className="w-4 h-4 text-blue-500 mr-2" />
                All Cases Handled
              </div>
            </div>
            <Button
              size="lg"
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 text-lg"
            >
              Start Duplicate RC Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}