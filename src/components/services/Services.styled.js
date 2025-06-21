import styled from 'styled-components';

export const BannerContainer = styled.section`
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.52),
    rgba(233, 233, 233, 0.73)
  );
  width: 100%;

  /* Base padding */
  padding-top: 4rem;   /* 64px */
  padding-bottom: 4rem;

  @media (min-width: 768px) {
    padding-top: 5rem;   /* 80px */
    padding-bottom: 5rem;
  }

  @media (min-width: 1280px) {
    padding-top: 6rem;   /* 96px */
    padding-bottom: 6rem;
  }

  @media (min-width: 1440px) {
    padding-top: 7rem;   /* 112px */
    padding-bottom: 7rem;
  }

  @media (min-width: 1920px) {
    padding-top: 8rem;   /* 128px */
    padding-bottom: 8rem;
  }
`;
