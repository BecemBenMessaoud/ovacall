import React, { useState } from 'react';
import Phone from '../../assets/images/asset1.webp'; // Replace with your actual chart/image
import { BannerContainer } from './Slogon2.styled';

const TABS = [
  {
    title: 'Operational costs',
    content: {
      heading: 'Cut High Operational Costs',
      description: `Managing an in-house team means ongoing expenses, salaries, benefits, office space, and more. OvaCall delivers expert sales and support professionals at a fraction of the cost, helping you reduce overhead without sacrificing quality.`,
    },
  },
  {
    title: 'Team scaling',
    content: {
      heading: 'Effortless Team Scaling',
      description: `Scale your team efficiently without the long hiring cycles. OvaCall gives you access to vetted professionals on-demand.`,
    },
  },
  {
    title: 'Customer service',
    content: {
      heading: 'Superior Customer Service',
      description: `Deliver exceptional customer support with experienced agents available 24/7 through our platform.`,
    },
  },
  {
    title: 'Team recruiting',
    content: {
      heading: 'Streamlined Team Recruiting',
      description: `Avoid the hassle of recruitment. Let OvaCall handle it with fast and efficient hiring solutions tailored to your business.`,
    },
  },
];

const Slogon2 = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <BannerContainer id="QUIPHARMA" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold  mb-10">
          How we help businesses solve problems?
        </h2>

        {/* Tabs */}
        <div className="flex justify-around border-b mb-8">
          {TABS.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-sm md:text-base font-medium focus:outline-none transition-all duration-300 ${
                activeTab === index
                  ? 'border-b-4 border-blue-500 text-black'
                  : 'text-gray-500'
              }`}
            >
              {String(index + 1).padStart(2, '0')} {tab.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">{TABS[activeTab].content.heading}</h3>
            <p className="text-gray-700 leading-relaxed">
              {TABS[activeTab].content.description}
            </p>
          </div>
          <div className="flex justify-center">
            <img src={Phone} alt="Chart or Graphic" className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </BannerContainer>
  );
};

export default Slogon2;
