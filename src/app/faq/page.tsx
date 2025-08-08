"use client";
import { useState } from "react";
import { IconChevronDown, IconHelp } from "@tabler/icons-react";

const faqs = [
  {
    q: "What is hypothecation?",
    a: "A legal record on your RC that your vehicle was purchased on loan. Even after repaying the loan, this record remains unless you remove it via RTO.",
    category: "Basics",
  },
  {
    q: "Why should I remove it?",
    a: "It proves you fully own the vehicle, enables resale, and avoids loan-related legal issues in the future.",
    category: "Basics",
  },
  {
    q: "What documents are required?",
    a: (
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>RC Book / Smart Card</li>
        <li>Form 35 (provided by bank)</li>
        <li>Loan Closure Letter / NOC from Bank</li>
        <li>Aadhar + Address Proof</li>
        <li>Insurance Copy <span className="text-xs text-blue-400">(sometimes)</span></li>
      </ul>
    ),
    category: "Documents",
  },
  {
    q: "How long does the process take?",
    a: "Typically 10–25 working days depending on your city/RTO.",
    category: "Process",
  },
  {
    q: "Is this service legal?",
    a: "Yes! We are a private third-party service provider, working through authorized agents. We are not affiliated with the government, but we follow all official RTO procedures.",
    category: "Legal",
  },
  {
    q: "Is my document safe with RTOEase?",
    a: "Absolutely! We use bank-grade 256-bit SSL encryption for all document uploads and storage. Your documents are stored securely in encrypted cloud storage and are automatically deleted after successful completion of your service. We never share your documents with unauthorized parties and maintain strict confidentiality protocols.",
    category: "Security",
  },
  {
    q: "How long does the hypothecation removal process take?", 
    a: "Our standard processing time is 7 days for most states. However, this can vary slightly based on your state's RTO processing speed and document verification requirements. We offer Express service (3 days) for urgent requirements. You'll receive real-time updates throughout the process via WhatsApp and email.",
    category: "Process",
  },
  {
    q: "What documents do I need to provide?",
    a: "You'll need: (1) Original RC with hypothecation mark, (2) NOC from your bank/financier, (3) Copy of your Aadhaar card, (4) Form 35 (we'll help you fill this), and (5) Loan closure certificate from bank. Don't worry if you're missing any document - our team will guide you on how to obtain them quickly.",
    category: "Documents",
  },
  {
    q: "Do you provide services in all Indian states?",
    a: "Yes! We provide hypothecation removal services across all 28 Indian states and 8 union territories. Our network of verified RTO agents ensures consistent service quality regardless of your location. Use our pincode checker at services section to confirm service availability and get estimated processing times for your area.",
    category: "Service",
  },
  {
    q: "What if my application gets rejected by RTO?",
    a: "RTO rejections are extremely rare (less than 2% of cases) when proper documentation is provided. If rejection occurs due to our error, we provide a full refund. If it's due to incomplete/incorrect documents from your side, we'll help you rectify the issues and resubmit at no additional cost. Our 98.5% success rate speaks for our expertise.",
    category: "Support",
  },
  {
    q: "Can I track the progress of my application?",
    a: "Yes! You'll receive a unique tracking number after document submission. Track your application status in real-time through our website or WhatsApp. We send automatic updates at each stage: Document Received → Verification Complete → RTO Submission → Processing → Completion. You can also call or WhatsApp us anytime for instant updates.",
    category: "Tracking",
  },
];

const categories = ["All", "Basics", "Documents", "Process", "Legal", "Security", "Service", "Support", "Tracking"];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFaqs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight">
                <span className="text-primary">Frequently Asked Questions</span>
              </h1>
              <p className="mb-6 font-semibold text-secondary-700">Get answers to common questions about our services</p>
              <p className="text-lg sm:text-xl text-secondary-600 mb-8 leading-relaxed">
                Find quick answers to the most common questions about hypothecation removal, RTO processes, and our services.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-secondary-700 hover:bg-primary hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-200 rounded-2xl"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-panel-${i}`}
                >
                  <div className="flex items-start gap-4">
                    <span className="bg-primary-100 text-primary rounded-full p-2 mt-1">
                      <IconHelp className="h-5 w-5" />
                    </span>
                    <span className="font-semibold text-secondary-900 text-lg">{faq.q}</span>
                  </div>
                  <IconChevronDown 
                    className={`h-6 w-6 text-primary transform transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} 
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  className={`px-8 pb-6 transition-all duration-300 ${open === i ? 'block' : 'hidden'}`}
                >
                  <div className="ml-12 text-gray-700 text-base leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                Can&apos;t find the answer you&apos;re looking for? Our support team is here to help you 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact-us" 
                  className="btn-primary text-lg px-8 py-4 shadow-cta hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  Contact Support
                </a>
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-success text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-success-700 transition-all duration-200 text-lg text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 