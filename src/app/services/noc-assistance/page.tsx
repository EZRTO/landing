import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Building, Clock, Shield } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "NOC Assistance | EZRTO - No Objection Certificate Service",
  description: "Obtain a No Objection Certificate from your bank for selling or transferring a vehicle. Expert assistance for NOC processing and transfer facilitation.",
  keywords: "NOC assistance, no objection certificate, bank NOC, vehicle NOC, RTO NOC",
  alternates: {
    canonical: "https://ezrto.in/services/noc-assistance",
  },
};

const features = [
  {
    icon: Building,
    title: "Bank Coordination",
    description: "Direct coordination with your bank for NOC processing"
  },
  {
    icon: Shield,
    title: "NOC Processing", 
    description: "Complete NOC application and processing support"
  },
  {
    icon: Clock,
    title: "Transfer Facilitation",
    description: "Smooth vehicle transfer process with NOC"
  },
  {
    icon: CheckCircle,
    title: "Expert Guidance",
    description: "Professional guidance throughout the NOC process"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Document Verification",
    description: "Verify all required documents for NOC application"
  },
  {
    step: "2", 
    title: "Bank Coordination",
    description: "Coordinate with your bank for NOC issuance"
  },
  {
    step: "3",
    title: "NOC Processing",
    description: "Process NOC application with proper documentation"
  },
  {
    step: "4",
    title: "Transfer Support",
    description: "Support vehicle transfer with valid NOC"
  }
];

export default function NOCAssistancePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          NOC Assistance Service
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Obtain a No Objection Certificate from your bank for selling 
          or transferring a vehicle. Expert assistance for NOC processing 
          and transfer facilitation.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our NOC Assistance Service?</h2>
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
        <h2 className="text-3xl font-bold text-center mb-8">When Do You Need NOC?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Selling Your Vehicle</h3>
            <ul className="space-y-2 text-gray-600">
              <li> Required when selling a financed vehicle</li>
              <li> Bank clearance for ownership transfer</li>
              <li> Ensures loan closure before sale</li>
              <li> Protects buyer from loan liabilities</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Vehicle Transfer</h3>
            <ul className="space-y-2 text-gray-600">
              <li> Needed for inter-state transfers</li>
              <li> Required for ownership changes</li>
              <li> Bank approval for transfer</li>
              <li> Legal compliance for transfers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center bg-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Need NOC Assistance?</h2>
        <p className="text-xl mb-6">Get expert help with your NOC process today!</p>
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
