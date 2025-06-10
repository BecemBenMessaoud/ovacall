import React, { useState } from 'react';
import Phone from '../../assets/images/asset1.webp';
import Phone2 from '../../assets/images/Asset 2.png';
import Phone3 from '../../assets/images/Asset 3.png';
import Phone4 from '../../assets/images/asset4.webp'; // Remplace par tes images réelles
import { BannerContainer } from './Services.styled';

const TABS = [
  {
    title: 'Operational costs',
    content: {
      heading: 'Cut High Operational Costs',
      description:
        'Managing an in-house team means ongoing expenses, salaries, benefits, office space, and more. Ovacall delivers expert sales and support professionals at a fraction of the cost, helping you reduce overhead without sacrificing quality..',
      image: Phone,
    },
  },
  {
    title: 'Team scaling',
    content: {
      heading: 'Staffing That Grows With You  ',
      description:
        'Managing an in-house team means ongoing expenses, salaries, benefits, office space, and more. Ovacall delivers expert sales and support professionals at a fraction of the cost, helping you reduce overhead without sacrificing quality.',
      image: Phone2,
    },
  },
  {
    title: 'Customer service',
    content: {
      heading: 'Fix Inconsistent Customer Service',
      description:
        'Overwhelmed in-house teams can’t always keep up, causing slow responses and missed follow-ups. With Ovacall, every customer is met with prompt, professional care from agents trained to represent your brand at its best and convert unhappy customers into satisfied, loyal ones..',
      image: Phone3,
    },
  },
  {
    title: 'Team recruiting',
    content: {
      heading: 'Preserve Resources Spent on Hiring & Training',
      description:
        'Recruiting and training quality agents is time-consuming and expensive? only to start over when turnover hits. Ovacall eliminates the hiring burden with a professional sales and support service that deliver the exact result you need from the get go..',
      image: Phone4,
    },
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <BannerContainer id="Services" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <a
          href="#"
          className="inline-flex items-center mb-3 px-4 py-1 text-[16px] font-semibold font-inter text-[#3289FF] uppercase leading-[20px] tracking-normal border border-blue-500/50 rounded-full bg-[#E4EFFE] hover:bg-blue-200 transition"
          style={{
            width: '145px',
            height: '40px',
            flexShrink: 0,
            borderRadius: '24px',
            border: '0.75px solid rgba(50, 137, 255, 0.5)',
            background: '#E4EFFE',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="mr-2 flex-shrink-0"
          >
            <path
              d="M18.3083 15V15.8333C18.3083 17.2083 18.3083 18.3333 15.8083 18.3333H4.1416C1.6416 18.3333 1.6416 17.2083 1.6416 15.8333V15C1.6416 14.5416 2.0166 14.1666 2.47493 14.1666H17.4749C17.9333 14.1666 18.3083 14.5416 18.3083 15Z"
              fill="#3289FF"
            />
            <path
              d="M12.0079 4.31672C12.0496 4.15005 12.0746 3.99172 12.0829 3.81672C12.1079 2.85005 11.5163 2.00005 10.5829 1.75005C9.18294 1.36672 7.91628 2.41672 7.91628 3.75005C7.91628 3.95005 7.94128 4.13339 7.99128 4.31672C4.98294 4.95839 2.72461 7.63339 2.72461 10.8334V12.0834C2.72461 12.5417 3.09961 12.9167 3.55794 12.9167H16.4329C16.8913 12.9167 17.2663 12.5417 17.2663 12.0834V10.8334C17.2663 7.63339 15.0163 4.96672 12.0079 4.31672ZM12.4996 9.79172H7.49961C7.15794 9.79172 6.87461 9.50839 6.87461 9.16672C6.87461 8.82505 7.15794 8.54172 7.49961 8.54172H12.4996C12.8413 8.54172 13.1246 8.82505 13.1246 9.16672C13.1246 9.50839 12.8413 9.79172 12.4996 9.79172Z"
              fill="#3289FF"
            />
          </svg>
          Services
        </a>

        <h2
          className="mb-10"
          style={{
            color: '#191F34',
            fontFamily: 'Inter, sans-serif',
            fontSize: '40px',
            fontWeight: 600,
            lineHeight: '48px',
            maxWidth: '673px',
          }}
        >
          How we help you overcome challenges
        </h2>

        {/* Tabs */}
        <div className="flex justify-around border-b mb-8">
          {TABS.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className="flex flex-col items-center px-4 py-2 focus:outline-none"
              style={{ flexShrink: 0 }}
            >
              {/* Cercle noir avec numéro */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                className="mb-1 flex-shrink-0"
              >
                <circle cx="14" cy="14" r="14" fill="#191F34" />
                <text
                  x="50%"
                  y="50%"
                  fill="white"
                  fontSize="16"
                  fontWeight="600"
                  fontFamily="Inter, sans-serif"
                  dominantBaseline="middle"
                  textAnchor="middle"
                >
                  {index + 1}
                </text>
              </svg>

              {/* Titre de l’onglet */}
              <span
                style={{
                  color: activeTab === index ? '#191F34' : '#556680',
                  textAlign: 'center',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  lineHeight: '24px',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.title}
              </span>
            </button>
          ))}
        </div>

        {/* Contenu */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3
              style={{
                color: '#191F34',
                fontFamily: 'Inter, sans-serif',
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '32px',
                width: '365px',
              }}
              className="mb-4"
            >
              {TABS[activeTab].content.heading}
            </h3>
            <p className="text-gray-700 leading-relaxed">{TABS[activeTab].content.description}</p>
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
