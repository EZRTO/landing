import { Metadata } from "next";
import { IconArrowRight, IconPhone, IconMail, IconMapPin, IconBrandWhatsapp } from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Contact Us - RTOEase",
  description: "Get in touch with RTOEase for vehicle documentation services. We're here to help with all your RTO-related queries.",
};

export default function ContactUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight">
                <span className="text-primary">Contact Us</span>
              </h1>
              <p className="mb-6 font-semibold text-secondary-700">We&apos;re here to help you with all your vehicle documentation needs</p>
              <p className="text-lg sm:text-xl text-secondary-600 mb-8 leading-relaxed">
                Have questions about our services? Need help with your application? Our team is ready to assist you 24/7.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="form-input w-full"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="form-input w-full"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="form-input w-full"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="form-input w-full"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select id="subject" name="subject" required className="form-input w-full">
                    <option value="">Select a subject</option>
                    <option value="hypothecation-removal">Hypothecation Removal</option>
                    <option value="duplicate-rc">Duplicate RC</option>
                    <option value="address-change">Address Change</option>
                    <option value="noc-assistance">NOC Assistance</option>
                    <option value="general-inquiry">General Inquiry</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="form-input w-full"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full text-lg px-8 py-4 shadow-cta hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
                <h3 className="text-xl font-bold text-blue-700 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="bg-primary-100 text-primary rounded-full p-3 mt-1">
                      <IconPhone className="h-6 w-6" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                      <p className="text-gray-600 mb-2">+91 98765 43210</p>
                      <p className="text-sm text-gray-500">Available 24/7 for urgent queries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-primary-100 text-primary rounded-full p-3 mt-1">
                      <IconBrandWhatsapp className="h-6 w-6" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                      <p className="text-gray-600 mb-2">+91 98765 43210</p>
                      <p className="text-sm text-gray-500">Quick responses and file sharing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-primary-100 text-primary rounded-full p-3 mt-1">
                      <IconMail className="h-6 w-6" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                      <p className="text-gray-600 mb-2">support@rtoease.in</p>
                      <p className="text-sm text-gray-500">For detailed inquiries and support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-primary-100 text-primary rounded-full p-3 mt-1">
                      <IconMapPin className="h-6 w-6" />
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                      <p className="text-gray-600 mb-2">Bhagalpur, Bihar, India</p>
                      <p className="text-sm text-gray-500">Serving customers across India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="bg-gradient-to-r from-primary to-primary-700 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Response Time</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <IconArrowRight className="h-5 w-5" />
                    <span>WhatsApp: Within 5 minutes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <IconArrowRight className="h-5 w-5" />
                    <span>Phone: Immediate response</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <IconArrowRight className="h-5 w-5" />
                    <span>Email: Within 2 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}