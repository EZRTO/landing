import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRightLeft, CheckCircle, Clock, FileText, ArrowRight, Star } from 'lucide-react';

export const metadata = {
  title: 'Ownership Transfer - Vehicle RC Transfer Service | EZRTO',
  description: 'Complete vehicle ownership transfer service. Handle RC transfer for buying/selling vehicles. Expert assistance for smooth ownership change process.',
  keywords: 'ownership transfer, vehicle transfer, RC transfer, vehicle sale transfer, buying vehicle transfer, RTO transfer services',
};

export default function OwnershipTransfer() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  const benefits = [
    'Buyer-seller coordination',
    'Complete documentation',
    'RTO transfer processing',
    'Legal compliance check',
    'New RC issuance',
    '15-day completion'
  ];

  const process = [
    {
      step: '01',
      title: 'Document Verification',
      description: 'Verify all buyer and seller documents, NOC, and vehicle papers for transfer'
    },
    {
      step: '02',
      title: 'Transfer Application',
      description: 'Submit ownership transfer application to RTO with all required documentation'
    },
    {
      step: '03',
      title: 'RTO Processing',
      description: 'RTO verifies documents, processes transfer, and updates registration records'
    },
    {
      step: '04',
      title: 'New RC Delivery',
      description: 'Deliver new RC with updated ownership details to the new vehicle owner'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white py-20 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-sky-600/20 text-sky-300 rounded-full text-sm font-semibold mb-6">
              <ArrowRightLeft className="w-4 h-4 mr-2" />
              Complete Transfer Solution
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ownership <span className="text-sky-400">Transfer</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Buying or selling a vehicle? We handle the complete RC ownership 
              transfer process with expert documentation and RTO coordination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 text-lg"
              >
                Start Transfer Process
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
              Complete Transfer Management
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From documentation to delivery, we manage every aspect of vehicle ownership transfer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-indigo-600" />
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
              Transfer Process Steps
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our systematic approach ensures smooth ownership transfer with all legal requirements met.
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
              Ready for Smooth Transfer?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Make your vehicle buying or selling process hassle-free with our expert transfer service.
            </p>
            <div className="flex items-center justify-center space-x-8 mb-8 text-sm text-slate-500">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                4.9/5 Rating
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-green-500 mr-2" />
                15-Day Process
              </div>
              <div className="flex items-center">
                <ArrowRightLeft className="w-4 h-4 text-blue-500 mr-2" />
                Complete Solution
              </div>
            </div>
            <Button
              size="lg"
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 text-lg"
            >
              Start Ownership Transfer
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}