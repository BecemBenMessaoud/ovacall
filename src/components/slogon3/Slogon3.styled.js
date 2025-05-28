import styled from 'styled-components';
import BannerBG from '../../assets/images/molBack.png';

export const BannerContainer = styled.section`
  background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.52),
      rgba(233, 233, 233, 0.73)
    ),
    url(${BannerBG});
  background-position: right;
  background-repeat: no-repeat;

  width: 100%;
  height: auto;
  padding: 25px 55px;

  overflow: hidden;
`;

export const H1 = styled.h1`
  font-size: 2.7rem;
  line-height: 2.5rem;
  font-weight: bold;
  @media screen and (max-width: 820px) {
    font-size: 2rem;
    line-height: 1.5rem;
  }
`;

export const H2 = styled.h2`
  font-size: 2.7rem;
  line-height: 2.5rem;
  font-weight: normal;
  @media screen and (max-width: 820px) {
    font-size: 2rem;
    line-height: 1.5rem;
  }
`;
