import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, CheckCircle, Clock, FileText, ArrowRight, Star, AlertCircle } from 'lucide-react';
import { Fragment } from 'react';

export const metadata = {
  title: 'Hypothecation Termination Services - Remove Loan Mark from RC | EZRTO',
  description: 'Professional hypothecation termination services. Remove loan records from your vehicle RC after loan clearance. Fast, hassle-free process with doorstep delivery.',
  keywords: 'hypothecation termination, remove loan mark, RC loan clearance, vehicle loan termination, RTO services',
};

export default function HypothecationTermination() {
  
  const benefits = [
    "Complete ownership of your vehicle",
    "No bank liability on your RC",
    "Easy vehicle sale or transfer",
    'Original RC endorsement',
    "Clear documentation for insurance",
    "Freedom from loan-related restrictions"
  ];

  const documents = [
    "Original RC book",
    "Loan closure certificate from bank",
    "NOC from financing bank",
    "Identity proof",
    "Address proof",
    "Passport size photographs"
  ];

  const process = [
    {
      step: '01',
      title: 'Document Submission',
      description: 'Upload loan clearance certificate and RC copy through our secure portal'
    },
    {
      step: '02',
      title: 'Bank Coordination',
      description: 'We coordinate with your bank and RTO office for endorsement processing'
    },
    {
      step: '03',
      title: 'RC Endorsement',
      description: 'Official removal of hypothecation mark from your vehicle registration'
    },
    {
      step: '04',
      title: 'Home Delivery',
      description: 'Receive your updated RC with loan mark removed at your doorstep'
    }
  ];

  return (
    <Fragment>
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white py-20 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-sky-600/20 text-sky-300 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Most Popular Service
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hypothecation <span className="text-sky-400">Termination</span> Consultancy
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Remove loan records from your vehicle RC after loan clearance. 
              Get clear ownership documentation with our expert assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 text-lg"
              >
                Start Process Now
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
              Why Choose Our Hypothecation Termination Service?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional handling of all documentation and coordination with banks and RTO offices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
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
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We handle everything from documentation to delivery, making the process completely hassle-free.
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

      {/* Documents Required Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Documents Required</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700 font-medium">{doc}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <p className="text-blue-800 font-medium">
                <strong>Pro Tip:</strong> Ensure all documents are clear and legible. 
                We can help you verify document requirements before submission.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Benefits of Hypothecation Termination</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-green-800">Complete Vehicle Ownership</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Important Note</h3>
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-700 mb-4">
                    Hypothecation termination is mandatory after loan closure to ensure 
                    complete ownership transfer and avoid future complications.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Without proper termination, you may face issues during vehicle sale, 
                    transfer, or insurance claims.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-slate-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Ready to Remove Your Loan Mark?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Join thousands of vehicle owners who have successfully cleared their RC with our expert service.
            </p>
            <div className="flex items-center justify-center space-x-8 mb-8 text-sm text-slate-500">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 mr-2" />
                4.9/5 Rating
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-green-500 mr-2" />
                10-Day Completion
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-blue-500 mr-2" />
                100% Success Rate
              </div>
            </div>
            <Button
              size="lg"
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 text-lg"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}