import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Slogon4 = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#0D1321] rounded-2xl px-4 py-12 md:px-16 md:py-20 text-white overflow-hidden relative">
      {/* Background grid effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="w-full h-full bg-gradient-to-b from-[#1a1f2e] to-[#0D1321] opacity-60 grid grid-cols-12">
          <div className="col-span-12 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:30px_30px]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div data-aos="fade-up" className="mb-6">
          <div className="flex justify-center mb-4">
            <div className="bg-white p-4 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2h-4" />
                <path d="M3 9V5a2 2 0 0 1 2-2h4" />
                <polyline points="17 8 21 8 21 4" />
                <polyline points="3 20 3 16 7 16" />
                <line x1="21" x2="3" y1="3" y2="21" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">Let's Chat!</h1>
        </div>

        <button className="bg-white text-black font-semibold px-6 py-2 rounded-md hover:bg-gray-200 transition-all">
          Book your free consultation
        </button>

        {/* Features */}
        <div className="mt-10 flex flex-col md:flex-row gap-6 md:gap-16 items-center justify-center">
          <FeatureItem label="Custom Strategies" />
          <FeatureItem label="Team of experts" />
          <FeatureItem label="Free consultation" />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ label }) => (
  <div className="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      className="w-5 h-5 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
    <span className="text-sm md:text-base font-medium">{label}</span>
  </div>
);

export default Slogon4;
