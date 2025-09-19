import { FileText, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-sky-400" />
              <span className="text-xl font-bold">EZRTO</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Professional RTO services with expert handling of all your vehicle documentation needs. 
              Trusted by thousands of customers across the country.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-sky-700 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-sky-700 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-sky-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-full hover:bg-sky-700 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-400">Our Services</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Hypothecation Termination</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Duplicate RC Issuance</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Address Change on RC</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">NOC Assistance</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Ownership Transfer</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Doorstep Delivery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-400">Quick Links</h3>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-sky-400 transition-colors">How It Works</a></li>
              <li><a href="#contact" className="hover:text-sky-400 transition-colors">Contact Us</a></li>
              <li><a href="/privacy-policy" className="hover:text-sky-400 transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-sky-400 transition-colors">Terms of Service</a></li>
              <li><a href="/faq" className="hover:text-sky-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-400">Contact Info</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sky-400 flex-shrink-0" />
                <span>info@rtoservices.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 text-sky-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>123 Business Center, Suite 456<br />Downtown District, City 12345</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-slate-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} EZRTO. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Terms of Service</a>
            <a href="/cookie-policy" className="text-slate-400 hover:text-sky-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}