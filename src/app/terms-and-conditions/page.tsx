import { IconArrowRight } from "@tabler/icons-react";
import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - RTOEase</title>
        <meta name="description" content="Read the terms and conditions for using RTOEase services." />
      </Head>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headings and Trust Bar */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight">
                <span className="text-primary">Terms & Conditions</span>
              </h1>              
              <p className=" mb-6 font-semibold text-secondary-700">Date of last revision : 31 Jul'23</p>
              <p className="text-lg sm:text-xl text-secondary-600 mb-8 leading-relaxed">
                Please read these terms carefully before using RTOEase. We believe in transparency, trust, and a hassle-free experience for every vehicle owner.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-10 flex flex-col items-center text-left">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">What You Need to Know</h2>
            <ul className="list-none space-y-6 w-full">
              <li className="flex items-center gap-4">
              <span className="bg-primary-100 text-primary rounded-full p-2 mt-1"><IconArrowRight /></span>
                <span className="text-gray-700 text-lg">Provide accurate, complete, and up-to-date information and documents for your requests.</span>
              </li>
              <li className="flex items-center gap-4">
              <span className="bg-primary-100 text-primary rounded-full p-2 mt-1"><IconArrowRight /></span>
                <span className="text-gray-700 text-lg">RTOEase acts as a facilitator and is not responsible for delays or rejections by government authorities or third parties.</span>
              </li>
              <li className="flex items-center gap-4">
              <span className="bg-primary-100 text-primary rounded-full p-2 mt-1"><IconArrowRight /></span>
                <span className="text-gray-700 text-lg">Payments are non-refundable except for failures solely due to RTOEase error.</span>
              </li>
              <li className="flex items-start gap-4">
              <span className="bg-primary-100 text-primary rounded-full p-2 mt-1"><IconArrowRight /></span>
                <span className="text-gray-700 text-lg">You are responsible for the validity of your documents. Incorrect or incomplete documentation may cause delays or rejection.</span>
              </li>
              <li className="flex items-start gap-4">
              <span className="bg-primary-100 text-primary rounded-full p-2 mt-1"><IconArrowRight /></span>
                <span className="text-gray-700 text-lg">Service timelines are estimates and may vary due to government processes or unforeseen events.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-primary-100 text-primary rounded-full p-2 mt-1"><IconArrowRight /></span>
                <span className="text-gray-700 text-lg">Abusive, fraudulent, or illegal activity will result in immediate termination of services without refund.</span>
              </li>
              <li className="flex items-center gap-4">
              <span className="bg-primary-100 text-primary rounded-full p-2 mt-1"><IconArrowRight /></span>
                <span className="text-gray-700 text-lg">RTOEase may update these terms at any time. Continued use means you accept the latest terms.</span>
              </li>
              <li className="flex items-center gap-4">
              <span className="bg-primary-100 text-primary rounded-full p-2 mt-1"><IconArrowRight /></span>
                <span className="text-gray-700 text-lg">Questions? Contact <a href="mailto:support@rtoease.in" className="text-blue-600 underline">support@rtoease.in</a></span>
              </li>
            </ul>
          </div>
        </div>
        
      </section>
    </>
  );
}
