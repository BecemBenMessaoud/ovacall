import styled from 'styled-components';
import BannerBG from '../../assets/images/molBack.png';

export const BannerContainer = styled.section`
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.52),
      rgba(233, 233, 233, 0.73)
    ),
    url(${BannerBG});
  background-position: left;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 75px 50px;
  @media screen and (max-width: 768px) {
    padding: 75px 25px;
  }
`;

export const P = styled.p`
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 1.9;
  color: #000;
  margin-bottom: 1.5rem;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
