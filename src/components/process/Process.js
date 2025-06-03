import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BannerContainer } from './Process.styled';

// Replace with your real images
import Step1 from '../../assets/images/illustration3.webp';
import Step2 from '../../assets/images/illustration2.webp';
import Step3 from '../../assets/images/illustration1.webp';
import Step4 from '../../assets/images/illustration4.webp';
import back1 from '../../assets/images/01.png';
import back2 from '../../assets/images/02.png';
import back3 from '../../assets/images/03.png';
import back4 from '../../assets/images/04.png';

const steps = [
  {
    title: 'Discovery & needs assessment',
    description:
      'We start by understanding your needs, challenges, and sales goals. In a free consultation, we’ll ask the right questions to learn about your market, your customers, and what success means to you. This lets us shape the ideal solution for your business..',
    icon: Step1,
    bgImage: back1, // Add background image for each step
  },
  {
    title: 'Tailored team setup',
    description:
      'Based on your strategy, we hand-pick a team of trained agents who match your industry and brand. We brief and train them on your products, values, and CRM tools. Ovacall builds you a mini in-house team, working from our Tunisian hub. We also set clear KPIs and reporting metrics to match your goals, like lead conversion rates and customer satisfaction scores.',
    icon: Step2,
    bgImage: back2, // Add background image for each step
  },
  {
    title: 'Easy integration',
    description:
      'Whether you are using your own CRM or ours, our team fits right into your daily workflow. We work closely with your systems and processes so it feels like we are part of your in-house team. The result? Consistent, high-quality service your customers can count on.',
    icon: Step3,
    bgImage: back3, // Add background image for each step
  },
  {
    title: 'Long-term optimization',
    description:
      'We call, sell, and improve. We track key metrics and gather feedback to adjust and optimize our service based on your evolving needs.  .',
    icon: Step4,
    bgImage: back4, // Add background image for each step
  },
];

const Process = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BannerContainer  id="Process" className="relative bg-white py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-500 border border-blue-200 rounded-full uppercase tracking-widest">
          Process
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
        Our proven 4-steps approach <br/>to a successful partnership
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Wavy SVG line */}
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-12 z-0"
          viewBox="0 0 100 800"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M50 0 Q 90 100, 50 200 Q 10 300, 50 400 Q 90 500, 50 600 Q 10 700, 50 800"
            stroke="#3B82F6"
            strokeWidth="3"
            strokeDasharray="6 8"
          />
        </svg>

        {/* Timeline Steps */}
        <div className="space-y-32 relative z-10">
          {steps.map((step, index) => {
            const isReversed = index % 2 === 0; // Start with image on right
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 ${
                  isReversed ? 'md:flex-row-reverse' : ''
                }`}
                data-aos="fade-up"
              >
                {/* Icon */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={step.icon}
                    alt={`step-${index + 1}`}
                    className="w-40 md:w-56 h-auto"
                  />
                </div>

                {/* Dot on center line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-blue-500 rounded-full border-4 border-white z-20"></div>

                {/* Text with background image */}
                <div
                  className={`w-full md:w-1/2 text-center ${isReversed ? 'md:text-left' : 'md:text-right'}`}
                  style={{
                    backgroundImage: `url(${step.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '50px',
                    borderRadius: '8px',
                    color: 'black',
                  }}
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </BannerContainer>
  );
};

export default Process;
