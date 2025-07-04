import Head from "next/head";

export default function Price() {
    return (
        <>
            <Head>
                <title>Price - RCEase</title>
                <meta name="description" content="Price for RCEase hypothecation removal service." />
            </Head>
            <section id="pricing" className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">
                    Transparent Pricing
                </h2>
                <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                    No hidden fees, no surprise charges. See exactly what you pay with our state-wise pricing calculator.
                </p>
            </div>

            {/* State Selector */}
            <div className="max-w-md mx-auto mb-8">
                <label className="block text-sm font-medium text-secondary-700 mb-2">Select Your State</label>
                <select id="stateSelect" className="form-input w-full">
                    <option value="">Choose your state</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="gujarat">Gujarat</option>
                    <option value="delhi">Delhi</option>
                    <option value="tamilnadu">Tamil Nadu</option>
                    <option value="telangana">Telangana</option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="westbengal">West Bengal</option>
                </select>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Basic Package */}
                <div className="bg-white rounded-xl shadow-lg p-8 relative">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-secondary-900 mb-2">Basic Package</h3>
                        <p className="text-secondary-600 mb-6">Perfect for simple hypothecation removal</p>
                        <div className="text-4xl font-bold text-primary mb-2" id="basicPrice">₹1,999</div>
                        <p className="text-sm text-secondary-500 mb-6">All inclusive pricing</p>
                        
                        <ul className="text-left space-y-3 mb-8">
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span className="text-secondary-700">Hypothecation removal</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span className="text-secondary-700">7-day processing</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span className="text-secondary-700">Email support</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span className="text-secondary-700">Digital RC delivery</span>
                            </li>
                        </ul>
                        
                        {/* <button onClick={() => {}} className="btn-primary w-full">Choose Basic</button> */}
                    </div>
                </div>

                {/* Premium Package */}
                <div className="bg-white rounded-xl shadow-lg p-8 relative border-2 border-accent">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-secondary-900 mb-2">Premium Package</h3>
                        <p className="text-secondary-600 mb-6">Complete service with pickup & delivery</p>
                        <div className="text-4xl font-bold text-accent mb-2" id="premiumPrice">₹2,499</div>
                        <p className="text-sm text-secondary-500 mb-6">Save ₹299 vs individual services</p>
                        
                        <ul className="text-left space-y-3 mb-8">
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span className="text-secondary-700">Everything in Basic</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span className="text-secondary-700">Free document pickup</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span className="text-secondary-700">Home delivery of RC</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span className="text-secondary-700">WhatsApp support</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span className="text-secondary-700">Real-time tracking</span>
                            </li>
                        </ul>
                        
                        {/* <button onclick="scrollToUpload()" class="btn-primary w-full bg-accent hover:bg-accent-700">Choose Premium</button> */}
                    </div>
                </div>

                {/* Express Package */}
                <div className="bg-white rounded-xl shadow-lg p-8 relative">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-secondary-900 mb-2">Express Package</h3>
                        <p className="text-secondary-600 mb-6">Fastest processing with priority handling</p>
                        <div className="text-4xl font-bold text-warning mb-2" id="expressPrice">₹3,499</div>
                        <p className="text-sm text-secondary-500 mb-6">3-day guaranteed completion</p>
                        
                        <ul className="text-left space-y-3 mb-8">
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span className="text-secondary-700">Everything in Premium</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span className="text-secondary-700">3-day processing</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span className="text-secondary-700">Priority handling</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span className="text-secondary-700">Dedicated support</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                </svg>
                                <span className="text-secondary-700">Money-back guarantee</span>
                            </li>
                        </ul>
                        
                        {/* <button onclick="scrollToUpload()" class="btn-primary w-full bg-warning hover:bg-warning-600">Choose Express</button> */}
                    </div>
                </div>
            </div>

            {/* Cost Breakdown */}
            <div className="mt-12 bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-secondary-900 text-center mb-6">Cost Breakdown</h3>
                <div id="costBreakdown" className="hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-secondary-900 mb-3">Government Fees</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex justify-between">
                                    <span className="text-secondary-600">RTO Processing Fee</span>
                                    <span className="font-medium" id="rtoFee">₹200</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-secondary-600">Form Fee</span>
                                    <span className="font-medium" id="formFee">₹50</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-secondary-600">Documentation Fee</span>
                                    <span className="font-medium" id="docFee">₹100</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-secondary-900 mb-3">Service Charges</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="flex justify-between">
                                    <span className="text-secondary-600">Processing Charge</span>
                                    <span className="font-medium" id="processingFee">₹1,299</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-secondary-600">Agent Fee</span>
                                    <span className="font-medium" id="agentFee">₹300</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-secondary-600">Platform Fee</span>
                                    <span className="font-medium" id="platformFee">₹50</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-secondary-200 mt-6 pt-4">
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-secondary-900">Total Amount</span>
                            <span className="text-2xl font-bold text-primary" id="totalAmount">₹1,999</span>
                        </div>
                    </div>
                </div>
                <div id="selectStateMessage" className="text-center text-secondary-600">
                    Select your state above to see detailed cost breakdown
                </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="mt-12 bg-success-50 rounded-xl p-8 text-center max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-4">
                    <svg className="h-12 w-12 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <h3 className="text-2xl font-bold text-secondary-900">100% Money-Back Guarantee</h3>
                </div>
                <p className="text-lg text-secondary-700 mb-6">
                    If we don't complete your hypothecation removal within the promised timeframe, get your full money back. No questions asked.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center justify-center">
                        <svg className="h-5 w-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        <span className="text-secondary-700">No hidden conditions</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <svg className="h-5 w-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        <span className="text-secondary-700">Full refund in 24 hours</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <svg className="h-5 w-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                        </svg>
                        <span className="text-secondary-700">Risk-free service</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}