import { FileText } from 'lucide-react';
import { Fragment } from 'react';

export const metadata = {
  title: 'Privacy Policy - ezrto',
  description: 'Privacy Policy for ezrto - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <Fragment>
      <section className="relative bg-gradient text-white py-20 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-sky-600/20 p-4 rounded-full">
                <FileText className="h-12 w-12 text-sky-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">
              Your privacy and data security are our top priorities
            </p>
            <p className="text-lg text-slate-400">
              Effective Date: September 2025
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-12">
            <p className="text-slate-600 mb-6">
              <strong>Website:</strong> www.ezrto.in <br />
              <strong>Entity:</strong> ezrto (referred to as &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
            <p className="text-slate-600">
              At ezrto, your privacy is important to us. This Privacy Policy outlines how we collect, 
              use, store, disclose, and protect your personal information when you visit or make a purchase from 
              www.ezrto.in.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 mb-4">We collect the following types of information:</p>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">a) Personal Information</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Contact Number</li>
              <li>Shipping and Billing Address</li>
              <li>Payment Details (processed securely via third-party gateways)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">b) Non-Personal Information</h3>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Browser type, IP address, device ID, operating system</li>
              <li>Site usage data (via cookies and analytics tools like Google Analytics)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Communicate order updates and respond to inquiries</li>
              <li>Improve website functionality and user experience</li>
              <li>Send promotional content (only with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-slate-600 mb-4">We use cookies to enhance your experience. These cookies allow us to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Remember your preferences</li>
              <li>Maintain shopping cart sessions</li>
              <li>Analyze site traffic and user behavior</li>
            </ul>
            <p className="text-slate-600">
              You may disable cookies via browser settings, but doing so may affect site functionality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Sharing of Information</h2>
            <p className="text-slate-600 mb-4">
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Payment gateways (e.g., Razorpay, Paytm, etc.)</li>
              <li>Logistics partners for order delivery</li>
              <li>Analytics tools (e.g., Google Analytics)</li>
              <li>Legal authorities, if required by law</li>
            </ul>
            <p className="text-slate-600">
              All third-party vendors are expected to uphold strict data protection standards.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Data Security</h2>
            <p className="text-slate-600">
              We implement industry-standard security measures including SSL encryption, firewall protection, 
              and secure servers to protect your data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Your Rights</h2>
            <p className="text-slate-600 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
              <li>Access, correct, or delete your personal information</li>
              <li>Withdraw consent for promotional emails at any time</li>
              <li>Request data portability or lodge a complaint (as per Indian IT Rules)</li>
            </ul>
            <p className="text-slate-600">
              To exercise these rights, email us at info@ezrto.in
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Data Retention</h2>
            <p className="text-slate-600">
              We retain your information as long as needed to fulfill the purposes outlined in this policy 
              or as required by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Third-Party Links</h2>
            <p className="text-slate-600">
              Our site may contain links to third-party sites. We are not responsible for their privacy 
              practices. Please review their privacy policies before submitting personal information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-slate-600">
              We do not knowingly collect personal data from children under 18. If you believe a child 
              has shared information with us, contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">11. Updates to This Policy</h2>
            <p className="text-slate-600">
              We may revise this Privacy Policy from time to time. Any changes will be posted on this 
              page with a revised &quot;Effective Date&quot;.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">12. Contact Us</h2>
            <p className="text-slate-600 mb-4">
              For questions about this Privacy Policy or your personal data, contact:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg mt-4">
              <p className="text-slate-700">
                <strong>Email:</strong> info@ezrto.in<br />
                <strong>Phone:</strong> +91 8767616877<br />
                <strong>Address:</strong> Banka Bihar 813102
              </p>
            </div>
          </section>
        </div>
      </main>
    </Fragment>
  );
}