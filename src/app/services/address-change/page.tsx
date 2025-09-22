import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, CheckCircle, Clock, FileText, ArrowRight, Star } from 'lucide-react';

export const metadata = {
  title: 'Address Change on RC - Vehicle Registration Address Update | EZRTO',
  description: 'Update address on vehicle RC. Professional address change service for vehicle registration. Interstate transfers and local address updates handled.',
  keywords: 'address change RC, vehicle registration address update, RC address modification, interstate vehicle transfer',
};

export default function AddressChange() {
  // const scrollToContact = () => {
  //   const contactSection = document.getElementById('contact');
  //   if (contactSection) {
  //     contactSection.scrollIntoView({ behavior: 'smooth' });
  //   } else {
  //     window.location.href = '/#contact';
  //   }
  // };

  const benefits = [
    'Local address updates',
    'Interstate transfers handled',
    'State RTO coordination',
    'Address proof verification',
    'Updated RC delivery',
    '12-day completion'
  ];

  const process = [
    {
      step: '01',
      title: 'Document Collection',
      description: 'Gather address proof, RC copy, and other required documents for address change'
    },
    {
      step: '02',
      title: 'RTO Application',
      description: 'Submit address change application to the appropriate RTO office with all documents'
    },
    {
      step: '03',
      title: 'Verification Process',
      description: 'RTO verifies your new address and processes the registration update'
    },
    {
      step: '04',
      title: 'Updated RC Delivery',
      description: 'Receive your RC with updated address information at your new location'
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
              <MapPin className="w-4 h-4 mr-2" />
              Interstate Transfers Available
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Address Change <span className="text-gradient-primary">on RC</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Moved to a new location? Update your vehicle registration address 
              with our expert assistance. Local and interstate transfers handled.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-gradient px-8 py-4 text-lg"
              >
                Update Address Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-sky-400 btn-gradient px-8 py-4 text-lg"
              
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
              Complete Address Change Solution
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Whether moving within the city or to another state, we handle all address change requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
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
              Address Change Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We handle all the paperwork and RTO coordination to update your vehicle registration address.
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
              Ready to Update Your Address?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Keep your vehicle registration current with your new address. We handle everything for you.
            </p>
            <div className="flex items-center justify-center space-x-8 mb-8 text-sm text-slate-500">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                4.9/5 Rating
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-green-500 mr-2" />
                12-Day Process
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-blue-500 mr-2" />
                All States Covered
              </div>
            </div>
            <Button
              size="lg"
              className="btn-gradient text-white px-8 py-4 text-lg"
            >
              Start Address Change
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}