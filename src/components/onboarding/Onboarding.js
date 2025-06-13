import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AttoUsContainer } from './Onboarding.styled';
import checkIcon from '../../assets/images/check.png';
import { useTranslation } from 'react-i18next';

const OnBoarding = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease' });
  }, []);

  return (
    <AttoUsContainer id="OnBoarding" className="bg-[#a09192] py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
      <div className="bg-[#F6F9FC] px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-40">
        <div className="max-w-6xl mx-auto">
          {/* Top Heading */}
          <a
            href="#"
            className="inline-block mb-4 px-5 py-2 text-base md:text-lg font-semibold text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition"
          >
            {t('onboarding.title')}
          </a>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1c1c1c] mb-8">
            {t('onboarding.subtitle')}
          </h2>

          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8" data-aos="fade-up">
              <h2 className="text-lg md:text-xl font-semibold mb-3">{t('onboarding.step1.title')}</h2>
              <p className="text-gray-600 text-sm md:text-base">{t('onboarding.step1.description')}</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8" data-aos="fade-up">
              <h2 className="text-lg md:text-xl font-semibold mb-3">{t('onboarding.step2.title')}</h2>
              <p className="text-gray-600 text-sm md:text-base">{t('onboarding.step2.description')}</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8" data-aos="fade-up">
              <h2 className="text-lg md:text-xl font-semibold mb-3">{t('onboarding.step3.title')}</h2>
              <p className="text-gray-600 text-sm md:text-base">{t('onboarding.step3.description')}</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1c1c1c] mb-10">
              {t('onboarding.benefits.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              {Object.values(t('onboarding.benefits.items', { returnObjects: true })).map(
                (item, index) => (
                  <div className="flex items-start space-x-4" data-aos="fade-up" key={index}>
                    <img src={checkIcon} alt="check" className="w-5 h-5 md:w-6 md:h-6 mt-1" />
                    <p className="text-gray-700 text-base md:text-lg">{item}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </AttoUsContainer>
  );
};

export default OnBoarding;
