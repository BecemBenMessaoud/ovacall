import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FORM_ENDPOINT = '';
const Slogon8 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
    });
  }, []);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  

  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
  
    const handleToggle = () => {
      setIsActive(!isActive);
    };
    const changeBackground = () => {
      if (window.scrollY >= 160) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  const handleSubmit = () => {
    if (email !== '' && name !== '' && number !== '') {
      // a modifier
      window.open(
        `mailto:pharmaforma2022@gmail.com?subject=INSCRIPTION&body=Bonjour je suis  ${email} ${name} ${number}`
      );

      setTimeout(() => {
        setSubmitted(true);
      }, 5000);
    }
  };

  return (
    <div
      id="Contact"
      className="relative flex items-top justify-center min-h-screen bg-[#6a6ccc]  sm:items-center sm:pt-0"
    >
      <div
        className="max-w-[1200px] mx-auto sm:px-6 lg:px-8  "
        data-aos="fade-up"
      >
        <div className=" overflow-hidden">
          <div className="grid grid-cols-7 md:grid-cols-2">
            <div className="p-6 mr-0 bg-transparent sm:rounded-lg">
               <a
            href="#"
            className="inline-block px-9 py-1 text-lg font-semibold text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 transition"
          >
            Contact
          </a>
              <h1 className=" textH text-4xl mt-5 font-bold text-left text-white">
                Ready to elevate your kills with ovacall
              </h1>
              

              <div className="flex items-center mt-8 text-gray-100 ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.415 14.382C17.117 14.233 15.656 13.515 15.384 13.415C15.112 13.316 14.914 13.267 14.715 13.565C14.517 13.861 13.948 14.531 13.775 14.729C13.601 14.928 13.428 14.952 13.131 14.804C12.834 14.654 11.876 14.341 10.741 13.329C9.858 12.541 9.261 11.568 9.088 11.27C8.915 10.973 9.069 10.812 9.218 10.664C9.352 10.531 9.515 10.317 9.664 10.144C9.813 9.97004 9.862 9.84604 9.961 9.64704C10.061 9.44904 10.011 9.27604 9.936 9.12704C9.862 8.97804 9.268 7.51504 9.02 6.92004C8.779 6.34104 8.534 6.42004 8.352 6.41004C8.178 6.40204 7.98 6.40004 7.782 6.40004C7.584 6.40004 7.262 6.47404 6.99 6.77204C6.717 7.06904 5.95 7.78804 5.95 9.25104C5.95 10.713 7.014 12.126 7.163 12.325C7.312 12.523 9.258 15.525 12.239 16.812C12.949 17.118 13.502 17.301 13.933 17.437C14.645 17.664 15.293 17.632 15.805 17.555C16.375 17.47 17.563 16.836 17.811 16.142C18.058 15.448 18.058 14.853 17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382H17.415ZM11.993 21.785H11.989C10.2184 21.7854 8.48037 21.3094 6.957 20.407L6.597 20.193L2.855 21.175L3.854 17.527L3.619 17.153C2.62914 15.5774 2.10529 13.7538 2.108 11.893C2.11 6.44304 6.544 2.00904 11.997 2.00904C14.637 2.00904 17.119 3.03904 18.985 4.90704C19.9054 5.82362 20.6349 6.91361 21.1313 8.11394C21.6277 9.31427 21.8811 10.6011 21.877 11.9C21.875 17.35 17.441 21.785 11.993 21.785V21.785ZM20.405 3.48804C19.3032 2.37896 17.9922 1.49958 16.5481 0.900841C15.1039 0.302105 13.5553 -0.00407625 11.992 4.09775e-05C5.438 4.09775e-05 0.102 5.33504 0.1 11.892C0.096963 13.9788 0.644374 16.0294 1.687 17.837L0 24L6.304 22.346C8.04787 23.2962 10.0021 23.794 11.988 23.794H11.993C18.547 23.794 23.883 18.459 23.885 11.901C23.8898 10.3383 23.5848 8.79014 22.9874 7.34607C22.3901 5.90201 21.5124 4.59071 20.405 3.48804"
                    fill="#F1F1F1"
                  />
                </svg>

                <div className="textb ml-4 text-s sm:text-md tracking-wide font-semibold w-40">
                  +230 5 489-5069
                </div>
              </div>

              <div className="flex items-center mt-4 text-gray-100 dark:text-gray-100">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="textb ml-4 text-s sm:text-md tracking-wide font-semibold w-40">
                  +230 5712 2081
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-100 dark:text-gray-100">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="textb ml-4 text-s sm:text-md tracking-wide font-semibold w-40">
                  Direction@pharmaforma.com
                </div>
              </div>
              
              {/* social media */}

              <div className="flex items-center  mt-2 text-gray-100 dark:text-gray-100">
               
<h1 className=" textH text-4xl font-bold  text-white">
                Or you can book a free consultation session
              </h1>
              
              </div>  
              <button
                  type="submit"
                  className="btn md:w-46 mr:w-16 text-base bg-white  text-gray-900 hover:text-white font-bold py-3 px-6 rounded-lg mt-4  transition ease-in-out duration-300"
                >
                  Schedule a free consultaion
                </button>           
            </div>

            {submitted ? (
              <>
                <div>
                  {' '}
                  <h1 className="text-4xl pb-6 sm:text-5xl text-white  font-extrabold tracking-tight">
                    Merci
                  </h1>
                  <h1 className="text-4xl pb-6 sm:text-5xl text-white  font-extrabold tracking-tight">
                    Nous serons bientôt en contact.
                  </h1>
                </div>
              </>
            ) : (
              <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md mx-auto">
  <form className="flex flex-col" onSubmit={handleSubmit}>

                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="w-100 mt-2 text-base py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-100  text-gray-900 font-normal sm:font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-100 mt-2 text-base py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-100  text-gray-900 font-normal sm:font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-4  ">
                  <label htmlFor="tel" className="hidden">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Telephone Number"
                    className="w-100 text-base mt-2 py-1 sm:py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-100  text-gray-900 font-normal sm:font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                 <div className="flex flex-col mt-4  ">
                  <label htmlFor="tel" className="hidden">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Subject"
                    className="w-100 text-base mt-2 py-1 sm:py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-100  text-gray-900 font-normal sm:font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                 <div className="flex flex-col mt-4  ">
                  <label htmlFor="tel" className="hidden">
                    Message
                  </label>
                  <textarea
                    type="tel"
                    name="tel"
                    id="tel"
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Message"
                    className="w-100 text-base mt-2 py-1 sm:py-3 px-3 rounded-lg bg-white dark:bg-white border border-gray-100  text-gray-900 font-normal sm:font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn md:w-46 mr:w-16 text-base bg-white  text-gray-900 hover:text-white font-bold py-3 px-6 rounded-lg mt-4  transition ease-in-out duration-300"
                >
                  Send your message
                </button>
              </form>
</div>
              
            )}
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogon8;
