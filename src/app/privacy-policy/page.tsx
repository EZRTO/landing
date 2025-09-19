import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - EZRTO',
  description: 'Privacy Policy for EZRTO - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section for Privacy Policy */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 text-white py-20 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-sky-600/20 p-4 rounded-full">
                <FileText className="h-12 w-12 text-sky-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy <span className="text-sky-400">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">
              Your privacy and data security are our top priorities
            </p>
            <p className="text-lg text-slate-400">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Information We Collect</h2>
            <p className="text-slate-600 mb-4">
              At EZRTO, we collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Fill out our contact forms or request consultations</li>
              <li>Submit documents for RTO services</li>
              <li>Communicate with us via phone, email, or chat</li>
              <li>Subscribe to our newsletters or updates</li>
            </ul>
            <p className="text-slate-600 mt-4">
              The types of information we may collect include your name, email address, phone number, 
              address, vehicle information, and any other information you choose to provide.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Provide, maintain, and improve our RTO services</li>
              <li>Process your requests and communicate with you</li>
              <li>Send you technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Information Sharing</h2>
            <p className="text-slate-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>With RTO offices and government agencies as required for service delivery</li>
              <li>With service providers who assist us in operating our website and services</li>
              <li>When required by law or to protect our rights and safety</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Data Security</h2>
            <p className="text-slate-600">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Your Rights</h2>
            <p className="text-slate-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Contact Us</h2>
            <p className="text-slate-600">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg mt-4">
              <p className="text-slate-700">
                <strong>Email:</strong> privacy@ezrto.in<br />
                <strong>Phone:</strong> +1 (555) 123-4567<br />
                <strong>Address:</strong> 123 Business Center, Suite 456, Downtown District, City 12345
              </p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}