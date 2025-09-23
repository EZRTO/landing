import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Cookie Policy - EZRTO',
  description: 'Cookie Policy for EZRTO - Learn about how we use cookies on our website.',
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white">
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
              Cookie <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">
              Learn how we use cookies and how you can control them
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
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. What Are Cookies</h2>
            <p className="text-slate-600">
              Cookies are small text files that are placed on your computer or mobile device when you 
              visit our website. They are widely used to make websites work more efficiently and provide 
              information to website owners.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. How We Use Cookies</h2>
            <p className="text-slate-600 mb-4">
              EZRTO uses cookies for several purposes:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>To ensure our website functions properly</li>
              <li>To remember your preferences and settings</li>
              <li>To analyze website traffic and usage patterns</li>
              <li>To improve user experience and website performance</li>
              <li>To provide personalized content and services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Essential Cookies</h3>
                <p className="text-slate-600">
                  These cookies are necessary for the website to function and cannot be switched off. 
                  They are usually only set in response to actions made by you, such as setting your 
                  privacy preferences or filling in forms.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Analytics Cookies</h3>
                <p className="text-slate-600">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously. This helps us improve our website&apos;s performance 
                  and user experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Functional Cookies</h3>
                <p className="text-slate-600">
                  These cookies enable enhanced functionality and personalization, such as remembering 
                  your preferences and providing personalized content.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Marketing Cookies</h3>
                <p className="text-slate-600">
                  These cookies may be set through our site by our advertising partners to build a 
                  profile of your interests and show you relevant advertisements on other sites.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Third-Party Cookies</h2>
            <p className="text-slate-600 mb-4">
              We may also use third-party services that place cookies on your device, including:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms for social sharing features</li>
              <li>Customer support tools for chat functionality</li>
              <li>Payment processors for secure transactions</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Managing Cookies</h2>
            <p className="text-slate-600 mb-4">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2">
              <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
              <li>Cookie preferences: Use our cookie preference center when available</li>
              <li>Opt-out tools: Use third-party opt-out tools for advertising cookies</li>
              <li>Private browsing: Use incognito or private browsing mode</li>
            </ul>
            <p className="text-slate-600 mt-4">
              Please note that disabling certain cookies may affect the functionality of our website 
              and your user experience.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Cookie Retention</h2>
            <p className="text-slate-600">
              Cookies are stored for different periods depending on their purpose:
            </p>
            <ul className="list-disc pl-6 text-slate-600 space-y-2 mt-4">
              <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent cookies:</strong> Remain until they expire or you delete them</li>
              <li><strong>Analytics cookies:</strong> Typically stored for 2 years</li>
              <li><strong>Marketing cookies:</strong> Usually stored for 30 days to 2 years</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Updates to This Policy</h2>
            <p className="text-slate-600">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. Please check this page periodically 
              for updates.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Contact Us</h2>
            <p className="text-slate-600">
              If you have any questions about our use of cookies, please contact us:
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