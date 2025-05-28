import React from 'react';
import BackgroundImage from '../../assets/images/home background.png';
import {
  HeroContainer,
  HeroImage,
  HeroContent,
  HeroTitle,
  HeroButton,
  HeroSubtitle,
  HeroTopButton,
} from './hero.styled';

const Hero = () => {
  return (
  <HeroContainer id="Hero">
  <HeroImage src={BackgroundImage} alt="Hero background" />
  <HeroContent>
    <HeroTopButton href="#Solutions">Professionel sales outsoursing</HeroTopButton> {/* Nouveau bouton */}
    
    <HeroTitle>
      Turn calls <br /> into Conversation <br /> with object with ovacall
    </HeroTitle>
    
    <HeroSubtitle>
      Ovacall helps your team close more deals, faster — powered by AI and simplicity.
    </HeroSubtitle>
    
    <HeroButton href="#Contact">book your free consultation</HeroButton>
  </HeroContent>
</HeroContainer>

  );
};

export default Hero;
