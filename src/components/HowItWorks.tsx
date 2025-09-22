import { Card, CardContent } from '@/components/ui/card';
import { FileText, Cog, Truck } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: FileText,
      title: 'Submit Your Request',
      description:
        'Fill out our simple form with your requirements and upload necessary documents. Our team reviews everything within 24 hours.',
      step: '01',
    },
    {
      icon: Cog,
      title: 'We Handle the Paperwork',
      description:
        'Our experienced professionals process your application and coordinate with RTO officials to ensure smooth completion.',
      step: '02',
    },
    {
      icon: Truck,
      title: 'Get Doorstep Delivery',
      description:
        'Receive your completed documents at your doorstep with our secure delivery service. Track your order in real-time.',
      step: '03',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 overflow-hidden">
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-sky-400 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
            How It <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-colors duration-300">Works</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Getting your RTO services completed is simple with our streamlined
            3-step process. Professional handling from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative">
          <div className="hidden md:block absolute top-[4.5rem] left-1/6 right-1/6 h-1 bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>

          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative group bg-white/90 backdrop-blur-sm border border-slate-200 hover:border-sky-300 transition-all duration-500 hover:shadow-2xl rounded-2xl overflow-hidden"
            >
              <CardContent className="p-10 text-center relative z-10">
                <div className="relative mb-8 flex items-center justify-center">                  
                  <div className="relative w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="absolute -top-10 text-6xl font-extrabold text-sky-50 select-none">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="relative max-w-2xl mx-auto rounded-2xl p-10 bg-white/60 backdrop-blur-md border border-slate-200 shadow-xl">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-slate-600 mb-6 text-lg">
              Join thousands of satisfied customers who trust us with their RTO
              needs. Professional service, guaranteed results.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-slate-500">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                100% Success Rate
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Secure Process
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
