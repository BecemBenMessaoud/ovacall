import styled from 'styled-components';

export const BannerContainer = styled.section`
  background: 
    linear-gradient(
      to left,
      rgba(255, 255, 255, 0.52),
      rgba(233, 233, 233, 0.73)
    );
  position: relative;
  width: 100%;
  overflow: hidden;

  /* You can add media queries here if you want */
  
  @media (min-width: 768px) {
    /* Example: add padding or other styles for MD and up */
  }

  @media (min-width: 1280px) {
    /* LG breakpoint */
  }

  @media (min-width: 1440px) {
    /* XL breakpoint */
  }

  @media (min-width: 1920px) {
    /* 2XL breakpoint */
  }
`;
