import Header from '@/components/Header';
import { FileText } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';

export const metadata = {
  title: 'Terms and Conditions - ezrto',
  description: 'Terms and Conditions for ezrto - Read our terms and conditions for using our website and services.',
};

export default function TermsOfService() {
  return (
    <Fragment>
      <Header />

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
              Terms and <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">
              Please read these terms carefully before using ezrto.in
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
              Welcome to ezrto.in. These Terms and Conditions govern your use of our website and services. 
              By accessing or using our site, you agree to be bound by these terms. If you do not agree with 
              these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Use of the Website</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>You must be at least 18 years old or have parental/guardian permission to use this website.</li>
              <li>You agree to use the site only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.</li>
              <li>You may not use this website to distribute any harmful or malicious content including viruses or spam.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Intellectual Property</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>All content on ezrto.in including text, graphics, logos, images, videos, and software is the property of ezrto.in or its licensors and is protected by intellectual property laws.</li>
              <li>You may not reproduce, distribute, modify, or republish any content without express written consent.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Account Registration</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Some features may require you to create an account. You are responsible for maintaining the confidentiality of your account and password.</li>
              <li>You must provide accurate and complete information and notify us of any changes.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Purchases and Payments</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>All purchases made on ezrto.in are subject to product availability and payment confirmation.</li>
              <li>We reserve the right to change prices, cancel or refuse any order at our discretion.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Shipping and Returns</h2>
            <p className="text-slate-600">
              Please refer to our  <Link href="/refund-policy" className="text-sky-400">Return Policy</Link> pages for details on delivery timelines and refund/exchange procedures.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. User-Generated Content</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>By submitting content to ezrto.in (such as reviews, comments, or suggestions), you grant us a non-exclusive, royalty-free, perpetual license to use and display such content.</li>
              <li>You must not post content that is unlawful, defamatory, offensive, or infringing on others&apos; rights.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Third-Party Links</h2>
            <p className="text-slate-600">
              ezrto.in may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Disclaimer of Warranties</h2>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>ezrto.in is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis. We make no warranties or representations regarding the accuracy, reliability, or availability of the site.</li>
              <li>We do not guarantee that the site will be error-free or uninterrupted.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Limitation of Liability</h2>
            <p className="text-slate-600">
              To the maximum extent permitted by law, ezrto.in shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Termination</h2>
            <p className="text-slate-600">
              We reserve the right to suspend or terminate your access to the website for any violation of these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">11. Governing Law</h2>
            <p className="text-slate-600">
              These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Banka Bihar, India.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">12. Changes to Terms</h2>
            <p className="text-slate-600">
              We may update these Terms at any time. Changes will be effective immediately upon posting. Continued use of the website constitutes your acceptance of the new terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">13. Contact Us</h2>
            <p className="text-slate-600 mb-4">
              If you have any questions about these Terms and Conditions, you can contact us at:
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