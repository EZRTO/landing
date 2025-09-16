import { Fragment } from "react";
import Image from "next/image";
import { IconAlertCircleFilled, IconBrandWhatsapp, IconCalculator, IconCheck, IconX } from "@tabler/icons-react";
import PincodeChecker from "../components/PincodeChecker";

const services = [
    {
      title: "Hypothecation Termination",
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
      serviceList: ["All major banks supported", "7-day processing", "Cars & motorcycles", "Ownership transfer"],
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

export default function Home() {
  return (
    <Fragment>
        <section className="bg-gradient-to-br from-primary-50 to-white py-12 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight mb-6">
                            Remove Loan Mark from Your Vehicle RC — 
                            <span className="text-primary">Hassle-Free</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-secondary-600 mb-8 leading-relaxed">
                            Skip RTO queues and paperwork maze - we complete your hypothecation removal in 10 days with complete document security.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="btn-primary text-lg px-8 py-4 shadow-cta hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                                Get Started Now
                            </button>
                            <a href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20help%20with%20RC%20hypothecation%20removal" target="_blank" className="bg-success text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-success-700 transition-all duration-200 text-lg text-center">
                                <IconBrandWhatsapp className="inline mr-2" size="24"/>
                                WhatsApp Support
                            </a>
                        </div>
                    </div>
                    
                    {/* Hero Image */}
                    <div className="relative">
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <Image 
                                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600" 
                                alt="Vehicle RC Document Processing" 
                                width={600}
                                height={256}
                                className="w-full h-64 object-cover rounded-lg mb-6" 
                            />
                            
                            {/* Process Steps */}
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</div>
                                    <span className="text-secondary-700 font-medium">Upload Documents</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</div>
                                    <span className="text-secondary-700 font-medium">We Process at RTO</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-success text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</div>
                                    <span className="text-secondary-700 font-medium">Receive Updated RC</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-16 bg-secondary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                        Tired of RTO Hassles?
                    </h2>
                    <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                        Most vehicle owners waste months dealing with RTO bureaucracy, multiple visits, and endless paperwork just to remove a simple loan mark.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-error">
                        <div className="flex items-center mb-6">
                            <IconAlertCircleFilled className="h-8 w-8 text-error mr-3"/>
                            <h3 className="text-xl font-bold text-error">Traditional RTO Process</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <IconX className="h-5 w-5 text-error mr-3 mt-0.5 flex-shrink-0"/>
                                <span className="text-secondary-700">Multiple RTO visits (3-5 times)</span>
                            </li>
                            <li className="flex items-start">                        
                                <IconX className="h-5 w-5 text-error mr-3 mt-0.5 flex-shrink-0"/>
                                <span className="text-secondary-700">Long queues (2-4 hours each visit)</span>
                            </li>
                            <li className="flex items-start">
                                <IconX className="h-5 w-5 text-error mr-3 mt-0.5 flex-shrink-0"/>
                                <span className="text-secondary-700">Complex paperwork & documentation</span>
                            </li>
                            <li className="flex items-start">
                                <IconX className="h-5 w-5 text-error mr-3 mt-0.5 flex-shrink-0"/>
                                <span className="text-secondary-700">2-3 months processing time</span>
                            </li>
                            <li className="flex items-start">
                                <IconX className="h-5 w-5 text-error mr-3 mt-0.5 flex-shrink-0"/>
                                <span className="text-secondary-700">Lost work days & travel costs</span>
                            </li>
                        </ul>
                        <div className="mt-6 p-4 bg-error-50 rounded-lg">
                            <p className="text-error font-semibold text-center">Total Time Wasted: 40-60 Hours</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-success">
                        <div className="flex items-center mb-6">
                            <IconCheck className="h-8 w-8 text-success mr-3"/>
                            <h3 className="text-xl font-bold text-success">RCEase Process</h3>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <IconCheck className="h-5 w-5 text-error mr-3 mt-0.5 flex-shrink-0"/>
                                <span className="text-secondary-700">Zero RTO visits required</span>
                            </li>
                            <li className="flex items-start">
                                <IconCheck className="h-5 w-5 text-error mr-3 mt-0.5 flex-shrink-0"/>
                                <span className="text-secondary-700">5-minute online document upload</span>
                            </li>
                            <li className="flex items-start">
                                <IconCheck className="h-5 w-5 text-error mr-3 mt-0.5 flex-shrink-0"/>
                                <span className="text-secondary-700">We handle all paperwork</span>
                            </li>
                            <li className="flex items-start">
                                <IconCheck className="h-5 w-5 text-error mr-3 mt-0.5 flex-shrink-0"/>
                                <span className="text-secondary-700">10-day completion</span>
                            </li>
                            <li className="flex items-start">
                                <IconCheck className="h-5 w-5 text-error mr-3 mt-0.5 flex-shrink-0"/>
                                <span className="text-secondary-700">Home delivery of updated RC</span>
                            </li>
                        </ul>
                        <div className="mt-6 p-4 bg-success-50 rounded-lg">
                            <p className="text-success font-semibold text-center">Total Time Required: 5 Minutes</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
                                <IconCalculator className="h-8 w-8 text-primary"/>
                            </div>
                            <h3 className="text-xl font-bold text-secondary-900 mb-2">{service.title}</h3>
                            <p className="text-secondary-600 mb-6">
                                {service.desc}
                            </p>
                            <div className="text-4xl font-bold text-primary mb-2" id="basicPrice">{service.price}</div>
                            <p className="text-sm text-secondary-500 mb-6">All inclusive pricing</p>
                            <ul className="text-sm text-secondary-600 space-y-2">
                                {service.serviceList.map((item) => (
                                <li className="flex items-center" key={item}>
                                    <IconCheck className="h-4 w-4 text-success mr-2"/>
                                    {item}
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="mt-12 bg-primary-50 rounded-xl p-8 max-w-4xl mx-auto">
                    <PincodeChecker />
                </div>
            </div>
        </section>
    </Fragment> 
  );
}
