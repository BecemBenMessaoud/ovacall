import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AttoUsContainer } from './Onboarding.styled';
import checkIcon from '../../assets/images/check.png';

const OnBoarding = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease' });
  }, []);

  return (
    <AttoUsContainer id="OnBoarding" className="bg-[#F6F9FC] py-50">
      <div className="bg-[#F6F9FC] py-12 px-8 lg:px-20" id="services">
        <div className="max-w-6xl mx-auto">
          {/* Top Heading */}
          <a
            href="#"
            className="inline-block mb-3 px-4 py-1 text-lg font-semibold text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition"
          >
            Onboarding
          </a>
          <h2 className="text-3xl mt-5 lg:text-4xl font-bold text-[#1c1c1c]">
            How to get started
          </h2>

          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl shadow-md p-6" data-aos="fade-up">
              <h2 className="text-xl font-semibold mb-2">1. Schedule a free consultation</h2>
              <p className="text-gray-600">
                Book a free consultation with one of our experts to explore how Ovacall can support your business and answer any initial questions.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6" data-aos="fade-up">
              <h2 className="text-xl font-semibold mb-2">2. Define your needs & goals</h2>
              <p className="text-gray-600">
                We will collaborate with you to understand your challenges, define key objectives, and outline a clear path toward long-term success.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6" data-aos="fade-up">
              <h2 className="text-xl font-semibold mb-2">3. Launch your team</h2>
              <p className="text-gray-600">
                We’ll build and onboard a dedicated team tailored to your goals—ready to integrate smoothly and start delivering results from day one.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="w-full mt-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1c1c] mb-10">
              What will you get from Ovacall
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4" data-aos="fade-up">
                <img src={checkIcon} alt="check" className="w-6 h-6 mt-1" />
                <p className="text-gray-700 text-lg">
                  High-quality, French and English-speaking agents
                </p>
              </div>
              <div className="flex items-start space-x-4" data-aos="fade-up">
                <img src={checkIcon} alt="check" className="w-6 h-6 mt-1" />
                <p className="text-gray-700 text-lg">
                  Personalized sales and support strategy
                </p>
              </div>
              <div className="flex items-start space-x-4" data-aos="fade-up">
                <img src={checkIcon} alt="check" className="w-6 h-6 mt-1" />
                <p className="text-gray-700 text-lg">
                  Seamless integration with your current systems and processes
                </p>
              </div>
              <div className="flex items-start space-x-4" data-aos="fade-up">
                <img src={checkIcon} alt="check" className="w-6 h-6 mt-1" />
                <p className="text-gray-700 text-lg">
                  A dedicated team that adapts to your needs
                </p>
              </div>
              <div className="flex items-start space-x-4" data-aos="fade-up">
                <img src={checkIcon} alt="check" className="w-6 h-6 mt-1" />
                <p className="text-gray-700 text-lg">
                  Transparent reporting and performance tracking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AttoUsContainer>
  );
};

export default OnBoarding;
