import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - EZRTO',
  description: 'Terms of Service for EZRTO - Read our terms and conditions for using our RTO services.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <FileText className="h-8 w-8 text-sky-400" />
              <span className="text-2xl font-bold">EZRTO</span>
            </a>
            <a 
              href="/" 
              className="text-sky-400 hover:text-sky-300 transition-colors text-sm"
            >
              ← Back to Home
            </a>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-slate-300">Last updated: January 2025</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600">
              By accessing and using EZRTO's services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do 
              not use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Service Description</h2>
            <p className="text-slate-600 mb-4">
              EZRTO provides professional RTO (Regional Transport Office) services including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Hypothecation termination services</li>
              <li>Duplicate RC issuance</li>
              <li>Address change on RC</li>
              <li>NOC assistance</li>
              <li>Ownership transfer services</li>
              <li>Doorstep pickup and delivery</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. User Responsibilities</h2>
            <p className="text-slate-600 mb-4">As a user of our services, you agree to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Submit genuine and valid documents</li>
              <li>Pay all applicable fees in a timely manner</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use our services for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Payment Terms</h2>
            <p className="text-slate-600 mb-4">
              Payment for services must be made as agreed upon during the consultation process. 
              We accept various payment methods including:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Online bank transfers</li>
              <li>Credit and debit cards</li>
              <li>Digital wallets</li>
              <li>Cash on delivery (where applicable)</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Refunds will be processed according to our refund policy, which will be communicated 
              at the time of service agreement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Service Limitations</h2>
            <p className="text-slate-600 mb-4">
              While we strive to provide excellent service, please note:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Processing times may vary based on RTO office workload</li>
              <li>Some services may not be available in all locations</li>
              <li>Government fees and charges are separate from our service fees</li>
              <li>We cannot guarantee specific timelines due to external factors</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-600">
              EZRTO shall not be liable for any indirect, incidental, special, consequential, or 
              punitive damages, including without limitation, loss of profits, data, use, goodwill, 
              or other intangible losses, resulting from your use of our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Termination</h2>
            <p className="text-slate-600">
              We may terminate or suspend your access to our services immediately, without prior 
              notice or liability, for any reason whatsoever, including without limitation if you 
              breach the Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Changes to Terms</h2>
            <p className="text-slate-600">
              We reserve the right to modify or replace these Terms at any time. If a revision is 
              material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Contact Information</h2>
            <p className="text-slate-600">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg mt-4">
              <p className="text-slate-700">
                <strong>Email:</strong> legal@ezrto.in<br />
                <strong>Phone:</strong> +1 (555) 123-4567<br />
                <strong>Address:</strong> 123 Business Center, Suite 456, Downtown District, City 12345
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}