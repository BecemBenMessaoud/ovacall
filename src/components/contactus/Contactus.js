import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { useTranslation } from 'react-i18next';
import unionBg from '../../assets/images/Union.png';

const Contactus = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 2000, easing: 'ease' });
  }, []);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());
  const [confirmedDate, setConfirmedDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && name && number) {
      window.open(
        `mailto:contact@ovacall.com?subject=INSCRIPTION&body=Bonjour je suis ${name}, Email: ${email}, Téléphone: ${number}. ${message}`
      );
      setTimeout(() => setSubmitted(true), 5000);
    }
  };

  const handleConfirmDate = () => {
    setConfirmedDate(date);
    setShowCalendar(false);
  };

  return (
    <div
      id="Contact"
      className="relative flex items-center justify-center min-h-screen bg-[#191F34] bg-cover bg-center
                   px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40 py-12 sm:py-16 md:py-20 lg:py-24" // Increased padding
      style={{ backgroundImage: `url(${unionBg})` }}
    >
      {showCalendar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowCalendar(false)}
        />
      )}

      <div
        className="w-full max-w-screen-xl mx-auto py-10 sm:py-5
                    grid gap-0 sm:gap-10 md:grid-cols-2 md:gap-4 lg:gap-16 xl:gap-20 2xl:gap-24
                    items-start"
        data-aos="fade-up"
      >
        {/* Left Side - Info Section */}
        <div className="space-y-8 md:space-y-10 z-50 relative order-2 md:order-1"> {/* Increased space-y */}
          <a
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold
                        px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow hover:bg-gray-100 transition
                        text-sm sm:text-base" // Slightly increased padding and sizes
            style={{
              width: 'auto',
              minWidth: '50px', // Slightly wider
              maxWidth: '160px', // Slightly wider
              height: '40px', // Taller
              flexShrink: 0,
              borderRadius: '24px',
              border: '0.75px solid rgba(50, 137, 255, 0.5)',
              background: '#E4EFFE',
              color: '#3289FF',
              fontFamily: 'Inter',
              fontSize: 'clamp(14px, 2vw, 17px)', // Slightly larger font
              fontWeight: 600,
              lineHeight: '20px',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            <span className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] flex-shrink-0"> {/* Larger icon */}
              {/* Contact SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.20866 12.4582L7.66699 13.9998C7.34199 14.3248 6.82533 14.3248 6.49199 14.0082C6.40033 13.9165 6.30866 13.8332 6.21699 13.7415C5.35866 12.8748 4.58366 11.9665 3.89199 11.0165C3.20866 10.0665 2.65866 9.1165 2.25866 8.17484C1.86699 7.22484 1.66699 6.3165 1.66699 5.44984C1.66699 4.88317 1.76699 4.3415 1.96699 3.8415C2.16699 3.33317 2.48366 2.8665 2.92533 2.44984C3.45866 1.92484 4.04199 1.6665 4.65866 1.6665C4.89199 1.6665 5.12533 1.7165 5.33366 1.8165C5.55033 1.9165 5.74199 2.0665 5.89199 2.28317L7.82533 5.00817C7.97533 5.2165 8.08366 5.40817 8.15866 5.5915C8.23366 5.7665 8.27533 5.9415 8.27533 6.09984C8.27533 6.29984 8.21699 6.49984 8.10033 6.6915C7.99199 6.88317 7.83366 7.08317 7.63366 7.28317L7.00033 7.9415C6.90866 8.03317 6.86699 8.1415 6.86699 8.27484C6.86699 8.3415 6.87533 8.39984 6.89199 8.4665C6.91699 8.53317 6.94199 8.58317 6.95866 8.63317C7.10866 8.90817 7.36699 9.2665 7.73366 9.69984C8.10866 10.1332 8.50866 10.5748 8.94199 11.0165C9.02532 11.0998 9.11699 11.1832 9.20033 11.2665C9.53366 11.5915 9.54199 12.1248 9.20866 12.4582Z"
                  fill="#3289FF"
                />
                <path
                  d="M18.3083 15.2752C18.3083 15.5085 18.2667 15.7502 18.1833 15.9835C18.1583 16.0502 18.1333 16.1169 18.1 16.1835C17.9583 16.4835 17.775 16.7669 17.5333 17.0335C17.125 17.4835 16.675 17.8085 16.1667 18.0169C16.1583 18.0169 16.15 18.0252 16.1417 18.0252C15.65 18.2252 15.1167 18.3335 14.5417 18.3335C13.6917 18.3335 12.7833 18.1335 11.825 17.7252C10.8667 17.3169 9.90833 16.7669 8.95833 16.0752C8.63333 15.8335 8.30833 15.5919 8 15.3335L10.725 12.6085C10.9583 12.7835 11.1667 12.9169 11.3417 13.0085C11.3833 13.0252 11.4333 13.0502 11.4917 13.0752C11.5583 13.1002 11.625 13.1085 11.7 13.1085C11.8417 13.1085 11.95 13.0585 12.0417 12.9669L12.675 12.3419C12.8833 12.1335 13.0833 11.9752 13.275 11.8752C13.4667 11.7585 13.6583 11.7002 13.8667 11.7002C14.025 11.7002 14.1917 11.7335 14.375 11.8085C14.5583 11.8835 14.75 11.9919 14.9583 12.1335L17.7167 14.0919C17.9333 14.2419 18.0833 14.4169 18.175 14.6252C18.2583 14.8335 18.3083 15.0419 18.3083 15.2752Z"
                  fill="#3289FF"
                />
              </svg>
            </span>
            <span className="hidden sm:inline">{t('contact')}</span>
          </a>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl
                          font-bold text-white leading-tight"> {/* Reverted heading size to more standard large sizes */}
            {t('contact_heading')}
          </h1>

          <div className="space-y-6 sm:space-y-8"> {/* Increased space-y */}
            {/* Email */}
            <div className="flex items-start gap-4 sm:gap-5"> {/* Increased gap */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center flex-shrink-0"> {/* Larger icon circle */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-primary" // Larger icon
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm sm:text-base text-gray-300 font-semibold uppercase mb-1.5"> {/* Adjusted text size and margin */}
                  {t('email')}
                </p>
                <p className="text-base sm:text-lg text-white break-words"> {/* Larger text */}
                  contact@ovacall.com
                </p>
              </div>
            </div>

            {/* Call Us */}
            <div className="flex items-start gap-4 sm:gap-5"> {/* Increased gap */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center flex-shrink-0"> {/* Larger icon circle */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-primary" // Larger icon
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3l2 5-2 1a16 16 0 006 6l1-2 5 2v3a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm sm:text-base text-gray-300 font-semibold uppercase mb-1.5"> {/* Adjusted text size and margin */}
                  {t('call_us')}
                </p>
                <div className="space-y-1.5"> {/* Adjusted space-y */}
                  <p className="text-base sm:text-lg text-white break-words">+216 ********</p> {/* Larger text */}
                  <p className="text-base sm:text-lg text-white break-words">+33 ********</p> {/* Larger text */}
                  <p className="text-base sm:text-lg text-white break-words">+49 ********</p> {/* Larger text */}
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 sm:gap-5"> {/* Increased gap */}
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center flex-shrink-0"> {/* Larger icon circle */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-primary" // Larger icon
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z"
                  />
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm sm:text-base text-gray-300 font-semibold uppercase mb-1.5"> {/* Adjusted text size and margin */}
                  {t('address')}
                </p>
                <p className="text-base sm:text-lg text-white break-words"> {/* Larger text */}
                  {t('address_full')}
                </p>
              </div>
            </div>
          </div>

          {confirmedDate && (
            <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm"> {/* Increased margin and padding */}
              <p className="text-white font-semibold text-base sm:text-lg"> {/* Larger text */}
                {t('selected_date')}: {confirmedDate.toDateString()}
              </p>
            </div>
          )}
        </div>

        {/* Right Side - Form Section */}
        <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 md:p-8 lg:p-10 xl:p-10 2xl:p-12
                          w-full z-20 relative max-w-full order-1 md:order-2"> {/* Increased padding */}
          {submitted ? (
            <div className="text-center px-4 sm:px-6 md:px-8 lg:px-10"> {/* Increased padding */}
              <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl
                               text-gray-900 font-extrabold mb-3 sm:mb-5"> {/* Increased heading size and margin */}
                {t('thank_you')}
              </h1>
              <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-700"> {/* Larger text */}
                {t('we_will_contact')}
              </p>
            </div>
          ) : (
            <div className="space-y-0 md:space-y-1 z-5 relative order-2 md:order-1 sm:mt-2 md:mt-0"> {/* Increased margin */}
              {i18n.language === 'fr' ? (
                <iframe
                  id="ovacall-en-sy9yow"
                  src="https://opnform.com/forms/ovacall-en-sy9yow"

                  title="Form FR"
                />
              ) : (
                <iframe
                  id="my-form-nf0mij"
                  src="https://opnform.com/forms/my-form-nf0mij"
                  style={{
                    border: 'none',
                    width: '100%',
                    height: 'auto',
                    minHeight: '700px', // Increased minHeight for the iframe
                    display: 'block',
                  }}
                  title="Form EN"
                />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <div
          className="fixed top-0 sm:top-10 md:top-20 left-1/2 transform -translate-x-1/2
                       bg-white rounded-xl shadow-2xl p-6 sm:p-8
                       max-w-sm sm:max-w-md md:max-w-lg w-[95%] sm:w-full z-50" // Increased max-width and padding
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5
                           text-center text-gray-800"> {/* Larger heading and margin */}
            {t('select_date')}
          </h2>
          <div className="calendar-container">
            <Calendar
              onChange={setDate}
              value={date}
              minDate={new Date()}
              className="react-calendar w-full"
            />
          </div>
          <p className="mt-4 sm:mt-5 text-center text-gray-600 font-medium text-base sm:text-lg"> {/* Larger text and margin */}
            {t('selected_date')}:
            <span className="text-blue-600 block sm:inline sm:ml-2"> {/* Increased margin-left for inline */}
              {date.toDateString()}
            </span>
          </p>
          <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row justify-between gap-4 sm:gap-5"> {/* Increased margins and gaps */}
            <button
              onClick={() => setShowCalendar(false)}
              className="flex-1 bg-gray-300 text-gray-800 py-2.5 sm:py-3.5 rounded-lg
                          hover:bg-gray-400 transition font-semibold text-base sm:text-lg" // Increased padding and text size
            >
              {t('close')}
            </button>
            <button
              onClick={handleConfirmDate}
              className="flex-1 bg-blue-600 text-white py-2.5 sm:py-3.5 rounded-lg
                          hover:bg-blue-700 transition font-semibold text-base sm:text-lg" // Increased padding and text size
            >
              {t('confirm')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contactus;