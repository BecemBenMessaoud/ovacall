import React from 'react';
import BackgroundImage from '../../assets/images/home.png';
import {
  HeroContainer,
  HeroImage,
  HeroContent,
  HeroTitle,
  HeroButton,
  HeroSubtitle,
  HeroTopButton,
} from './Homesection.styled';

const Homesection = () => {
  return (
  <HeroContainer id="Hero">
  <HeroImage src={BackgroundImage} alt="Hero background" />
  <HeroContent>
    <HeroTopButton href="#Solutions">Professionel sales outsoursing</HeroTopButton> {/* Nouveau bouton */}
    
    <HeroTitle>
      <div>Turn calls</div>
  <div>into Conversation</div>
  <div>with object with ovacall</div>
    </HeroTitle>
    
    <HeroSubtitle>
      Strengthen your sales with a multilingual, high-performing team that scales with you, without breaking the bank..
    </HeroSubtitle>
    
    <HeroButton href="#Contact">book your free consultation</HeroButton>
  </HeroContent>
</HeroContainer>

  );
};

export default Homesection;
