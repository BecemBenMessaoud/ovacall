import React from 'react';
import BackgroundImage from '../../assets/images/home.png';
import {
  HeroContainer,
  HeroImage,
  HeroContent,
  HeroTitle,
  HeroButton,
  HeroSubtitle,
  HeroTopButtonStyled,
} from './Homesection.styled';

const Homesection = () => {
  return (
    <HeroContainer id="Hero">
      <HeroImage src={BackgroundImage} alt="Hero background" />
      <HeroContent>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <HeroTopButtonStyled href="#Solutions">
  <span className="icon-wrapper">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a1 1 0 0 1 1 .75l1.15 4.6a1 1 0 0 1-.27.95l-2.2 2.2a16 16 0 0 0 6.29 6.29l2.2-2.2a1 1 0 0 1 .95-.27l4.6 1.15a1 1 0 0 1 .75 1z"/>
    </svg>
  </span>
  <span className="button-text">Professionel sales outsourcing</span>
</HeroTopButtonStyled>
        </div>

        <HeroTitle>
          <span>Turn calls</span>
          <span>into conversions</span>
          <span>with ovacall</span>
        </HeroTitle>

        <HeroSubtitle>
          Strengthen your sales with a multilingual, high-performing team that scales with you, without breaking the bank.
        </HeroSubtitle>

        <HeroButton href="#Contact">Book your free consultation</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Homesection;
