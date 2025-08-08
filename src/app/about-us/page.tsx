import { Metadata } from "next";
import { 
  IconArrowUp, 
  IconEye, 
  IconHeart, 
  IconShield, 
  IconUser, 
  IconBolt,
  IconTarget
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "About RTOEase - Remove Hypothecation Experts",
  description: "Learn about RTOEase, our mission, vision, and how we help vehicle owners across India remove hypothecation from their RC.",
};

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight mb-6">
                    About <span className="text-primary">RTOEase</span>
                </h1>
                <p className="text-lg sm:text-xl text-secondary-600 leading-relaxed max-w-4xl mx-auto">
                  We&apos;re a tech-enabled RTO service startup based in India, focused on making government paperwork easier for everyone.
                </p>
                <p className="text-lg sm:text-xl text-secondary-600 mb-1 leading-relaxed max-w-4xl mx-auto">
                  Our mission is to simplify post-loan vehicle formalities — starting with hypothecation removal.
                  With an experienced team and a growing agent network, we&apos;ve already helped hundreds of customers reclaim full ownership of their vehicles.
                </p>     
            </div>
        </div>
    </section>

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-900 mb-6">Our Journey</h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Every great solution starts with a problem. Here&apos;s how our founders&apos; frustration became India&apos;s most trusted vehicle documentation platform.
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
                                    <p className="text-secondary-600 text-sm">Our founder Saurabh Mishra spent 6 months, made 12 RTO visits, and took 8 leave days just to remove a hypothecation mark from his car&apos;s RC after loan closure.</p>
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
                                    <p className="text-secondary-600 text-sm">&quot;There has to be a better way,&quot; thought Rajesh. That frustration became the seed for RTOEase - a platform to spare others this ordeal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="space-y-6">
                        <div className="bg-success-50 border-l-4 border-success p-6 rounded-r-lg">
                            <h4 className="text-lg font-semibold text-success-800 mb-2">Founded</h4>
                            <p className="text-secondary-700">RTOEase was founded with a vision to simplify RTO processes for every Indian vehicle owner.</p>
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
                        <IconArrowUp className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">Our Mission</h3>
                    <p className="text-secondary-600 leading-relaxed">
                        To eliminate the frustration of vehicle documentation by providing secure, efficient, and transparent services that save time and reduce stress for vehicle owners across India.
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-success-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                        <IconEye className="h-8 w-8 text-success" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">Our Vision</h3>
                    <p className="text-secondary-600 leading-relaxed">
                        To become India&apos;s most trusted digital platform for all vehicle lifecycle services, where every interaction is seamless, secure, and customer-centric.
                    </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="bg-accent-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                        <IconHeart className="h-8 w-8 text-accent" />
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
                            <IconTarget className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-semibold text-secondary-900 mb-2">Transparency</h4>
                        <p className="text-sm text-secondary-600">Clear pricing, open communication, and honest timelines</p>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                            <IconShield className="h-6 w-6 text-green-600" />
                        </div>
                        <h4 className="font-semibold text-secondary-900 mb-2">Security</h4>
                        <p className="text-sm text-secondary-600">Bank-grade encryption and strict data protection protocols</p>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                            <IconUser className="h-6 w-6 text-purple-600" />
                        </div>
                        <h4 className="font-semibold text-secondary-900 mb-2">Customer First</h4>
                        <p className="text-sm text-secondary-600">Every decision is made with customer benefit in mind</p>
                    </div>
                    
                    <div className="text-center">
                        <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                            <IconBolt className="h-6 w-6 text-yellow-600" />
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