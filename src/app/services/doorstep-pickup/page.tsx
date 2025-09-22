import type { Metadata } from "next";
import Link from "next/link";
import { Truck, CheckCircle, Clock, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Doorstep Pickup & Delivery | EZRTO - Premium Document Service",
  description: "Premium service for secure document handling in select cities. We come to you for pickup and delivery of your vehicle documents.",
  keywords: "doorstep pickup, document delivery, vehicle document service, RTO doorstep service, document handling",
  alternates: {
    canonical: "https://ezrto.in/services/doorstep-pickup",
  },
};

const features = [
  {
    icon: Truck,
    title: "Secure Pickup",
    description: "Safe and secure pickup of your documents"
  },
  {
    icon: Shield,
    title: "Document Handling", 
    description: "Professional handling of all vehicle documents"
  },
  {
    icon: Clock,
    title: "Home Delivery",
    description: "Convenient delivery right to your doorstep"
  },
  {
    icon: CheckCircle,
    title: "Premium Service",
    description: "Exclusive service for select cities"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Service Request",
    description: "Book doorstep pickup service online or call"
  },
  {
    step: "2", 
    title: "Document Pickup",
    description: "Our agent visits your location for document pickup"
  },
  {
    step: "3",
    title: "Processing",
    description: "Documents processed at RTO office"
  },
  {
    step: "4",
    title: "Home Delivery",
    description: "Processed documents delivered to your home"
  }
];

export default function DoorstepPickupPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Doorstep Pickup & Delivery Service
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Premium service for secure document handling in select cities. 
          We come to you for pickup and delivery of your vehicle documents 
          with complete convenience.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Doorstep Service?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Service Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Convenience</h3>
            <ul className="space-y-2 text-gray-600">
              <li> No need to visit RTO office</li>
              <li> Save time and effort</li>
              <li> Flexible scheduling</li>
              <li> Professional service</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Security</h3>
            <ul className="space-y-2 text-gray-600">
              <li> Secure document handling</li>
              <li> Insured service</li>
              <li> Tracked delivery</li>
              <li> Professional agents</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Available Cities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-white rounded-lg">
            <h3 className="font-semibold">Mumbai</h3>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <h3 className="font-semibold">Delhi</h3>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <h3 className="font-semibold">Bangalore</h3>
          </div>
          <div className="p-4 bg-white rounded-lg">
            <h3 className="font-semibold">Pune</h3>
          </div>
        </div>
        <p className="text-center mt-4 text-gray-600">
          More cities coming soon! Contact us to check availability in your city.
        </p>
      </section>

      <section className="text-center bg-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Need Doorstep Service?</h2>
        <p className="text-xl mb-6">Experience our premium doorstep pickup and delivery service!</p>
        <Link 
          href="/contact" 
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Book Service Now
        </Link>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/services/hypothecation-termination" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Hypothecation Termination</h3>
            <p className="text-gray-600">Remove loan records from your vehicle RC</p>
          </Link>
          <Link href="/services/ownership-transfer" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Ownership Transfer</h3>
            <p className="text-gray-600">Handle RC ownership transfer process</p>
          </Link>
          <Link href="/services/duplicate-rc" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">Duplicate RC</h3>
            <p className="text-gray-600">Get duplicate RC if original is lost</p>
          </Link>
        </div>
      </section>
      <Footer/>
      </div>
  );
}
