import styled from 'styled-components';
import BannerBG from '../../assets/images/molBack.png';

export const AttoUsContainer = styled.section`
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.52),
      rgba(233, 233, 233, 0.73)
    ),
    url(${BannerBG});
  background-position: left;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;
