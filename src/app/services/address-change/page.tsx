import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, Clock, Shield } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Address Change on RC | EZRTO - Update Vehicle Registration Address",
  description: "Update your address on the vehicle RC. Ensure your documents reflect your current location with our hassle-free address change service.",
  keywords: "address change RC, RC address update, vehicle registration address change, RTO address change",
  alternates: {
    canonical: "https://ezrto.in/services/address-change",
  },
};

const features = [
  {
    icon: MapPin,
    title: "Address Verification",
    description: "Proper verification of new address with required documents"
  },
  {
    icon: Shield,
    title: "Document Updates", 
    description: "Complete RC update with new address information"
  },
  {
    icon: Clock,
    title: "State Transfers",
    description: "Handle inter-state address changes seamlessly"
  },
  {
    icon: CheckCircle,
    title: "Fast Processing",
    description: "Quick processing for address change applications"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Document Collection",
    description: "Submit current RC and new address proof documents"
  },
  {
    step: "2", 
    title: "Address Verification",
    description: "We verify your new address with local authorities"
  },
  {
    step: "3",
    title: "RC Update",
    description: "RTO processes the address change and updates RC"
  },
  {
    step: "4",
    title: "Delivery",
    description: "Updated RC delivered to your new address"
  }
];

export default function AddressChangePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Address Change on RC Service
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Update your address on the vehicle RC. Ensure your documents 
          reflect your current location with our hassle-free address 
          change service.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Address Change Service?</h2>
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
        <h2 className="text-3xl font-bold text-center mb-8">Types of Address Changes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Same State Address Change</h3>
            <ul className="space-y-2 text-gray-600">
              <li> Update address within the same state</li>
              <li> Faster processing time</li>
              <li> Minimal documentation required</li>
              <li> Lower fees applicable</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Inter-State Address Change</h3>
            <ul className="space-y-2 text-gray-600">
              <li> Transfer RC to different state</li>
              <li> Complete state transfer process</li>
              <li> New state registration</li>
              <li> Comprehensive documentation support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center bg-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Need to Change Address on RC?</h2>
        <p className="text-xl mb-6">Get started with our hassle-free address change service today!</p>
        <Link 
          href="/contact" 
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get Started Now
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
