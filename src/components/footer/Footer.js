import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FooterContainer,
  FooterContent,
  MainContentWrapper,
  LogoContainer,
  NavWrapper,
  LinksRow,
  LinkColumn,
  FooterLink,
  FooterBottom,
  SettingsWrapper,
  SettingOption,
  SocialIcons,
  SocialIcon,
} from './Footer.styled';
import Logo from '../../assets/images/logo/Logo - Original.png';
import UKFlag from '../../assets/images/britan.png';
import FRFlag from '../../assets/images/france.jpg';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English', img: UKFlag },
    { code: 'fr', label: 'Français', img: FRFlag },
  ];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setSelectedLang(code);
    setIsOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find((lang) => lang.code === selectedLang);

  return (
    <FooterContainer>
      <FooterContent>
        <MainContentWrapper>
          <LogoContainer>
            <img src={Logo} alt={t('CompanyLogoAlt', 'Company Logo')} />
          </LogoContainer>

          <NavWrapper>
            <LinksRow>
              <LinkColumn>
                <FooterLink href="#Solutions">{t('Solutions')}</FooterLink>
              </LinkColumn>
              <LinkColumn>
                <FooterLink href="#Services">{t('Services')}</FooterLink>
              </LinkColumn>
              <LinkColumn>
                <FooterLink href="#Process">{t('Process')}</FooterLink>
              </LinkColumn>
              <LinkColumn>
                <FooterLink href="#Team">{t('AboutUs')}</FooterLink>
              </LinkColumn>
              <LinkColumn>
                <FooterLink href="#OnBoarding">{t('Onboarding')}</FooterLink>
              </LinkColumn>
              <LinkColumn>
                <FooterLink href="#Contact">{t('Contact')}</FooterLink>
              </LinkColumn>
              
            </LinksRow>

            <SettingsWrapper>
              <SettingOption
                ref={dropdownRef}
                style={{ position: 'relative', cursor: 'pointer' }}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
              >
                {/* Selected language */}
                <div
                  onClick={() => setIsOpen((prev) => !prev)}
                  style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setIsOpen((prev) => !prev);
                  }}
                  aria-label={t('SelectLanguage', 'Select Language')}
                >
                  <img
                    src={currentLang.img}
                    alt={`${currentLang.label} flag`}
                    style={{ width: 24, height: 16, objectFit: 'cover' }}
                  />
                  <span>{currentLang.label}</span>
                  <span style={{ marginLeft: 4 }}>{isOpen ? '▲' : '▼'}</span>
                </div>

                {/* Dropdown list */}
                {isOpen && (
                  <ul
                    role="listbox"
                    tabIndex={-1}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 4px)',
                      left: 0,
                      background: '#fff',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      borderRadius: 4,
                      padding: '4px 0',
                      margin: 0,
                      listStyle: 'none',
                      zIndex: 1000,
                      width: 120,
                    }}
                  >
                    {languages.map(({ code, label, img }) => (
                      <li
                        key={code}
                        role="option"
                        aria-selected={selectedLang === code}
                        onClick={() => changeLanguage(code)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') changeLanguage(code);
                        }}
                        tabIndex={0}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '6px 12px',
                          cursor: 'pointer',
                          backgroundColor: selectedLang === code ? '#eee' : 'transparent',
                        }}
                      >
                        <img
                          src={img}
                          alt={`${label} flag`}
                          style={{ width: 24, height: 16, objectFit: 'cover' }}
                        />
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </SettingOption>

              <SettingOption>
                <button
                  type="button"
                  onClick={() => alert('Dark mode toggle clicked')}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'inherit',
                    fontSize: 14,
                    fontFamily: 'inherit',
                    padding: 0,
                  }}
                  aria-label={t('ToggleDarkMode', 'Toggle dark mode')}
                >
                  {t('DarkMode')}
                </button>
              </SettingOption>
            </SettingsWrapper>
          </NavWrapper>
        </MainContentWrapper>

        <FooterBottom>
          <div>{t('AllRightsReserved')}</div>
          <SocialIcons>
            {/* Place your social icons here */}
          </SocialIcons>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
