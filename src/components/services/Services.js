import React, { useState } from 'react';
import Phone from '../../assets/images/asset1.webp';
import Phone2 from '../../assets/images/Asset 2.png';
import Phone3 from '../../assets/images/Asset 3.png';
import Phone4 from '../../assets/images/asset4.webp';  // Replace with your actual chart/image
import { BannerContainer } from './Services.styled';

const TABS = [
  {
    title: 'Operational costs',
    content: {
      heading: 'Cut High Operational Costs',
      description: `Managing an in-house team means ongoing expenses, salaries, benefits, office space, and more. Ovacall delivers expert sales and support professionals at a fraction of the cost, helping you reduce overhead without sacrificing quality..`,
   image: Phone, },
  },
  {
    title: 'Team scaling',
    content: {
      heading: 'Staffing That Grows With You  ',
      description: `Managing an in-house team means ongoing expenses, salaries, benefits, office space, and more. Ovacall delivers expert sales and support professionals at a fraction of the cost, helping you reduce overhead without sacrificing quality.`,
    image: Phone2,},
  },
  {
    title: 'Customer service',
    content: {
      heading: 'Fix Inconsistent Customer Service',
      description: `Overwhelmed in-house teams can’t always keep up, causing slow responses and missed follow-ups. With Ovacall, every customer is met with prompt, professional care from agents trained to represent your brand at its best and convert unhappy customers into satisfied, loyal ones..`,
   image: Phone3, },
  },
  {
    title: 'Team recruiting',
    content: {
      heading: 'Preserve Resources Spent on Hiring & Training',
      description: `Recruiting and training quality agents is time-consuming and expensive? only to start over when turnover hits. Ovacall eliminates the hiring burden with a professional sales and support service that deliver the exact result you need from the get go..`,
   image: Phone4, },
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <BannerContainer id="Services" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <a
          href="#"
          className="inline-block mb-3 px-4 py-1 text-lg font-semibold text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition"
        >
          Services
        </a>
        <h2 className="text-3xl md:text-4xl font-bold  mb-10">
          How we help you overcome challenges
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
  <img
    src={TABS[activeTab].content.image}
    alt={TABS[activeTab].content.heading}
    className="w-full max-w-md"
  />
</div>

        </div>
      </div>
    </BannerContainer>
  );
};

export default Services;
