import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

import girl from '../../assets/images/girl.png';

const Aboutus = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: t('teamMembers.JohnDoe'),
      image: girl,
      linkedin: 'https://linkedin.com/in/johndoe',
    },
    {
      name: t('teamMembers.JaneSmith'),
      image: girl,
      linkedin: 'https://linkedin.com/in/janesmith',
    },
    {
      name: t('teamMembers.RobertJohnson'),
      image: girl,
      linkedin: 'https://linkedin.com/in/robertjohnson',
    },
    {
      name: t('teamMembers.EmilyDavis'),
      image: girl,
      linkedin: 'https://linkedin.com/in/emilydavis',
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleAboutClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('Team');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="Team" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-white">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 
                      mx-auto max-w-full 
                      sm:max-w-[640px] 
                      md:max-w-[768px] 
                      lg:max-w-[1280px] 
                      xl:max-w-[1440px] 
                      2xl:max-w-[1920px]">
        
        {/* CTA Button */}
        <div className="flex justify-center lg:justify-start mb-6 sm:mb-8 md:mb-10">
          <a
            href="#Team"
            onClick={handleAboutClick}
            className="inline-flex items-center gap-2 sm:gap-3 
                       px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 
                       rounded-full text-xs sm:text-sm md:text-base font-semibold 
                       text-[#3289FF] bg-[#E4EFFE] border border-[]/50 
                       hover:bg-[#d0e4ff] transition-all duration-300 
                       hover:scale-105 hover:shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.0003 1.6665C5.40866 1.6665 1.66699 5.40817 1.66699 9.99984C1.66699 14.5915 5.40866 18.3332 10.0003 18.3332C14.592 18.3332 18.3337 14.5915 18.3337 9.99984C18.3337 5.40817 14.592 1.6665 10.0003 1.6665ZM9.37533 6.6665C9.37533 6.32484 9.65866 6.0415 10.0003 6.0415C10.342 6.0415 10.6253 6.32484 10.6253 6.6665V10.8332C10.6253 11.1748 10.342 11.4582 10.0003 11.4582C9.65866 11.4582 9.37533 11.1748 9.37533 10.8332V6.6665ZM10.767 13.6498C10.7253 13.7582 10.667 13.8415 10.592 13.9248C10.5087 13.9998 10.417 14.0582 10.317 14.0998C10.217 14.1415 10.1087 14.1665 10.0003 14.1665C9.89199 14.1665 9.78366 14.1415 9.68366 14.0998C9.58366 14.0582 9.49199 13.9998 9.40866 13.9248C9.33366 13.8415 9.27533 13.7582 9.23366 13.6498C9.19199 13.5498 9.16699 13.4415 9.16699 13.3332C9.16699 13.2248 9.19199 13.1165 9.23366 13.0165C9.27533 12.9165 9.33366 12.8248 9.40866 12.7415C9.49199 12.6665 9.58366 12.6082 9.68366 12.5665C9.88366 12.4832 10.117 12.4832 10.317 12.5665C10.417 12.6082 10.5087 12.6665 10.592 12.7415C10.667 12.8248 10.7253 12.9165 10.767 13.0165C10.8087 13.1165 10.8337 13.2248 10.8337 13.3332C10.8337 13.4415 10.8087 13.5498 10.767 13.6498Z"
                fill="#3289FF"
              />
            </svg>
            <span className="whitespace-nowrap">{t('aboutUsButton')}</span>
          </a>
        </div>

        {/* Title */}
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 
                     font-semibold text-[#191F34] 
                     mb-4 sm:mb-5 md:mb-6 lg:mb-8 
                     text-center lg:text-left 
                     leading-tight"
          data-aos="fade-down"
        >
          {t('teamTitle')}
        </h2>

        {/* Paragraph */}
        <div className="flex justify-center lg:justify-start mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <p className="text-gray-600 
                        text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 
                        max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl
                        text-center lg:text-left 
                        leading-relaxed">
            {t('aboutUsParagraph')}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                        gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-8 2xl:gap-12
                        justify-items-center">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center w-full max-w-sm
                         group hover:transform hover:scale-105 transition-all duration-300" 
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/5] max-w-[280px] sm:max-w-[320px] md:max-w-[280px] lg:max-w-[240px] xl:max-w-[260px] 2xl:max-w-[300px]
                              bg-white rounded-2xl shadow-lg hover:shadow-xl 
                              overflow-hidden transition-all duration-300
                              group-hover:shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover 
                           group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Member Info */}
              <div className="mt-4 sm:mt-5 md:mt-6 space-y-2 sm:space-y-3">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl 
                               font-semibold text-[#8496d5] 
                               group-hover:text-[#3289FF] transition-colors duration-300">
                  {member.name}
                </h3>
                
                {/* LinkedIn Link */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center
                           p-2 rounded-full bg-gray-100 hover:bg-[#0077B5] 
                           transition-all duration-300 group/link"
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                 <svg
  className="w-5 h-5 sm:w-6 sm:h-6 text-[#0077B5] group-hover/link:text-white transition-colors duration-300"
  fill="currentColor"
  viewBox="0 0 24 24"
>

                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aboutus;