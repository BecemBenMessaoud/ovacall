import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BannerContainer } from './Process.styled';

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
    bgImage: back1,
  },
  {
    title: 'Tailored team setup',
    description:
      'Based on your strategy, we hand-pick a team of trained agents who match your industry and brand. We brief and train them on your products, values, and CRM tools. Ovacall builds you a mini in-house team, working from our Tunisian hub. We also set clear KPIs and reporting metrics to match your goals, like lead conversion rates and customer satisfaction scores.',
    icon: Step2,
    bgImage: back2,
  },
  {
    title: 'Easy integration',
    description:
      'Whether you are using your own CRM or ours, our team fits right into your daily workflow. We work closely with your systems and processes so it feels like we are part of your in-house team. The result? Consistent, high-quality service your customers can count on.',
    icon: Step3,
    bgImage: back3,
  },
  {
    title: 'Long-term optimization',
    description:
      'We call, sell, and improve. We track key metrics and gather feedback to adjust and optimize our service based on your evolving needs.  .',
    icon: Step4,
    bgImage: back4,
  },
];

const Process = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BannerContainer id="Process" className="relative bg-white py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <span
          className="inline-flex items-center justify-center text-sm font-semibold text-[#3289FF] uppercase"
          style={{
            width: '142px',
            height: '40px',
            borderRadius: '24px',
            border: '0.75px solid rgba(50, 137, 255, 0.50)',
            background: '#E4EFFE',
            fontFamily: 'Inter',
            fontSize: '16px',
            lineHeight: '20px',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="mr-2"
          >
            <path
              d="M15.017 10.2751L14.0003 9.25841C13.7587 9.05008 13.617 8.74175 13.6087 8.40008C13.592 8.02508 13.742 7.65008 14.017 7.37508L15.017 6.37508C15.8837 5.50841 16.2087 4.67508 15.9337 4.01675C15.667 3.36675 14.842 3.00841 13.6253 3.00841H4.91699V2.29175C4.91699 1.95008 4.63366 1.66675 4.29199 1.66675C3.95033 1.66675 3.66699 1.95008 3.66699 2.29175V17.7084C3.66699 18.0501 3.95033 18.3334 4.29199 18.3334C4.63366 18.3334 4.91699 18.0501 4.91699 17.7084V13.6417H13.6253C14.8253 13.6417 15.6337 13.2751 15.9087 12.6167C16.1837 11.9584 15.867 11.1334 15.017 10.2751Z"
              fill="#3289FF"
            />
          </svg>
          Process
        </span>
        <h2
          className="mt-4 mx-auto"
          style={{
            color: '#191F34',
            textAlign: 'center',
            fontFamily: 'Inter',
            fontSize: '40px',
            fontWeight: 600,
            lineHeight: '48px',
            width: '619px',
          }}
        >
          Our proven 4-steps approach <br /> to a successful partnership
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical line with blue dots */}
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 top-0 z-0"
          width="132"
          height="1506"
          viewBox="0 0 132 1506"
          fill="none"
        >
          <path
            d="M47.5003 1C60.167 18.8333 83.9003 66.5 77.5003 114.5C69.5003 174.5 18.9999 262.5 30.9999 330.5C42.9999 398.5 110.5 425 128.5 463C146.5 501 -29.6404 522.838 7.49996 674C57.4998 877.5 35.6668 893.167 20.5 962C27.5 1132.5 -53.0001 1468.5 118.5 1504"
            stroke="#3487F8"
            strokeWidth="3"
            strokeDasharray="10 10"
          />
        </svg>

        <div className="space-y-32 relative z-10">
          {steps.map((step, index) => {
            const isReversed = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 ${
                  isReversed ? 'md:flex-row-reverse' : ''
                }`}
                data-aos="fade-up"
              >
                {/* Blue circle on the vertical line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 z-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <circle cx="11" cy="11" r="11" fill="#3F8EF7" />
                  </svg>
                </div>

                {/* Icon */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={step.icon}
                    alt={`step-${index + 1}`}
                    className="w-40 md:w-56 h-auto"
                  />
                </div>

                {/* Step content */}
                <div
                  className={`w-full md:w-1/2 text-center ${
                    isReversed ? 'md:text-left' : 'md:text-right'
                  }`}
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
