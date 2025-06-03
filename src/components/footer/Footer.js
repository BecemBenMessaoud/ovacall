import React from 'react';
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
  FlagIcon,
  SocialIcons,
  SocialIcon
} from './Footer.styled';
import Logo from '../../assets/images/logo/Logo - Original.png';
import UKFlag from '../../assets/images/britan.png';
import Icon1 from '../../assets/images/facebook.png';
import Icon2 from '../../assets/images/linkedin.png';
import Icon3 from '../../assets/images/x.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <MainContentWrapper>
          <LogoContainer>
            <img src={Logo} alt="Company Logo" />
          </LogoContainer>
          
          <NavWrapper>
            <LinksRow>
              <LinkColumn>
                <FooterLink href="#">Solutions</FooterLink>
              </LinkColumn>
              <LinkColumn>
                <FooterLink href="#">Services</FooterLink>
              </LinkColumn>
              <LinkColumn>
                <FooterLink href="#">Process</FooterLink>
              </LinkColumn>
              <LinkColumn>
                <FooterLink href="#">About us</FooterLink>
              </LinkColumn>
              <LinkColumn>
                <FooterLink href="#">Onboarding</FooterLink>
              </LinkColumn>
              <LinkColumn>
                <FooterLink href="#">Contact</FooterLink>
              </LinkColumn>
              <LinkColumn>
                <FooterLink href="#">Blog</FooterLink>
              </LinkColumn>
            </LinksRow>
            
            <SettingsWrapper>
              <SettingOption>
                <FlagIcon src={UKFlag} alt="UK Flag" />
                English <span style={{ fontSize: '10px' }}>▼</span>
              </SettingOption>
              <SettingOption>
                Dark mode
              </SettingOption>
            </SettingsWrapper>
          </NavWrapper>
        </MainContentWrapper>
        
        <FooterBottom>
          <div>All Rights Reserved Ovacall 2025</div>
          <SocialIcons>
            <SocialIcon src={Icon1} alt="Social Icon 1" />
            <SocialIcon src={Icon2} alt="Social Icon 2" />
            <SocialIcon src={Icon3} alt="Social Icon 3" />
          </SocialIcons>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;