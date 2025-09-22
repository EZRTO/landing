import type { Metadata } from "next";
import Link from "next/link";
import { Shield, CheckCircle, Clock, FileText, AlertCircle, Users, ArrowRight, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hypothecation Termination | EZRTO - Remove Loan Records from RC",
  description: "Remove loan records from your vehicle RC after the loan is paid off. Get clear ownership documentation with our expert hypothecation termination service.",
  keywords: "hypothecation termination, hypothecation removal, RC hypothecation, vehicle loan clearance, RTO hypothecation",
  alternates: {
    canonical: "https://ezrto.in/services/hypothecation-termination",
  },
};

const features = [
  {
    icon: Shield,
    title: "Loan Clearance Documentation",
    description: "Complete documentation for loan closure and hypothecation removal"
  },
  {
    icon: FileText,
    title: "RC Endorsement", 
    description: "Official RC endorsement removing hypothecation details"
  },
  {
    icon: CheckCircle,
    title: "Legal Compliance",
    description: "Full compliance with RTO regulations and legal requirements"
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Quick processing to get your clear RC without delays"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Document Verification",
    description: "Submit loan closure certificate and required documents"
  },
  {
    step: "2", 
    title: "Application Processing",
    description: "We handle all RTO formalities and paperwork"
  },
  {
    step: "3",
    title: "RC Update",
    description: "RTO removes hypothecation details from your RC"
  },
  {
    step: "4",
    title: "Clear RC Delivery",
    description: "Receive your hypothecation-free RC at your doorstep"
  }
];

const benefits = [
  "Complete ownership of your vehicle",
  "No bank liability on your RC",
  "Easy vehicle sale or transfer",
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

export default function HypothecationTerminationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="text-center mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
            <Shield className="w-10 h-10 text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Hypothecation Termination Service
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Remove loan records from your vehicle RC after the loan is paid off. 
          Get clear ownership documentation with our expert hypothecation 
          termination service and enjoy complete vehicle ownership.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Hypothecation Termination Service?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">
                {step.step}
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 -z-10"></div>
              )}
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12">
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
      </section>

      {/* Documents Required Section */}
      <section className="mb-20">
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
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              "EZRTO made the hypothecation termination process so easy. 
              I got my clear RC within a week without any hassle."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold">Rajesh Kumar</p>
                <p className="text-sm text-gray-500">Mumbai</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              "Professional service with doorstep delivery. 
              They handled all the paperwork and kept me updated throughout."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold">Priya Sharma</p>
                <p className="text-sm text-gray-500">Delhi</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
              "Excellent service! They explained everything clearly and 
              made sure I understood each step of the process."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold">Amit Patel</p>
                <p className="text-sm text-gray-500">Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 rounded-2xl mb-16">
        <h2 className="text-4xl font-bold mb-6">Ready to Remove Hypothecation?</h2>
        <p className="text-xl mb-8 opacity-90">
          Get your clear RC and complete vehicle ownership today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center"
          >
            Start Process Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
            Call Us Now
          </button>
        </div>
      </section>

      {/* Related Services */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/services/ownership-transfer" className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">Ownership Transfer</h3>
            <p className="text-gray-600">Handle RC ownership transfer process seamlessly</p>
          </Link>
          <Link href="/services/noc-assistance" className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">NOC Assistance</h3>
            <p className="text-gray-600">Get No Objection Certificate from bank</p>
          </Link>
          <Link href="/services/duplicate-rc" className="group p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition">Duplicate RC</h3>
            <p className="text-gray-600">Get duplicate RC if original is lost</p>
          </Link>
        </div>
      </section>
      <Footer/>
      </div>
  );
}
