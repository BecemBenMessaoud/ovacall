import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AttoUsContainer } from './Slogon5.styled';

const Slogon5 = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease' });
  }, []);

  return (
    <AttoUsContainer id="Atouts" className="bg-[#f8fbff] py-50">
      <div className="w-full flex flex-col items-center px-4">
        {/* Title */}
         <div className="w-full max-w-6xl ">
           <a
            href="#"
            className="inline-block px-4 py-1 text-lg font-semibold text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition"
          >
            Onboarding
          </a>
          <h2 className="text-3xl mt-5 lg:text-4xl font-bold text-[#1c1c1c] ">
            How to get started
          </h2>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
          <div
            className="bg-white rounded-xl shadow-md p-6"
            data-aos="fade-up"
          >
            <h2 className="text-xl font-semibold mb-2">1. Schedule a free consultation</h2>
            <p className="text-gray-600">
              Book a free consultation with one of our experts to explore how Ovacall can support your business and answer any initial questions.
            </p>
          </div>
          <div
            className="bg-white rounded-xl shadow-md p-6"
            data-aos="fade-up"
          >
            <h2 className="text-xl font-semibold mb-2">2. Define your needs & goals</h2>
            <p className="text-gray-600">
              We’ll collaborate with you to understand your challenges, define key objectives, and outline a clear path toward long-term success.
            </p>
          </div>
          <div
            className="bg-white rounded-xl shadow-md p-6"
            data-aos="fade-up"
          >
            <h2 className="text-xl font-semibold mb-2">3. Launch your team</h2>
            <p className="text-gray-600">
              We’ll build and onboard a dedicated team tailored to your goals—ready to integrate smoothly and start delivering results from day one.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full max-w-6xl mt-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1c1c1c] mb-10">
            What will you get from Ovacall
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4" data-aos="fade-up">
              <div className="text-2xl text-[#66cccc]">✔️</div>
              <p className="text-gray-700 text-lg">
                High-quality, French and English-speaking agents
              </p>
            </div>
            <div className="flex items-start space-x-4" data-aos="fade-up">
              <div className="text-2xl text-[#66cccc]">✔️</div>
              <p className="text-gray-700 text-lg">
                Personalized sales and support strategy
              </p>
            </div>
            <div className="flex items-start space-x-4" data-aos="fade-up">
              <div className="text-2xl text-[#66cccc]">✔️</div>
              <p className="text-gray-700 text-lg">
                Seamless integration with your current systems and processes
              </p>
            </div>
            <div className="flex items-start space-x-4" data-aos="fade-up">
              <div className="text-2xl text-[#66cccc]">✔️</div>
              <p className="text-gray-700 text-lg">
                A dedicated team that adapts to your needs
              </p>
            </div>
            <div className="flex items-start space-x-4" data-aos="fade-up">
              <div className="text-2xl text-[#66cccc]">✔️</div>
              <p className="text-gray-700 text-lg">
                Transparent reporting and performance tracking
              </p>
            </div>
          </div>
        </div>
      </div>
    </AttoUsContainer>
  );
};

export default Slogon5;
