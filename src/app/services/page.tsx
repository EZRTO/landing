"use client";
import Head from "next/head";

const services = [
  {
    title: "Hypothecation Removal",
    desc: "Terminate loan records from your RC once your loan is closed. End-to-end support: docs, RTO visit, follow-up.",
    icon: "/file.svg",
    serviceList: ["All major banks supported", "7-day processing guarantee", "Cars & motorcycles"],
    price: "₹1,999",
  },
  {
    title: "Duplicate RC Issuance",
    desc: "Lost your RC? We help you get a duplicate issued quickly and easily.",
    icon: "/window.svg",
    serviceList: ["All major banks supported", "7-day processing guarantee", "Cars & motorcycles"],
    price: "₹999",
  },
  {
    title: "Address Change on RC",
    desc: "Update your address on your vehicle RC without the hassle of RTO visits.",
    icon: "/globe.svg",
    serviceList: ["All major banks supported", "7-day processing guarantee", "Cars & motorcycles"],
    price: "₹299",
  },
  {
    title: "NOC Assistance",
    desc: "Get No Objection Certificate from your bank quickly for vehicle sale or transfer purposes.",
    icon: "/window.svg",
    serviceList: ["Bank coordination handled", "Fast 3-5 day delivery", "Original document delivery"],
    price: "₹999",
  },
  {
    title: "Ownership Transfer",
    desc: "Buy or sell a vehicle? We handle the RC ownership transfer process for you.",
    icon: "/vercel.svg",
    serviceList: ["All major banks supported", "7-day processing guarantee", "Cars & motorcycles", "Ownership transfer"],
    price: "₹299",
  },
  {
    title: "Doorstep Pickup & Delivery",
    desc: "Available in select cities for premium users.",
    icon: "/globe.svg", 
    serviceList: ["Free pickup in metro cities", "Secure document handling", "Real-time tracking"],
    price: "₹299",
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - RCFix</title>
        <meta name="description" content="Explore all the services offered by RCFix, including hypothecation removal, duplicate RC, address change, and more." />
      </Head>
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                    Our Services
                </h2>
                <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                    Complete vehicle documentation services across all Indian states with guaranteed results and transparent pricing.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service) => (
                <div key={service.title} className="card hover:shadow-lg transition-shadow duration-300">
                    <div className="text-center">
                        <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-secondary-900 mb-2">{service.title}</h3>
                        <p className="text-secondary-600 mb-6">
                            {service.desc}
                        </p>
                        <div className="text-4xl font-bold text-primary mb-2" id="basicPrice">{service.price}</div>
                        <p className="text-sm text-secondary-500 mb-6">All inclusive pricing</p>
                        <ul className="text-sm text-secondary-600 space-y-2">
                            {service.serviceList.map((item) => (
                            <li className="flex items-center">
                                <svg className="h-4 w-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                {item}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                ))}
            </div>

            {/* Service Checker */}
            <div className="mt-12 bg-primary-50 rounded-xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-secondary-900 text-center mb-6">Check Service Availability</h3>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input type="text" id="pincodeInput" placeholder="Enter your pincode" className="form-input flex-1" maxLength={6} />
                    {/* <button onClick={() => {}} className="btn-primary whitespace-nowrap">Check Availability</button> */}
                </div>
                <div id="serviceResult" className="mt-6 hidden">
                    <div className="bg-white rounded-lg p-6 text-center">
                        <div className="text-success text-lg font-semibold mb-2">✓ Service Available</div>
                        <p className="text-secondary-600 mb-4">We provide services in your area with verified local agents.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="font-medium">Estimated Completion:</span>
                                <span className="text-primary ml-1">5-7 days</span>
                            </div>
                            <div>
                                <span className="font-medium">Local Agent:</span>
                                <span className="text-success ml-1">Verified ✓</span>
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