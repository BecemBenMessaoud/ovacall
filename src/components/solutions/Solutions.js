import React from 'react';
import { useTranslation } from 'react-i18next';

const Solutions = () => {
  const { t } = useTranslation();

  const cards = [
    {
      id: 1,
      image: require('../../assets/images/leftlogo.png'),
      title: t('solutions.cards.tailoredB2B.title'),
      description: t('solutions.cards.tailoredB2B.description'),
    },
    {
      id: 2,
      image: require('../../assets/images/wallet.png'),
      title: t('solutions.cards.multilingualSupport.title'),
      description: t('solutions.cards.multilingualSupport.description'),
    },
    {
      id: 3,
      image: require('../../assets/images/people.png'),
      title: t('solutions.cards.expertAgents.title'),
      description: t('solutions.cards.expertAgents.description'),
    },
  ];

  return (
    <div id="Solutions" className="bg-white py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20">

        {/* Button */}
        <a
          href="#"
          className="inline-flex items-center gap-2 w-fit mb-6 md:mb-8 px-4 py-2 rounded-full border border-[#3289FF80] bg-[#E4EFFE] text-[#3289FF] text-sm md:text-base font-semibold uppercase"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.0013 1.66602C5.40964 1.66602 1.66797 5.40768 1.66797 9.99935C1.66797 14.591 5.40964 18.3327 10.0013 18.3327C14.593 18.3327 18.3346 14.591 18.3346 9.99935C18.3346 5.40768 14.593 1.66602 10.0013 1.66602ZM13.9846 8.08268L9.25963 12.8077C9.14297 12.9243 8.98464 12.991 8.81797 12.991C8.6513 12.991 8.49297 12.9243 8.3763 12.8077L6.01797 10.4493C5.7763 10.2077 5.7763 9.80768 6.01797 9.56602C6.25963 9.32435 6.65964 9.32435 6.9013 9.56602L8.81797 11.4827L13.1013 7.19935C13.343 6.95768 13.743 6.95768 13.9846 7.19935C14.2263 7.44102 14.2263 7.83268 13.9846 8.08268Z"
              fill="#3289FF"
            />
          </svg>
          <span>{t('Solutions')}</span>
        </a>

        {/* Heading */}
        <h2 className="text-[#191F34] font-inter font-semibold mb-8 text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug md:leading-tight">
          {t('solutions.heading')}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 w-full max-w-sm mx-auto"
            >
              {/* Image */}
              <div className="bg-[#F6F9FC] p-5 md:p-6 xl:p-8 rounded-t-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 mx-auto object-contain"
                />
              </div>

              <div className="w-full h-px bg-gray-300" />

              {/* Text */}
              <div className="p-5 md:p-6 xl:p-8">
                <h3 className="text-lg md:text-xl xl:text-2xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base xl:text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Solutions;
