import { IconBrandX, IconBrandYoutube } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white py-12 border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center mb-4">
                        <svg className="h-8 w-8 text-primary mr-3" viewBox="0 0 32 32" fill="currentColor">
                            <path d="M16 2L4 8v16l12 6 12-6V8L16 2zm0 2.5L25.5 9 16 13.5 6.5 9 16 4.5zM6 10.5l9 4.5v11l-9-4.5v-11zm11 15.5v-11l9-4.5v11l-9 4.5z"/>
                        </svg>
                        <h3 className="text-xl font-bold">RCEase</h3>
                    </div>
                    <p className="text-secondary-300 mb-4">
                        Simplifying vehicle documentation across India with secure, fast, and reliable hypothecation removal services.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="https://www.x.com" target="_blank" rel="noopener noreferrer"><IconBrandX /></Link>
                        <Link href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><IconBrandYoutube/></Link>
                    </div>
                </div>

                <div>
                    <h4 className="mb-4 text-gray-600">About</h4>
                    <ul className="space-y-2 text-secondary-300">
                        <li><Link href="/about-us/" className="hover:text-white">Our Story</Link></li>
                        <li><Link href="/contact-us/" className="hover:text-white">Contact Us</Link></li>
                        <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                        <li><Link href="/blog" className="hover:text-white">Blogs</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="mb-4 text-gray-600">IMPORTANT LINKS</h4>
                    <ul className="space-y-2">
                        <li><Link href="/terms-and-conditions" className="hover:text-white">Terms and Conditions</Link></li>
                        <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link href="/track-application" className="hover:text-white">Track Application</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400">
                <p>&copy; 2025 RCEase. All rights reserved. | Made with ❤️ for Indian vehicle owners</p>
            </div>
        </div>
    </footer>
  );
}
