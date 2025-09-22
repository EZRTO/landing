import type { Metadata } from "next";
import Link from "next/link";
import { Users, CheckCircle, Clock, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ownership Transfer | EZRTO - Vehicle RC Transfer Service",
  description: "Handle the RC ownership transfer process when buying or selling a vehicle seamlessly. Expert coordination between buyer and seller with legal transfers.",
  keywords: "ownership transfer, RC transfer, vehicle ownership change, RTO ownership transfer, vehicle sale transfer",
  alternates: {
    canonical: "https://ezrto.in/services/ownership-transfer",
  },
};

const features = [
  {
    icon: Users,
    title: "Buyer-Seller Coordination",
    description: "Seamless coordination between buyer and seller"
  },
  {
    icon: Shield,
    title: "Legal Transfers", 
    description: "Complete legal ownership transfer process"
  },
  {
    icon: Clock,
    title: "Documentation Support",
    description: "Comprehensive documentation assistance"
  },
  {
    icon: CheckCircle,
    title: "RTO Compliance",
    description: "Full compliance with RTO regulations"
  }
];

const processSteps = [
  {
    step: "1",
    title: "Document Collection",
    description: "Collect all required documents from both parties"
  },
  {
    step: "2", 
    title: "Application Submission",
    description: "Submit ownership transfer application to RTO"
  },
  {
    step: "3",
    title: "Verification Process",
    description: "RTO verifies documents and processes application"
  },
  {
    step: "4",
    title: "RC Transfer",
    description: "New RC issued in buyer name"
  }
];

export default function OwnershipTransferPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Ownership Transfer Service
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Handle the RC ownership transfer process when buying or selling 
          a vehicle seamlessly. Expert coordination between buyer and seller 
          with legal transfers.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Ownership Transfer Service?</h2>
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
        <h2 className="text-3xl font-bold text-center mb-8">Types of Ownership Transfer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sale Transfer</h3>
            <ul className="space-y-2 text-gray-600">
              <li> Complete vehicle sale documentation</li>
              <li> Buyer-seller agreement processing</li>
              <li> Payment verification and clearance</li>
              <li> Legal ownership transfer</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Gift Transfer</h3>
            <ul className="space-y-2 text-gray-600">
              <li> Gift deed documentation</li>
              <li> Family transfer processing</li>
              <li> Tax exemption handling</li>
              <li> Simplified transfer process</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center bg-blue-600 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Need Ownership Transfer?</h2>
        <p className="text-xl mb-6">Get expert help with your vehicle ownership transfer today!</p>
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
          <Link href="/services/noc-assistance" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">NOC Assistance</h3>
            <p className="text-gray-600">Get No Objection Certificate from bank</p>
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
