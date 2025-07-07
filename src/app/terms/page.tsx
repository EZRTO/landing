import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - RCFix</title>
        <meta name="description" content="Read the terms and conditions for using RCFix services." />
      </Head>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 py-20 text-white text-center overflow-hidden">
        <div className="max-w-xl mx-auto px-4 relative z-10 flex flex-col items-center">
          <img src="/file.svg" alt="Terms Icon" className="h-16 w-16 mb-6 drop-shadow-xl" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow">Terms & Conditions</h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow">By using our services, you agree to the following terms:</p>
        </div>
        <svg className="absolute top-0 left-0 w-full h-full opacity-10 z-0" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,197.3C840,181,960,171,1080,176C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </section>
      {/* Card Content */}
      <section className=" mx-auto py-10">
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-10 flex flex-col items-center text-left">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Sample Terms & Conditions</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-4">
            <li>By using our service, you agree to provide accurate information and documents.</li>
            <li>We act as facilitators and are not responsible for delays caused by RTOs, document errors, or third-party service interruptions.</li>
            <li>Refunds will be issued only in case of service failure due to our error, not due to incomplete or incorrect documents.</li>
          </ul>
          <span className="inline-block mt-6 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">Last updated: {new Date().getFullYear()}</span>
        </div>
      </section>
    </>
  );
} 