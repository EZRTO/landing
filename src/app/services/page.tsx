import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hypothecation Termination | EZRTO - Easy RTO Services",
  description:
    "EZRTO offers fast and reliable hypothecation termination services with doorstep vehicle documentation support. Simplify your RC process today!",
  keywords: "hypothecation termination, rto service, vehicle hypothecation removal, RC process",
  alternates: {
    canonical: "https://ezrto.in/services/hypothecation-termination",
  },
};

export default function HypothecationTermination() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Hypothecation Termination</h1>
      <p>
        EZRTO provides hassle-free <strong>hypothecation termination</strong> services.
        We help you remove hypothecation from your vehicle RC seamlessly with 
        expert assistance and doorstep service.
      </p>
    </main>
  );
}
