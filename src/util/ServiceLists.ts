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
    ArrowRight,
    Clock,
    Star,
    Zap
  } from 'lucide-react';

export const ServiceLists = [
    {
      icon: Shield,
      title: "Hypothecation Termination",
      description: "Remove loan records from your vehicle RC after the loan is paid off. Get clear ownership documentation.",
      features: ["Loan clearance documentation", "RC endorsement", "Legal compliance"],
      link: "/services/hypothecation-termination",
      category: "Documentation",
      duration: "3-5 days",
      popular: true,
      price: 2499
    },
    {
      icon: FileText,
      title: "Duplicate RC Issuance",
      description: "Get a duplicate RC if the original is lost. Quick and hassle-free replacement process.",
      features: ["Lost RC replacement", "Official documentation", "Fast processing"],
      link: "/services/duplicate-rc",
      category: "Replacement",
      duration: "2-3 days",
      popular: false,
      price: 1499
    },
    {
      icon: MapPin,
      title: "Address Change on RC",
      description: "Update your address on the vehicle's RC. Ensure your documents reflect your current location.",
      features: ["Address verification", "Document updates", "State transfers"],
      link: "/services/address-change",
      category: "Update",
      duration: "5-7 days",
      popular: false,
      price: 1499
    },
    {
      icon: CheckCircle,
      title: "NOC Assistance",
      description: "Obtain a No Objection Certificate from your bank for selling or transferring a vehicle.",
      features: ["Bank coordination", "NOC processing", "Transfer facilitation"],
      link: "/services/noc-assistance",
      category: "Banking",
      duration: "3-4 days",
      popular: false,
      price: 1499
    },
    {
      icon: Users,
      title: "Ownership Transfer",
      description: "Handle the RC ownership transfer process when buying or selling a vehicle seamlessly.",
      features: ["Buyer-seller coordination", "Legal transfers", "Documentation support"],
      link: "/services/ownership-transfer",
      category: "Transfer",
      duration: "7-10 days",
      popular: false,
      price: 1499
    },
    {
      icon: Truck,
      title: "Doorstep Pickup & Delivery",
      description: "Premium service for secure document handling in select cities. We come to you.",
      features: ["Secure pickup", "Document handling", "Home delivery"],
      link: "/services/doorstep-pickup",
      category: "Premium",
      duration: "Same day",
      popular: false,
      price: 1499
    }
  ];