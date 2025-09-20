import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'RTO Services - EZRTO',
  description:
    'Explore professional RTO services like Hypothecation Termination, Hypothecation Removal, Duplicate RC, NOC Assistance, and Ownership Transfer.',
  keywords: [
    'easy rto',
    'ezrto',
    'rto service',
    'hypothecation termination',
    'hypothecation removal',
    'duplicate RC',
    'NOC',
    'ownership transfer',
  ],
};

const services = [
  {
    title: 'Hypothecation Termination',
    description:
      'Remove hypothecation from your vehicle documents easily and legally.',
    link: '/services/hypothecation-termination',
  },
  {
    title: 'Ownership Transfer',
    description:
      'Transfer vehicle ownership smoothly with proper RTO documentation.',
    link: '/services/ownership-transfer',
  },
  {
    title: 'Duplicate RC',
    description:
      'Get a duplicate RC card hassle-free with doorstep assistance.',
    link: '/services/duplicate-rc',
  },
  {
    title: 'Address Change in RC',
    description:
      'Update your vehicle registration address quickly and easily.',
    link: '/services/address-change',
  },
  {
    title: 'NOC Assistance',
    description: 'Get a No Objection Certificate (NOC) from the RTO with ease.',
    link: '/services/noc-assistance',
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Our RTO Services
      </h1>
      <p className="text-lg text-gray-600 mb-12">
        EZRTO provides professional vehicle documentation services with
        doorstep delivery for all your RTO needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link
              href={service.link}
              className="text-blue-600 hover:underline font-medium"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
