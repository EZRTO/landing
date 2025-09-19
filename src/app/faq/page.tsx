import Header from '@/components/Header';
import { HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'FAQ - EZRTO',
  description: 'Frequently Asked Questions about EZRTO services, onboarding, pricing, support, and more.',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white py-20 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-sky-600/20 p-4 rounded-full">
                <HelpCircle className="h-12 w-12 text-sky-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-sky-400">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">
              Everything you need to know about EZRTO
            </p>
            <p className="text-lg text-slate-400">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full divide-y divide-slate-200 border border-slate-200 rounded-lg">
            <AccordionItem value="item-1" className="px-4">
              <AccordionTrigger className="text-left text-slate-800">
                What services does EZRTO provide?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                EZRTO streamlines a range of RTO services including new vehicle registration, ownership transfer, NOC, hypothecation (add/remove), renewal, duplicate RC, address change, and related documentation logistics.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="px-4">
              <AccordionTrigger className="text-left text-slate-800">
                How do I get started?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                You can reach out via the contact form or call our support. Our team will verify your requirements, share the document checklist, and coordinate pickup through our verified pickup agents.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="px-4">
              <AccordionTrigger className="text-left text-slate-800">
                How long does the process take?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Timelines depend on the specific service and local RTO workloads. Typical processes complete within 3–15 business days. We provide transparent status updates within the dashboard.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="px-4">
              <AccordionTrigger className="text-left text-slate-800">
                What are the fees and payment options?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Fees vary by service and state regulations. You will receive a detailed quote before we proceed. We support digital payments and provide GST invoices where applicable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="px-4">
              <AccordionTrigger className="text-left text-slate-800">
                Is my data safe with EZRTO?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Yes. We follow strict data handling practices and limit access to authorized personnel only. Refer to our Privacy Policy for details on collection, usage, and retention.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="px-4">
              <AccordionTrigger className="text-left text-slate-800">
                Do you provide support after submission?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Absolutely. Our team monitors your application and keeps you updated. If additional documents are required by the RTO, we will reach out promptly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="px-4">
              <AccordionTrigger className="text-left text-slate-800">
                How can I contact customer support?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                You can email support@ezrto.in or call +1 (555) 123-4567. Our support hours are 9:00–18:00 IST, Monday to Saturday.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-2">Still have questions?</h2>
            <p className="text-slate-600">
              Reach out to us at <span className="font-medium">support@ezrto.in</span> and our team will be happy to help.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 