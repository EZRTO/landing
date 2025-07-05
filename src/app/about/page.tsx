"use client";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About RCFix - Remove Hypothecation Experts</title>
        <meta name="description" content="Learn about RCFix, our mission, vision, and how we help vehicle owners across India remove hypothecation from their RC." />
      </Head>
      
      <section className="bg-gradient-to-br from-primary-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight mb-6">
                    About <span className="text-primary">RCEase</span>
                </h1>
                <p className="text-lg sm:text-xl text-secondary-600 leading-relaxed max-w-4xl mx-auto">
                  We're a tech-enabled RTO service startup based in India, focused on making government paperwork easier for everyone.
                </p>
                <p className="text-lg sm:text-xl text-secondary-600 mb-1 leading-relaxed max-w-4xl mx-auto">
                  Our mission is to simplify post-loan vehicle formalities — starting with hypothecation removal.
                  With an experienced team and a growing agent network, we've already helped hundreds of customers reclaim full ownership of their vehicles.
                </p>     
            </div>
        </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">Our Journey</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Every great solution starts with a problem. Here's how our founders' frustration became India's most trusted vehicle documentation platform.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="bg-primary-50 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-secondary-900 mb-6">The Problem That Started It All</h3>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <div className="bg-error text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</div>
                                <div>
                                    <h4 className="font-semibold text-secondary-800 mb-2">The RTO Marathon</h4>
                                    <p className="text-secondary-600 text-sm">Our founder Rajesh spent 6 months, made 12 RTO visits, and took 8 leave days just to remove a hypothecation mark from his car's RC after loan closure.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-warning text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</div>
                                <div>
                                    <h4 className="font-semibold text-secondary-800 mb-2">The Broken System</h4>
                                    <p className="text-secondary-600 text-sm">Long queues, confusing paperwork, missing documents, and endless back-and-forth with banks and RTO officials.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-success text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</div>
                                <div>
                                    <h4 className="font-semibold text-secondary-800 mb-2">The Eureka Moment</h4>
                                    <p className="text-secondary-600 text-sm">"There has to be a better way," thought Rajesh. That frustration became the seed for RCEase - a platform to spare others this ordeal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="space-y-6">
                        <div className="bg-success-50 border-l-4 border-success p-6 rounded-r-lg">
                            <h4 className="text-lg font-semibold text-success-800 mb-2">Founded</h4>
                            <p className="text-secondary-700">RTOease was founded with a vision to simplify RTO processes for every Indian vehicle owner.</p>
                        </div>
                        
                        <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg">
                            <h4 className="text-lg font-semibold text-primary-800 mb-2">Pan-India Expansion</h4>
                            <p className="text-secondary-700">We expanded our services to cover all major cities and states across India.</p>
                        </div>
                        
                        <div className="bg-purple-50 border-l-4 border-accent p-6 rounded-r-lg">
                            <h4 className="text-lg font-semibold text-accent-800 mb-2">Innovation</h4>
                            <p className="text-secondary-700">Launched AI-powered document verification, expanded to all major cities, and introduced 3-day express processing.</p>
                        </div>
                        
                        <div className="bg-yellow-50 border-l-4 border-warning p-6 rounded-r-lg">
                            <h4 className="text-lg font-semibold text-warning-800 mb-2">The Future</h4>
                            <p className="text-secondary-700">Expanding to complete vehicle lifecycle services while maintaining our core promise: no RTO visits, no hassles, just results.</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </section>
    <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">Our Mission, Vision & Values</h2>
                <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                    These principles guide every decision we make and every service we deliver.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                        <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">Our Mission</h3>
                    <p className="text-secondary-600 leading-relaxed">
                        To eliminate the frustration of vehicle documentation by providing secure, efficient, and transparent services that save time and reduce stress for vehicle owners across India.
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-success-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                        <svg className="h-8 w-8 text-success" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">Our Vision</h3>
                    <p className="text-secondary-600 leading-relaxed">
                        To become India's most trusted digital platform for all vehicle lifecycle services, where every interaction is seamless, secure, and customer-centric.
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                        <svg className="h-8 w-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">Our Values</h3>
                    <p className="text-secondary-600 leading-relaxed">
                        Transparency in every process, security in every transaction, and customer-first approach in every decision. We believe trust is earned through consistent delivery.
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-secondary-900 text-center mb-8">Our Core Values in Action</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                            <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <h4 className="font-semibold text-secondary-900 mb-2">Transparency</h4>
                        <p className="text-sm text-secondary-600">Clear pricing, open communication, and honest timelines</p>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                            <svg className="h-6 w-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <h4 className="font-semibold text-secondary-900 mb-2">Security</h4>
                        <p className="text-sm text-secondary-600">Bank-grade encryption and strict data protection protocols</p>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                            <svg className="h-6 w-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <h4 className="font-semibold text-secondary-900 mb-2">Customer First</h4>
                        <p className="text-sm text-secondary-600">Every decision is made with customer benefit in mind</p>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                            <svg className="h-6 w-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <h4 className="font-semibold text-secondary-900 mb-2">Innovation</h4>
                        <p className="text-sm text-secondary-600">Continuously improving through technology and feedback</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    </>
  );
} 