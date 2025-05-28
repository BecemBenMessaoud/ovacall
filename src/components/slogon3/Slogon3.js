import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BannerContainer } from './Slogon3.styled';

// Replace with your real images
import Step1 from '../../assets/images/illustration2.webp';
import Step2 from '../../assets/images/illustration2.webp';
import Step3 from '../../assets/images/illustration2.webp';
import Step4 from '../../assets/images/illustration2.webp';

const steps = [
  {
    title: 'Discovery & needs assessment',
    description:
      'We start by understanding your needs, challenges, and goals... Let the insights shape the ideal solution for your business.',
    icon: Step1,
  },
  {
    title: 'Tailored team setup',
    description:
      'We hand-pick a team, train them, and tailor KPIs to hit your conversion and satisfaction goals.',
    icon: Step2,
  },
  {
    title: 'Easy integration',
    description:
      'We integrate with your systems so your customers enjoy a seamless experience — like we’re part of your in-house team.',
    icon: Step3,
  },
  {
    title: 'Long-term optimization',
    description:
      'We refine processes over time using data, team feedback, and KPIs to continuously improve results.',
    icon: Step4,
  },
];

const Slogon3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BannerContainer className="relative bg-white py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-500 border border-blue-200 rounded-full uppercase tracking-widest">
          Process
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          How it works with Ovacall?
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Wavy SVG line with 4 waves */}
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-12 z-0"
          viewBox="0 0 100 800"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="
              M50 0 
              Q 90 100, 50 200 
              Q 10 300, 50 400 
              Q 90 500, 50 600 
              Q 10 700, 50 800
            "
            stroke="#3B82F6"
            strokeWidth="3"
            strokeDasharray="6 8"
          />
        </svg>

        {/* Timeline Steps */}
        <div className="space-y-32 relative z-10">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 ${
                  isLeft ? '' : 'md:flex-row-reverse'
                }`}
                data-aos="fade-up"
              >
                {/* Icon */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={step.icon}
                    alt={`step-${index + 1}`}
                    className="w-24 md:w-28 h-auto"
                  />
                </div>

                {/* Dot on center line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white z-20"></div>

                {/* Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </BannerContainer>
  );
};

export default Slogon3;
