import { FileText, Shield, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Fragment } from 'react';

export const metadata = {
  title: 'Refund Policy - EZRTO',
  description: 'Refund Policy for EZRTO - Learn about our refund terms and conditions for RTO services.',
};

export default function RefundPolicy() {
  return (
    <Fragment>
      <section className="relative bg-gradient text-white py-20 mt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-sky-600/20 p-4 rounded-full">
                <Shield className="h-12 w-12 text-sky-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Refund <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">
              Transparent and fair refund terms for all our RTO services
            </p>
            <p className="text-lg text-slate-400">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          {/* Overview Section */}
          <section className="mb-12">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                Our Commitment
              </h2>
              <p className="text-slate-700">
                At EZRTO, we are committed to providing excellent service and customer satisfaction. 
                We understand that sometimes circumstances change, and we have designed our refund 
                policy to be fair and transparent while protecting both our customers and our business.
              </p>
            </div>
          </section>

          {/* Refund Eligibility */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">1. Refund Eligibility</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  Eligible for Refund
                </h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Service not initiated within 48 hours of payment</li>
                  <li>• Duplicate payment made by mistake</li>
                  <li>• Service cancelled before document collection</li>
                  <li>• Technical error in payment processing</li>
                  <li>• Service not available in your area</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                  <XCircle className="h-5 w-5 text-red-600 mr-2" />
                  Not Eligible for Refund
                </h3>
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• Service already in progress</li>
                  <li>• Documents submitted to RTO</li>
                  <li>• Change of mind after service starts</li>
                  <li>• RTO rejection due to invalid documents</li>
                  <li>• Service completed successfully</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Refund Process */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">2. Refund Process</h2>
            
            <div className="bg-slate-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">How to Request a Refund</h3>
              <ol className="list-decimal pl-6 text-slate-700 space-y-3">
                <li><strong>Contact Us:</strong> Email us at refunds@ezrto.in or call our customer support</li>
                <li><strong>Provide Details:</strong> Include your order number, payment reference, and reason for refund</li>
                <li><strong>Verification:</strong> We will verify your request within 24 hours</li>
                <li><strong>Processing:</strong> Approved refunds will be processed within 5-7 business days</li>
                <li><strong>Confirmation:</strong> You will receive confirmation once the refund is processed</li>
              </ol>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-800">24 Hours</h4>
                <p className="text-sm text-blue-600">Verification Time</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-green-800">5-7 Days</h4>
                <p className="text-sm text-green-600">Processing Time</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <FileText className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-semibold text-purple-800">Email</h4>
                <p className="text-sm text-purple-600">Confirmation Sent</p>
              </div>
            </div>
          </section>

          {/* Service-Specific Policies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">3. Service-Specific Refund Terms</h2>
            
            <div className="space-y-6">
              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Hypothecation Termination</h3>
                <ul className="text-slate-700 space-y-2">
                  <li>• Full refund if service not initiated within 48 hours</li>
                  <li>• 50% refund if cancelled after document collection but before RTO submission</li>
                  <li>• No refund once documents are submitted to RTO</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">RC Transfer & NOC Services</h3>
                <ul className="text-slate-700 space-y-2">
                  <li>• Full refund if service not available in your area</li>
                  <li>• 75% refund if cancelled before document verification</li>
                  <li>• No refund after RTO processing begins</li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Doorstep Pickup Services</h3>
                <ul className="text-slate-700 space-y-2">
                  <li>• Full refund if pickup not available in your area</li>
                  <li>• 50% refund if cancelled after pickup scheduling</li>
                  <li>• No refund after documents are collected</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Payment Methods */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">4. Refund Methods</h2>
            
            <div className="bg-slate-50 rounded-lg p-6">
              <p className="text-slate-700 mb-4">
                Refunds will be processed using the same payment method used for the original transaction:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
                <li>• Credit/Debit Cards: 5-7 business days</li>
                <li>• UPI Payments: 2-3 business days</li>
                <li>• Net Banking: 3-5 business days</li>
                <li>• Digital Wallets: 2-4 business days</li>
              </ul>
            </div>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">5. Dispute Resolution</h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">If You Disagree with Our Decision</h3>
              <p className="text-yellow-700 mb-4">
                If you believe your refund request was incorrectly denied, you can:
              </p>
              <ol className="list-decimal pl-6 text-yellow-700 space-y-2">
                <li>Request a review by our senior management team</li>
                <li>Provide additional documentation to support your case</li>
                <li>Contact our customer service for escalation</li>
                <li>File a complaint with consumer forums if necessary</li>
              </ol>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">6. Contact Us</h2>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-4">
                For refund requests or questions about this policy, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Refund Department</h4>
                  <p className="text-slate-700">
                    <strong>Email:</strong> refunds@ezrto.in<br />
                    <strong>Phone:</strong> +91-XXXXXXXXXX<br />
                    <strong>Hours:</strong> Mon-Fri, 9 AM - 6 PM IST
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Customer Support</h4>
                  <p className="text-slate-700">
                    <strong>Email:</strong> support@ezrto.in<br />
                    <strong>Phone:</strong> +91-XXXXXXXXXX<br />
                    <strong>Hours:</strong> 24/7 Support Available
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Policy Updates</h3>
              <p className="text-blue-700">
                We may update this refund policy from time to time. Any changes will be posted on this page 
                with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>
          </section>
        </div>
      </main>
    </Fragment>
  );
} 