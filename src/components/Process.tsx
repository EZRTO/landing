'use client';

import { Button } from '@/components/ui/button';

export default function Process() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div
      id="process"
      className="bg-gradient-to-br from-slate-50 to-sky-50 py-20"
    >
      <div className="container mx-auto px-4">
        {/* Problem Statement */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Tired of <span className="text-red-600">RTO Hassles?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Most vehicle owners waste months dealing with RTO bureaucracy,
            multiple visits, and endless paperwork just to remove a simple loan
            mark.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional Process */}
          <div className="bg-white rounded-2xl shadow-xl border border-red-200 overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6">
              <h3 className="text-2xl font-bold flex items-center">
                <svg
                  className="w-8 h-8 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Traditional RTO Process
              </h3>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-700">
                    Multiple RTO visits{' '}
                    <span className="font-semibold text-red-600">
                      (3-5 times)
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-700">
                    Long queues{' '}
                    <span className="font-semibold text-red-600">
                      (2-4 hours each visit)
                    </span>
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-700">
                    Complex paperwork & documentation
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-700">
                    <span className="font-semibold text-red-600">
                      2-3 months
                    </span>{' '}
                    processing time
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-slate-700">
                    Lost work days & travel costs
                  </span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-center text-red-700 font-bold text-lg">
                  Total Time Wasted:{' '}
                  <span className="text-2xl">40-60 Hours</span>
                </p>
              </div>
            </div>
          </div>

          {/* EZRTO Process */}
          <div className="bg-white rounded-2xl shadow-xl border border-green-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6">
              <h3 className="text-2xl font-bold flex items-center">
                <svg
                  className="w-8 h-8 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                EZRTO Process
              </h3>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700">
                    <span className="font-semibold text-green-600">
                      Zero RTO visits
                    </span>{' '}
                    required
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700">
                    <span className="font-semibold text-green-600">
                      5-minute
                    </span>{' '}
                    online document upload
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700">
                    We handle all paperwork
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700">
                    <span className="font-semibold text-green-600">10-day</span>{' '}
                    completion
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700">
                    Home delivery of updated RC
                  </span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-center text-green-700 font-bold text-lg">
                  Total Time Required:{' '}
                  <span className="text-2xl">5 Minutes</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-sky-200 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Ready to Save <span className="text-sky-600">55+ Hours</span>?
            </h3>
            <p className="text-slate-600 mb-6">
              Join thousands of smart vehicle owners who chose the hassle-free
              EZRTO way.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 text-lg shadow-lg transition-transform hover:scale-105"
            >
              Start Your 5-Minute Process Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
