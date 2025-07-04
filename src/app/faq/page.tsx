"use client";
import Head from "next/head";
import { useState } from "react";

const faqs = [
  {
    q: "What is hypothecation?",
    a: "A legal record on your RC that your vehicle was purchased on loan. Even after repaying the loan, this record remains unless you remove it via RTO.",
    icon: "/file.svg",
  },
  {
    q: "Why should I remove it?",
    a: "It proves you fully own the vehicle, enables resale, and avoids loan-related legal issues in the future.",
    icon: "/window.svg",
  },
  {
    q: "What documents are required?",
    a: (
      <ul className="list-disc pl-6 space-y-1 text-gray-700">
        <li>RC Book / Smart Card</li>
        <li>Form 35 (provided by bank)</li>
        <li>Loan Closure Letter / NOC from Bank</li>
        <li>Aadhar + Address Proof</li>
        <li>Insurance Copy <span className="text-xs text-blue-400">(sometimes)</span></li>
      </ul>
    ),
    icon: "/globe.svg",
  },
  {
    q: "How long does the process take?",
    a: "Typically 10–25 working days depending on your city/RTO.",
    icon: "/vercel.svg",
  },
  {
    q: "Is this service legal?",
    a: "Yes! We are a private third-party service provider, working through authorized agents. We are not affiliated with the government, but we follow all official RTO procedures.",
    icon: "/file.svg",
  },
  {
    q: "Is my document safe with RCEase?",
    a: "Absolutely! We use bank-grade 256-bit SSL encryption for all document uploads and storage. Your documents are stored securely in encrypted cloud storage and are automatically deleted after successful completion of your service. We never share your documents with unauthorized parties and maintain strict confidentiality protocols.",
    icon: "/file.svg",
  },
  {
    q: "How long does the hypothecation removal process take?", 
    a: "Our standard processing time is 7 days for most states. However, this can vary slightly based on your state's RTO processing speed and document verification requirements. We offer Express service (3 days) for urgent requirements. You'll receive real-time updates throughout the process via WhatsApp and email.",
    icon: "/vercel.svg",
  },
  {
    q: "What documents do I need to provide?",
    a: "You'll need: (1) Original RC with hypothecation mark, (2) NOC from your bank/financier, (3) Copy of your Aadhaar card, (4) Form 35 (we'll help you fill this), and (5) Loan closure certificate from bank. Don't worry if you're missing any document - our team will guide you on how to obtain them quickly.",
    icon: "/globe.svg",
  },
  {
    q: "Do you provide services in all Indian states?",
    a: "Yes! We provide hypothecation removal services across all 28 Indian states and 8 union territories. Our network of verified RTO agents ensures consistent service quality regardless of your location. Use our pincode checker above to confirm service availability and get estimated processing times for your area.",
    icon: "/vercel.svg",
  },
  {
    q: "What if my application gets rejected by RTO?",
    a: "RTO rejections are extremely rare (less than 2% of cases) when proper documentation is provided. If rejection occurs due to our error, we provide a full refund. If it's due to incomplete/incorrect documents from your side, we'll help you rectify the issues and resubmit at no additional cost. Our 98.5% success rate speaks for our expertise.",
    icon: "/file.svg",
  },
  {
    q: "Can I track the progress of my application?",
    a: "Yes! You'll receive a unique tracking number after document submission. Track your application status in real-time through our website or WhatsApp. We send automatic updates at each stage: Document Received → Verification Complete → RTO Submission → Processing → Completion. You can also call or WhatsApp us anytime for instant updates.",
    icon: "/vercel.svg",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": typeof faq.q === 'string' ? faq.q : '',
    "acceptedAnswer": {
      "@type": "Answer",
      "text": typeof faq.a === 'string' ? faq.a : '',
    },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <Head>
        <title>FAQ - RCFix</title>
        <meta name="description" content="Frequently asked questions about RCFix hypothecation removal and RTO services." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </Head>
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                    Frequently Asked Questions
                </h2>
                <p className="text-xl text-secondary-600">
                    Get answers to common questions about our hypothecation removal service.
                </p>
            </div>

            <div className="space-y-4">

              {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-secondary-200 rounded-lg group">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="font-semibold text-secondary-900">{faq.q}</span>
                    <svg className={`h-6 w-6 text-blue-400 transform transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    className={`px-6 pb-6 text-gray-700 text-base transition-all duration-300 ${open === i ? 'block' : 'hidden'}`}
                  >
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
        </div>
    </section>
    </>
  );
} 