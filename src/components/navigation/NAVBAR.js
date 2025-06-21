import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../../assets/images/logo/Logo - Original.png';

const NAVBAR = () => {
  const { t } = useTranslation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Update isMobile state and close menu if resized to desktop
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu if clicking outside of menu or hamburger button
  useEffect(() => {
    if (!isMobileOpen || !isMobile) return;

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileOpen, isMobile]);

  const navItems = [
    { label: t('navbar.solutions'), href: '#Solutions' },
    { label: t('navbar.services'), href: '#Services' },
    { label: t('navbar.process'), href: '#Process' },
    { label: t('navbar.aboutUs'), href: '#Team' },
    { label: t('navbar.onboarding'), href: '#OnBoarding' },
    { label: t('navbar.contact'), href: '#Contact' },
  ];

  const scrollToContact = (e) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const element = document.getElementById('Contact');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-100 shadow-md transition-colors duration-300 ease-in-out">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 py-3 lg:py-4">
        {/* Logo */}
        <a href="#!" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 lg:h-12" />
        </a>

        {/* Hamburger button - only on mobile */}
        {isMobile && (
          <button
            ref={hamburgerRef}
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((open) => !open)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        )}

        {/* Navigation Links */}
        <div
          ref={menuRef}
          className={`flex-col lg:flex lg:flex-row lg:items-center lg:justify-center absolute lg:static top-full left-0 w-full lg:w-auto bg-gray-100 lg:bg-transparent shadow-lg lg:shadow-none transform origin-top transition-transform duration-300 ease-in-out ${
            isMobile ? (isMobileOpen ? 'scale-y-100' : 'scale-y-0') : 'scale-y-100'
          } lg:scale-y-100 lg:flex`}
          style={{ transformOrigin: 'top' }}
        >
          <ul className="flex flex-col lg:flex-row list-none p-4 lg:p-0 gap-4 lg:gap-8">
            {navItems.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-3 py-2 text-gray-900 font-medium text-base hover:text-[#66cccc] transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action Button - only visible on desktop */}
        <div className="hidden lg:flex">
          <a
            href="#Contact"
            onClick={scrollToContact}
            className="bg-[#3289FF] text-white px-5 py-2 rounded-md font-medium text-sm hover:opacity-90 transition"
          >
            {t('navbar.bookCall')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NAVBAR;
