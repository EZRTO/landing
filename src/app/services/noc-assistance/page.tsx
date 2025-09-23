import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileCheck, CheckCircle, Clock, FileText, ArrowRight, Star } from 'lucide-react';
import { Fragment } from 'react';

export const metadata = {
  title: 'NOC Assistance - No Objection Certificate for Vehicle Transfer | EZRTO',
  description: 'Get NOC from bank for vehicle sale or transfer. Expert assistance for No Objection Certificate processing. Fast bank coordination and RTO procedures.',
  keywords: 'NOC assistance, no objection certificate, vehicle NOC, bank NOC, vehicle transfer NOC, RTO NOC services',
};

export default function NOCAssistance() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  const benefits = [
    'Bank NOC coordination',
    'RTO NOC processing',
    'Interstate transfer NOC',
    'Loan clearance verification',
    'Document authentication',
    '8-day completion'
  ];

  const process = [
    {
      step: '01',
      title: 'Loan Status Verification',
      description: 'Verify loan clearance status and gather required documents from bank and RTO'
    },
    {
      step: '02',
      title: 'NOC Application',
      description: 'Submit NOC application to bank and coordinate with RTO for processing'
    },
    {
      step: '03',
      title: 'Bank Approval',
      description: 'Bank reviews and approves NOC after verifying loan clearance and documentation'
    },
    {
      step: '04',
      title: 'NOC Delivery',
      description: 'Receive authenticated NOC certificate ready for vehicle transfer or sale'
    }
  ];

  return (
    <Fragment>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white py-20 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-sky-600/20 text-sky-300 rounded-full text-sm font-semibold mb-6">
              <FileCheck className="w-4 h-4 mr-2" />
              Bank Coordination Included
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              NOC <span className="text-sky-400">Assistance</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Need a No Objection Certificate for vehicle transfer or sale? 
              We handle all bank coordination and RTO procedures for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 text-lg"
              >
                Get NOC Now
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
              Complete NOC Solution
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From bank coordination to RTO processing, we handle all aspects of NOC procurement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
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
              NOC Processing Steps
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our expert team coordinates with banks and RTO offices to get your NOC quickly and efficiently.
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
              Need Your NOC Fast?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Don&apos;t let NOC delays hold up your vehicle transfer. Get expert assistance today.
            </p>
            <div className="flex items-center justify-center space-x-8 mb-8 text-sm text-slate-500">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                4.9/5 Rating
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-green-500 mr-2" />
                8-Day Processing
              </div>
              <div className="flex items-center">
                <FileCheck className="w-4 h-4 text-blue-500 mr-2" />
                Bank Coordination
              </div>
            </div>
            <Button
              size="lg"
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 text-lg"
            >
              Start NOC Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}