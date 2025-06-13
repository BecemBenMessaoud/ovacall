import styled from 'styled-components';

export const HeroContainer = styled.header`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center; /* centers vertically */
  align-items: center; /* centers horizontally */
  text-align: center;
  padding: 0 20px;
`;
export const HeroTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 72px;
  line-height: 76px;
  letter-spacing: -0.01em;
  text-align: center;
  text-transform: uppercase;
  color: white;
  max-width: 733px;
  margin: 2rem auto 0 auto; /* 👈 Ajout de margin-top */

  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  span {
    display: block;
  }

  @media screen and (max-width: 768px) {
    font-size: 48px;
    line-height: 52px;
    margin-top: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    line-height: 38px;
    margin-top: 1rem;
  }
`;





export const HeroButton = styled.a`
  margin-top: 20px;
  background-color: rgb(243, 243, 248);
  color: black;
  padding: 14px 30px;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(220, 220, 230);
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #f0f0f0;
  text-align: center;
  max-width: 600px;
  margin-top: 1.5rem;   /* 👈 pushes it down */
  margin-bottom: 2rem;
`;
export const HeroTopButtonStyled = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  width: 237px;
  height: 28px;
  padding: 0 12px;

  border-radius: 13.273px;
  border: 0.498px solid #DEE5ED;
  background: rgba(255, 255, 255, 0.20);

  text-decoration: none;
  color: #FFF;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px;
  text-transform: uppercase;

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }

  .button-text {
    flex: 1;
    text-align: center;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;



