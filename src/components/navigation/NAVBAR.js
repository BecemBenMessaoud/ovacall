import React, { useEffect, useState } from 'react';
import Logo from '../../assets/images/logo/Logo - Original.png';

const NAVBAR = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const changeBackground = () => {
    setIsScrolled(window.scrollY >= 160);
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <nav className={`top-0 transition bg-gray-100 ease-in-out duration-100 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-2`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center relative left-[120px]">
          <a
            className="text-sm text-gray-800 font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            href="#!"
          >
            <img
              src={Logo}
              className="h-10"
              alt="Logo"
            />
          </a>

          {/* Burger menu */}
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setIsMobile(!isMobile)}
          >
            <i className={`${!isScrolled ? 'text-white' : 'text-gray-800'} fas fa-bars`}></i>
          </button>
        </div>

        {/* Nav links */}
        <div className={`lg:flex flex-grow items-center justify-center ${isMobile ? 'block' : 'hidden'}`} id="example-collapse-navbar">
          <ul className="flex flex-col lg:flex-row list-none items-center">
            {[
              { label: 'Solutions', href: '#Solutions' },
              { label: 'Services', href: '#Services' },
              { label: 'Process', href: '#Process' },
              { label: 'About us', href: '#Team' },
              { label: 'OnBoarding', href: '#OnBoarding' },
              { label: 'Contact', href: '#Contact' },
              { label: 'Blog', href: '#Blog' },
            ].map((item) => (
              <li className="inline-block relative" key={item.label}>
                <a
                  className="px-3 py-4 lg:py-2 flex items-center text-[#191F34] font-inter text-[14px] font-medium leading-[16px] hover:text-[#66cccc] transition"
                  href={item.href}
                  onClick={() => setIsMobile(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
      <div className="hidden lg:flex items-center relative left-[-120px]">
  <a
    href="#Contact"
    onClick={(e) => {
      e.preventDefault();
      setIsMobile(false);
      const element = document.getElementById('Contact');
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }}
    className="text-white font-inter text-[14px] font-medium leading-[16px] 
               w-[113px] h-[40px] flex-shrink-0 
               rounded-[8px] border-[0.75px] border-[#DEE5ED] bg-[#3289FF] 
               flex items-center justify-center 
               hover:opacity-90 transition-all duration-150"
  >
    Book a call
  </a>
</div>

      </div>
    </nav>
  );
};

export default NAVBAR;
