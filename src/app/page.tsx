import Image from "next/image";
import styles from "./page.module.css";
import { Fragment } from "react";

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
                    
                    {/* Trust Bar */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-sm">
                        <div className="flex items-center">
                          <svg className="h-5 w-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                          </svg>
                            <span className="font-semibold text-secondary-700">10,000+ RCs processed</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="h-5 w-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span className="font-semibold text-secondary-700">Average 7-day completion</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="h-5 w-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/>
                            </svg>
                            <span className="font-semibold text-secondary-700">All Indian states covered</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="btn-primary text-lg px-8 py-4 shadow-cta hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                            Get Started Now
                        </button>
                        <a href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20help%20with%20RC%20hypothecation%20removal" target="_blank" className="bg-success text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-success-700 transition-all duration-200 text-lg text-center">
                            <svg className="inline h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                            </svg>
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

        {/* Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Traditional RTO Process */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-error">
                <div className="flex items-center mb-6">
                    <svg className="h-8 w-8 text-error mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                    <h3 className="text-xl font-bold text-error">Traditional RTO Process</h3>
                </div>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <svg className="h-5 w-5 text-error mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                        <span className="text-secondary-700">Multiple RTO visits (3-5 times)</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="h-5 w-5 text-error mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                        <span className="text-secondary-700">Long queues (2-4 hours each visit)</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="h-5 w-5 text-error mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                        <span className="text-secondary-700">Complex paperwork & documentation</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="h-5 w-5 text-error mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                        <span className="text-secondary-700">2-3 months processing time</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="h-5 w-5 text-error mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                        </svg>
                        <span className="text-secondary-700">Lost work days & travel costs</span>
                    </li>
                </ul>
                <div className="mt-6 p-4 bg-error-50 rounded-lg">
                    <p className="text-error font-semibold text-center">Total Time Wasted: 40-60 Hours</p>
                </div>
            </div>

            {/* RCEase Process */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-success">
                <div className="flex items-center mb-6">
                    <svg className="h-8 w-8 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <h3 className="text-xl font-bold text-success">RCEase Process</h3>
                </div>
                <ul className="space-y-3">
                    <li className="flex items-start">
                        <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        <span className="text-secondary-700">Zero RTO visits required</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        <span className="text-secondary-700">5-minute online document upload</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        <span className="text-secondary-700">We handle all paperwork</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        <span className="text-secondary-700">7-day guaranteed completion</span>
                    </li>
                    <li className="flex items-start">
                        <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        <span className="text-secondary-700">Home delivery of updated RC</span>
                    </li>
                </ul>
                <div className="mt-6 p-4 bg-success-50 rounded-lg">
                    <p className="text-success font-semibold text-center">Total Time Required: 5 Minutes</p>
                </div>
            </div>
        </div>

        {/* Time Waste Calculator */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary-900 text-center mb-6">Calculate Your Time & Money Savings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">Select Your City</label>
                    <select id="citySelect" className="form-input w-full">
                        <option value="">Choose your city</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="chennai">Chennai</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="pune">Pune</option>
                        <option value="kolkata">Kolkata</option>
                        <option value="ahmedabad">Ahmedabad</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">Vehicle Type</label>
                    <select id="vehicleSelect" className="form-input w-full">
                        <option value="">Choose vehicle type</option>
                        <option value="car">Car</option>
                        <option value="bike">Motorcycle</option>
                        <option value="commercial">Commercial Vehicle</option>
                    </select>
                </div>
            </div>
            <div id="savingsResult" className="mt-6 p-6 bg-accent-50 rounded-lg hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                        <div className="text-2xl font-bold text-accent" id="timeSaved">0</div>
                        <div className="text-sm text-secondary-600">Hours Saved</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-accent" id="moneySaved">₹0</div>
                        <div className="text-sm text-secondary-600">Money Saved</div>
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-accent" id="visitsSaved">0</div>
                        <div className="text-sm text-secondary-600">RTO Visits Avoided</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</Fragment> 
  );
}
