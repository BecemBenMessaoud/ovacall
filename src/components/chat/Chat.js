import { useTranslation } from 'react-i18next';
import RightImage from '../../assets/images/right.png';
import LeftImage from '../../assets/images/left.png'; 
import LineImage from '../../assets/images/line.png';
import techImage from '../../assets/images/logologo.png'; 
import Background from '../../assets/images/background.png';
import CheckIcon from '../../assets/images/CHEKK.png';
import EndImage from '../../assets/images/Vector.png';

export default function Chat() {
  const { t } = useTranslation();

  return (
    <div className="w-full px-4 md:px-16">
      <div className="bg-[#191F34] py-5 flex flex-col items-center justify-center relative overflow-hidden rounded-xl">
        
        {/* Left Image */}
        <img
          src={LeftImage}
          alt="Left"
          className="absolute left-0 top-1/3 transform -translate-y-1/2 w-50 h-80 object-contain hidden md:block"
        />

        {/* Right Image */}
        <img
          src={RightImage}
          alt="Right"
          className="absolute right-0 top-1/3 transform -translate-y-1/2 w-50 h-80 object-contain hidden md:block"
        />

        {/* Center Content */}
        <div id="Aboutus" className="text-center px-8">
          <div className="flex justify-center">
            <img
              src={Background}
              alt="Perimeter Decoration"
              className="absolute w-30 h-30 object-contain z-30"
            />
            <img
              src={techImage}
              alt="Tech Logo"
              className="w-12 h-12 rounded-full border-2 border-white object-cover z-10"
            />
          </div>

          <h2 className="text-white text-3xl font-bold mb-4">{t('chat.title')}</h2>
<button
  onClick={(e) => {
    e.preventDefault();
    const element = document.getElementById('Contact');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }}
  className="bg-white text-[#191F34] px-6 py-2 rounded-md font-semibold mb-6 relative z-50"
>
  {t('chat.button')}
</button>



          <img
            src={LineImage}
            alt="Consultation visual"
            className="mx-auto mb-6"
          />

          <div className="flex flex-wrap justify-center gap-6 text-white text-sm font-medium">
            <div className="flex items-center gap-2">
              <img src={CheckIcon} alt="Custom Strategies" className="w-6 h-6" />
              <span>{t('chat.features.customStrategies')}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={CheckIcon} alt="Team of experts" className="w-6 h-6" />
              <span>{t('chat.features.teamOfExperts')}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={CheckIcon} alt="Free consultation" className="w-6 h-6" />
              <span>{t('chat.features.freeConsultation')}</span>
            </div>
          </div>

          <img
            src={EndImage}
            alt="End Visual"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
