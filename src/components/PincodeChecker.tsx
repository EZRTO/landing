"use client";

import { useState } from "react";

export default function PincodeChecker() {
  const [pincode, setPincode] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<null | { available: boolean; eta?: string; agent?: string }>(null);

  const validate = (code: string) => /^[0-9]{6}$/.test(code);

  const simulateCheck = async (code: string) => {
    // Simulate API latency
    await new Promise((r) => setTimeout(r, 700));
    // Demo logic: service available for common metro prefixes
    const availablePrefixes = ["11", "12", "40", "41", "50", "56", "60", "70", "75", "80"]; // Delhi, Pune/Mumbai, Bangalore, Chennai, etc.
    const isAvailable = availablePrefixes.includes(code.slice(0, 2));
    return {
      available: isAvailable,
      eta: isAvailable ? "10 days" : undefined,
      agent: isAvailable ? "Verified ✓" : undefined,
    };
  };

  const onCheck = async () => {
    setError(null);
    setResult(null);
    const trimmed = pincode.trim();
    if (!validate(trimmed)) {
      setError("Enter a valid 6-digit pincode");
      return;
    }
    setIsChecking(true);
    try {
      const res = await simulateCheck(trimmed);
      setResult(res);
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <div className="mt-12 bg-primary-50 rounded-xl p-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-secondary-900 text-center mb-6">Check Service Availability</h3>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={pincode}
          onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
          placeholder="Enter your pincode"
          className="form-input flex-1"
          maxLength={6}
          aria-label="Pincode"
        />
        <button
          className="btn-primary whitespace-nowrap disabled:opacity-60"
          onClick={onCheck}
          disabled={isChecking || pincode.length !== 6}
        >
          {isChecking ? "Checking..." : "Check Availability"}
        </button>
      </div>
      {error && (
        <p className="text-error text-sm text-center mt-3">{error}</p>
      )}
      {result && (
        <div className="mt-6">
          {result.available ? (
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-success text-lg font-semibold mb-2">✓ Service Available</div>
              <p className="text-secondary-600 mb-4">We provide services in your area with verified local agents.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Estimated Completion:</span>
                  <span className="text-primary ml-1">{result.eta}</span>
                </div>
                <div>
                  <span className="font-medium">Local Agent:</span>
                  <span className="text-success ml-1">{result.agent}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="text-error text-lg font-semibold mb-2">✗ Currently Unavailable</div>
              <p className="text-secondary-600 mb-4">We are expanding rapidly. Leave your pincode and we will notify you once we launch in your area.</p>
              <div className="text-sm text-secondary-500">Try nearby metro pincode for faster service.</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 