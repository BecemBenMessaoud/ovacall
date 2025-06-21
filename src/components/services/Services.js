import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Phone from '../../assets/images/asset1.webp';
import Phone2 from '../../assets/images/Asset 2.png';
import Phone3 from '../../assets/images/Asset 3.png';
import Phone4 from '../../assets/images/asset4.webp'; // Your real images
import { BannerContainer } from './Services.styled';

const NumberCircle = ({ number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    className="mr-3 flex-shrink-0"
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
      {number}
    </text>
  </svg>
);

const Services = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  // Detect mobile with window width
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    }
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Tabs data with keys for i18n
  const TABS = [
    {
      titleKey: 'services.tabs.operationalCosts.title',
      content: {
        headingKey: 'services.tabs.operationalCosts.heading',
        descriptionKey: 'services.tabs.operationalCosts.description',
        image: Phone,
      },
    },
    {
      titleKey: 'services.tabs.teamScaling.title',
      content: {
        headingKey: 'services.tabs.teamScaling.heading',
        descriptionKey: 'services.tabs.teamScaling.description',
        image: Phone2,
      },
    },
    {
      titleKey: 'services.tabs.customerService.title',
      content: {
        headingKey: 'services.tabs.customerService.heading',
        descriptionKey: 'services.tabs.customerService.description',
        image: Phone3,
      },
    },
    {
      titleKey: 'services.tabs.teamRecruiting.title',
      content: {
        headingKey: 'services.tabs.teamRecruiting.heading',
        descriptionKey: 'services.tabs.teamRecruiting.description',
        image: Phone4,
      },
    },
  ];

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
          {t('Services')}
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
          {t('services.heading')}
        </h2>

        {/* Desktop Tabs */}
        {!isMobile && (
          <>
            <div className="flex justify-around border-b mb-8">
              {TABS.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className="flex flex-col items-center px-4 py-2 focus:outline-none"
                  style={{ flexShrink: 0 }}
                >
                  {/* Black circle with number */}
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

                  {/* Tab title */}
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
                    {t(tab.titleKey)}
                  </span>
                </button>
              ))}
            </div>

            {/* Content */}
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
                  {t(TABS[activeTab].content.headingKey)}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t(TABS[activeTab].content.descriptionKey)}
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={TABS[activeTab].content.image}
                  alt={t(TABS[activeTab].content.headingKey)}
                  className="w-full max-w-md"
                />
              </div>
            </div>
          </>
        )}

        {/* Mobile all expanded vertically */}
        {isMobile && (
          <div className="flex flex-col">
            {TABS.map((tab, index) => (
              <div
                key={index}
                style={{
                  borderBottom: index !== TABS.length - 1 ? '1px solid #E0E0E0' : 'none',
                  paddingBottom: '1.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div className="flex items-center mb-2">
                  <NumberCircle number={index + 1} />
                  <h4
                    style={{
                      color: '#556680',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '18px',
                      fontWeight: 600,
                      lineHeight: '22px',
                      margin: 0,
                    }}
                  >
                    {t(tab.titleKey)}
                  </h4>
                </div>

                <h3
                  style={{
                    color: '#191F34',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '24px',
                    fontWeight: 600,
                    lineHeight: '32px',
                    marginBottom: '1rem',
                    maxWidth: '365px',
                  }}
                >
                  {t(tab.content.headingKey)}
                </h3>

                <p
                  style={{
                    color: '#556680',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '18px',
                    fontWeight: 400,
                    lineHeight: '26px',
                    maxWidth: '560px',
                    marginBottom: '1rem',
                  }}
                >
                  {t(tab.content.descriptionKey)}
                </p>

                <img
                  src={tab.content.image}
                  alt={t(tab.content.headingKey)}
                  className="w-full max-w-md mx-auto"
                  style={{ borderRadius: '8px' }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </BannerContainer>
  );
};

export default Services;
