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
  display: flex;
  flex-direction: column;
  gap: 0rem; /* ↓ reduce this value to tighten spacing */
  font-size: 3rem;
  font-weight: bold;
  color: white;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;


export const HeroButton = styled.a`
  margin-top: 20px;
  background-color:rgb(243, 243, 248);
  color: black;
  padding: 14px 30px;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;

  
`;
export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #f0f0f0;
  text-align: center;
  max-width: 600px;
  margin-top: 1.5rem;   /* 👈 pushes it down */
  margin-bottom: 2rem;
`;

export const HeroTopButton = styled.a`
  display: inline-block;
 
  padding: 10px 10px; /* bigger padding */
  background-color: rgba(101, 102, 102, 0.8); /* slightly transparent */
  color: white;
  font-weight: bold;
  border-radius: 40px; /* softer round */
  text-transform: uppercase;
  font-size: 0.6rem; /* bigger font */
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: rgba(101, 102, 102, 1); /* fully opaque on hover */
  }
`;