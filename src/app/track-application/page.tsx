"use client";
import { useState } from "react";
import { IconSearch, IconClock, IconAlertCircle, IconCircleCheck } from "@tabler/icons-react";

interface TrackingStep {
  id: number;
  title: string;
  description: string;
  status: "completed" | "active" | "pending";
  date: string;
  time: string;
}

interface TrackingData {
  trackingNumber: string;
  status: string;
  applicationType: string;
  vehicleNumber: string;
  submittedDate: string;
  estimatedCompletion: string;
  steps: TrackingStep[];
}

export default function TrackApplication() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);

  const sampleTrackingData: TrackingData = {
    trackingNumber: "RTOEASE2024001",
    status: "Processing",
    applicationType: "Hypothecation Removal",
    vehicleNumber: "MH12AB1234",
    submittedDate: "March 15, 2024",
    estimatedCompletion: "March 22, 2024",
    steps: [
      {
        id: 1,
        title: "Application Submitted",
        description: "Your application has been successfully submitted",
        status: "completed",
        date: "March 15, 2024",
        time: "10:30 AM"
      },
      {
        id: 2,
        title: "Document Verification",
        description: "All documents have been verified and approved",
        status: "completed",
        date: "March 16, 2024",
        time: "2:15 PM"
      },
      {
        id: 3,
        title: "RTO Submission",
        description: "Application submitted to RTO for processing",
        status: "completed",
        date: "March 17, 2024",
        time: "11:45 AM"
      },
      {
        id: 4,
        title: "RTO Processing",
        description: "Currently being processed at RTO office",
        status: "active",
        date: "March 18, 2024",
        time: "9:00 AM"
      },
      {
        id: 5,
        title: "Approval Pending",
        description: "Waiting for RTO approval",
        status: "pending",
        date: "Expected: March 20, 2024",
        time: ""
      },
      {
        id: 6,
        title: "Document Ready",
        description: "Updated RC will be ready for collection",
        status: "pending",
        date: "Expected: March 22, 2024",
        time: ""
      }
    ]
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setIsTracking(true);
      setTimeout(() => {
        setTrackingData(sampleTrackingData);
        setIsTracking(false);
      }, 1000);
    }
  };

  const getStatusIcon = (status: "completed" | "active" | "pending") => {
    switch (status) {
      case "completed":
        return <IconCircleCheck className="h-6 w-6 text-success" />;
      case "active":
        return <IconClock className="h-6 w-6 text-primary" />;
      case "pending":
        return <IconAlertCircle className="h-6 w-6 text-gray-400" />;
      default:
        return <IconClock className="h-6 w-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: "completed" | "active" | "pending") => {
    switch (status) {
      case "completed":
        return "border-success bg-success-50";
      case "active":
        return "border-primary bg-primary-50";
      case "pending":
        return "border-gray-200 bg-gray-50";
      default:
        return "border-gray-200 bg-gray-50";
    }
  };

  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-900 leading-tight">
                <span className="text-primary">Track Your Application</span>
              </h1>
              <p className="mb-6 font-semibold text-secondary-700">Monitor your application progress in real-time</p>
              <p className="text-lg sm:text-xl text-secondary-600 mb-8 leading-relaxed">
                Enter your tracking number to see the current status and step-by-step progress of your application.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Enter Your Tracking Number</h2>
            <form onSubmit={handleTrack} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number (e.g., RTOEASE2024001)"
                  className="form-input flex-1 w-full min-w-0"
                  required
                />
                <button
                  type="submit"
                  disabled={isTracking}
                  className="btn-primary w-full sm:w-auto px-8 py-3 shadow-cta hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50"
                >
                  {isTracking ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Tracking...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <IconSearch className="h-5 w-5" />
                      Track
                    </div>
                  )}
                </button>
              </div>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Try with sample tracking number: <span className="font-mono text-primary">RTOEASE2024001</span>
              </p>
            </div>
          </div>

          {trackingData && (
            <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 p-6 bg-primary-50 rounded-xl">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Application Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tracking Number:</span>
                      <span className="font-mono font-medium">{trackingData.trackingNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Application Type:</span>
                      <span className="font-medium">{trackingData.applicationType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vehicle Number:</span>
                      <span className="font-medium">{trackingData.vehicleNumber}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">Timeline</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Submitted:</span>
                      <span className="font-medium">{trackingData.submittedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Completion:</span>
                      <span className="font-medium">{trackingData.estimatedCompletion}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Current Status:</span>
                      <span className="font-medium text-primary">{trackingData.status}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-6">Application Progress</h3>
                <div className="space-y-6">
                  {trackingData.steps.map((step, index) => (
                    <div key={step.id} className="relative">
                      {index < trackingData.steps.length - 1 && (
                        <div className={`absolute left-6 top-12 w-0.5 h-16 ${
                          step.status === "completed" ? "bg-success" : "bg-gray-200"
                        }`}></div>
                      )}
                      
                      <div className={`flex items-start gap-4 p-4 rounded-xl border-2 ${getStatusColor(step.status)}`}>
                        <div className="flex-shrink-0">
                          {getStatusIcon(step.status)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>{step.date}</span>
                            {step.time && <span>{step.time}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-xl text-center">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">Need Help?</h4>
                <p className="text-gray-600 mb-4">
                  If you have any questions about your application status, our support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact-us" 
                    className="btn-primary px-6 py-3 shadow-cta hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                  >
                    Contact Support
                  </a>
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-success text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-success-700 transition-all duration-200"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
