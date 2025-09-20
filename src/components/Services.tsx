'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield,
  FileText,
  CheckCircle,
  Users,
  FileX, 
  Copy, 
  MapPin, 
  FileCheck, 
  ArrowRightLeft, 
  Truck,
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const services = [
  {
    icon: Shield,
    title: "Hypothecation Termination",
    description: "Remove loan records from your vehicle RC after the loan is paid off. Get clear ownership documentation.",
    features: ["Loan clearance documentation", "RC endorsement", "Legal compliance"],
    link : "services/hypothecation-termination"
  },
  {
    icon: FileText,
    title: "Duplicate RC Issuance",
    description: "Get a duplicate RC if the original is lost. Quick and hassle-free replacement process.",
    features: ["Lost RC replacement", "Official documentation", "Fast processing"],
    link: ""
  },
  {
    icon: MapPin,
    title: "Address Change on RC",
    description: "Update your address on the vehicle's RC. Ensure your documents reflect your current location.",
    features: ["Address verification", "Document updates", "State transfers"],
    link: ""
  },
  {
    icon: CheckCircle,
    title: "NOC Assistance",
    description: "Obtain a No Objection Certificate from your bank for selling or transferring a vehicle.",
    features: ["Bank coordination", "NOC processing", "Transfer facilitation"],
    link: ""
  },
  {
    icon: Users,
    title: "Ownership Transfer",
    description: "Handle the RC ownership transfer process when buying or selling a vehicle seamlessly.",
    features: ["Buyer-seller coordination", "Legal transfers", "Documentation support"],
    link: ""
  },
  {
    icon: Truck,
    title: "Doorstep Pickup & Delivery",
    description: "Premium service for secure document handling in select cities. We come to you.",
    features: ["Secure pickup", "Document handling", "Home delivery"],
    link: ""
  }
];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Expert Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive RTO solutions designed to save your time and ensure compliance with all legal requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-sky-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-sky-700" />
                </div>
                <CardTitle className="text-xl text-slate-800 group-hover:text-sky-700 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-sky-700 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/services/hypothecation-termination" className="text-sky-700 hover:bg-sky-50 p-0 h-auto font-semibold group/btn">
                <Button 
                  variant="ghost" 
                  className="text-sky-700 hover:bg-sky-50 p-0 h-auto font-semibold group/btn"
                >
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}