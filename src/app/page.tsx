import Image from "next/image";
import styles from "./page.module.css";
import { Fragment } from "react";
import { IconAlertCircle, IconAlertCircleFilled, IconArrowSharpTurnRight, IconBrandWhatsapp, IconCalculator, IconCheck, IconCross, IconSignRight, IconTicket, IconX } from "@tabler/icons-react";

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
                        Skip RTO queues and paperwork maze - we complete your hypothecation removal in 7 days with complete document security.
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
                        <img src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Vehicle RC Document Processing" className="w-full h-64 object-cover rounded-lg mb-6" loading="lazy"  />
                        
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
                        <span className="text-secondary-700">7-day guaranteed completion</span>
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
                <h3 className="text-2xl font-bold text-secondary-900 text-center mb-6">Check Service Availability</h3>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input type="text" id="pincodeInput" placeholder="Enter your pincode" className="form-input flex-1" maxLength={6} />
                    <button className="btn-primary whitespace-nowrap">Check Availability</button>
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
    <section id="testimonials" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                        What Our Customers Say
                    </h2>
                    <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                        Join thousands of satisfied customers who saved time and avoided RTO hassles with RCEase.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="testimonial-card">
                        <div className="flex items-center mb-4">
                            <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Rajesh Kumar" className="w-12 h-12 rounded-full object-cover mr-4" loading="lazy" />
                            <div>
                                <div className="font-semibold text-secondary-900">Rajesh Kumar</div>
                                <div className="text-sm text-secondary-600">Mumbai, Maharashtra</div>
                            </div>
                        </div>
                        <div className="flex mb-3">
                            <svg className="h-5 w-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-5 w-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-5 w-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-5 w-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-5 w-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                        </div>
                        <p className="text-secondary-700 mb-4">
                            "Saved me weeks of RTO visits! My car loan was cleared but the hypothecation mark was still there. RCEase completed everything in just 6 days. Highly recommended!"
                        </p>
                        <div className="text-sm text-success font-medium">✓ Verified Customer</div>
                    </div>

                    <div className="testimonial-card">
                        <div className="flex items-center mb-4">
                            <img src="https://images.pixabay.com/photo/2016/11/21/12/42/beard-1845166_150.jpg" alt="Priya Sharma" className="w-12 h-12 rounded-full object-cover mr-4" loading="lazy" />
                            <div>
                                <div className="font-semibold text-secondary-900">Priya Sharma</div>
                                <div className="text-sm text-secondary-600">Bangalore, Karnataka</div>
                            </div>
                        </div>
                        <div className="flex mb-3">
                            <svg className="h-5 w-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-5 w-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-5 w-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-5 w-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-5 w-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                        </div>
                        <p className="text-secondary-700 mb-4">
                            "Professional service with regular updates. They picked up my documents from home and delivered the updated RC within a week. Worth every rupee!"
                        </p>
                        <div className="text-sm text-success font-medium">✓ Verified Customer</div>
                    </div>

                    <div className="testimonial-card">
                        <div className="flex items-center mb-4">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Amit Patel" className="w-12 h-12 rounded-full object-cover mr-4" loading="lazy" />
                            <div>
                                <div className="font-semibold text-secondary-900">Amit Patel</div>
                                <div className="text-sm text-secondary-600">Ahmedabad, Gujarat</div>
                            </div>
                        </div>
                        <div className="flex mb-3">
                            <svg className="h-5 w-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-5 w-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-5 w-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-5 w-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-5 w-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                        </div>
                        <p className="text-secondary-700 mb-4">
                            "I was skeptical at first, but RCEase delivered exactly what they promised. My bike RC is now clean without any loan mark. Great service!"
                        </p>
                        <div className="text-sm text-success font-medium">✓ Verified Customer</div>
                    </div>
                </div>

                <div className="mt-12 bg-primary-50 rounded-xl p-8 text-center">
                    <div className="flex items-center justify-center mb-4">
                        <svg className="h-8 w-8 text-primary mr-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <h3 className="text-2xl font-bold text-secondary-900">Google Reviews</h3>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                        <div className="text-4xl font-bold text-warning mr-2">4.8</div>
                        <div className="flex">
                            <svg className="h-6 w-6 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-6 w-6 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-6 w-6 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-6 w-6 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            <svg className="h-6 w-6 text-warning" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                        </div>
                    </div>
                    <p className="text-secondary-600 mb-4">Based on 2,847+ verified reviews</p>
                    <a href="https://g.page/r/CRandom123/review" target="_blank" className="btn-secondary">
                        Read All Reviews
                    </a>
                </div>
            </div>
    </section>
</Fragment> 
  );
}
