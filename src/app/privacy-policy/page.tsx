import { IconArrowRight } from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - RTOEase",
  description: "Read the privacy policy for RTOEase services. Learn how we handle your data and privacy.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight">
                <span className="text-primary">Privacy Policy</span>
              </h1>
              <p className=" mb-6 font-semibold text-secondary-700">Date of last revision : 31 Jul&apos;23</p>
              <p className="text-lg sm:text-xl text-secondary-600 mb-8 leading-relaxed">
                Your privacy is our top priority. Learn how we protect, use, and respect your information at every step.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-10 flex flex-col items-center text-left">
            <ul className="list-none space-y-6 w-full">
              <li className="flex items-center gap-4">
                <span className="bg-primary-100 text-primary rounded-full p-2 mt-1"><IconArrowRight /></span>
                <span className="text-gray-700 text-lg">We collect only the information necessary to provide our services, such as your name, contact details, and vehicle information.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-primary-100 text-primary rounded-full p-2 mt-1"><IconArrowRight /></span>
                <span className="text-gray-700 text-lg">Your data is never sold or shared with third parties except as required to fulfill your requests or by law.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-primary-100 text-primary rounded-full p-2 mt-1"><IconArrowRight /></span>
                <span className="text-gray-700 text-lg">We use industry-standard security measures to protect your information from unauthorized access.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-primary-100 text-primary rounded-full p-2 mt-1"><IconArrowRight /></span>
                <span className="text-gray-700 text-lg">Cookies and analytics may be used to improve our website experience, but you can control these in your browser settings.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-primary-100 text-primary rounded-full p-2 mt-1"><IconArrowRight /></span>
                <span className="text-gray-700 text-lg">You may request access, correction, or deletion of your personal data by contacting us at <a href="mailto:support@rtoease.in" className="text-blue-600 underline">support@rtoease.in</a>.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-primary-100 text-primary rounded-full p-2 mt-1"><IconArrowRight /></span>
                <span className="text-gray-700 text-lg">For more details, please review our full privacy practices or contact our support team.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
