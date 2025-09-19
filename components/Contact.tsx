'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert(
      'Thank you for your message! We will get back to you within 24 hours.'
    );
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Get Your <span className="text-sky-700">Free Consultation</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to simplify your RTO processes? Contact our experts today for
            personalized assistance and transparent pricing for all your vehicle
            documentation needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-slate-700 font-medium"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-slate-300 focus:border-sky-500 focus:ring-sky-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-slate-700 font-medium"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-slate-300 focus:border-sky-500 focus:ring-sky-500"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="border-slate-300 focus:border-sky-500 focus:ring-sky-500"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-slate-700 font-medium"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="border-slate-300 focus:border-sky-500 focus:ring-sky-500"
                    placeholder="Tell us about your RTO service needs..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-sky-700 hover:bg-sky-800 text-white py-3 text-lg"
                >
                  Get Free Consultation
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-slate-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-sky-100 p-3 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-sky-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Phone</h4>
                      <p className="text-slate-600">+1 (555) 123-4567</p>
                      <p className="text-sm text-slate-500">
                        Available 9 AM - 7 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-sky-100 p-3 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-sky-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Email</h4>
                      <p className="text-slate-600">info@rtoservices.com</p>
                      <p className="text-sm text-slate-500">
                        We respond within 2 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-sky-100 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-sky-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">Address</h4>
                      <p className="text-slate-600">
                        123 Business Center, Suite 456
                        <br />
                        Downtown District, City 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-sky-100 p-3 rounded-lg flex-shrink-0">
                      <Clock className="h-6 w-6 text-sky-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        Business Hours
                      </h4>
                      <p className="text-slate-600">
                        Monday - Friday: 9:00 AM - 7:00 PM
                        <br />
                        Saturday: 10:00 AM - 5:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
