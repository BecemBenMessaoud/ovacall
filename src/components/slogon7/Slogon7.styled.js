import styled from 'styled-components';
import BannerBG from '../../assets/images/molBack.png';

export const FormationContainer = styled.section`
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.52),
      rgba(233, 233, 233, 0.73)
    ),
    url(${BannerBG});
  background-position: left;
  background-repeat: no-repeat;
  padding: 60px 0;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #66cccc;
`;
export const Wrapper = styled.div`
  margin: 2em auto;
  width: 40px;
  height: 40px;
  position: relative;
`;
