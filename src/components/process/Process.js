import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Step1 from '../../assets/images/illustration3.webp';
import Step2 from '../../assets/images/illustration2.webp';
import Step3 from '../../assets/images/illustration1.webp';
import Step4 from '../../assets/images/illustration4.webp';
import back1 from '../../assets/images/01.png';
import back2 from '../../assets/images/02.png';
import back3 from '../../assets/images/03.png';
import back4 from '../../assets/images/04.png';
import pathImage from '../../assets/images/path.png';

const icons = [Step1, Step2, Step3, Step4];
const backgrounds = [back1, back2, back3, back4];

const BannerContainer = styled.section`
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.52),
    rgba(233, 233, 233, 0.73)
  );
  width: 100%;
`;

const Process = () => {
  const { t } = useTranslation();
  const steps = t('process.steps', { returnObjects: true });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BannerContainer
      id="Process"
      className="relative bg-black py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 px-4 md:px-10 lg:px-20 xl:px-28 2xl:px-40"
    >
      <div className="max-w-5xl mx-auto text-center mb-16 md:mb-20 lg:mb-24">
        <span
          className="inline-flex items-center justify-center text-sm md:text-base font-semibold text-[#3289FF] uppercase"
          style={{
            width: '142px',
            height: '40px',
            borderRadius: '24px',
            border: '0.75px solid rgba(50, 137, 255, 0.50)',
            background: '#E4EFFE',
            fontFamily: 'Inter',
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
          {t('process.label')}
        </span>
        <h2
          className="mt-6 md:mt-10 mx-auto text-3xl md:text-4xl lg:text-5xl font-semibold"
          style={{
            color: '#191F34',
            textAlign: 'center',
            fontFamily: 'Inter',
            lineHeight: '1.2',
            maxWidth: '620px',
          }}
        >
          {t('process.heading')}
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <img
          src={pathImage}
          alt="process-line"
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-10 z-0"
          style={{
            height: '2000px',
            maxHeight: '200vh',
            objectFit: 'contain',
            pointerEvents: 'none',
          }}
        />

        <div className="space-y-16 md:space-y-20 relative z-10">
          {steps.map((step, index) => {
            const isReversed = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 ${
                  isReversed ? 'md:flex-row-reverse' : ''
                }`}
                data-aos="fade-up"
              >
                <div
                  className={`w-full md:w-1/2 flex justify-center ${
                    isReversed
                      ? 'md:ml-24 lg:ml-32 xl:ml-40 2xl:ml-48'
                      : 'md:mr-24 lg:mr-32 xl:mr-40 2xl:mr-48'
                  }`}
                >
                  <img
                    src={icons[index]}
                    alt={`step-${index + 1}`}
                    className="w-80 sm:w-72 md:w-48 lg:w-56 xl:w-64 2xl:w-72 h-auto"
                  />
                </div>

                <div
                  className={`w-full md:w-1/2 flex items-center justify-center text-center ${
                    isReversed ? 'md:text-left' : 'md:text-right'
                  }`}
                  style={{
                    backgroundImage: `url(${backgrounds[index]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '30px 30px 40px',
                    borderRadius: '20px',
                    color: 'black',
                    minHeight: '280px',
                    maxWidth: '520px',
                    width: '100%',
                  }}
                >
                  <div className="max-w-md">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
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
