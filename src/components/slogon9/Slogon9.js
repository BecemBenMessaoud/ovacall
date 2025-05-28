import React from 'react';

const Slogon9 = () => {
  return (
    <footer className="p-4 bg-gray-800 shadow md:px-6 md:py-8 ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://pharmaforma.com/"
          className="flex items-center mb-4 sm:mb-0"
        >
         
        
        </a>

        {/* to up */}
       
        <div className="flex justify-center">
          
          <a
            href="#"
            className="flex items-center justify-center w-10 h-10 text-white bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <a href="https://flowbite.com/" className="hover:underline">
          PharmaForma
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Slogon9;
