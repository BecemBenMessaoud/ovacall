import styled from 'styled-components';
import BannerBG from '../../assets/images/molBack.png';

export const EquipeContainer = styled.div`
  background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.52),
      rgba(233, 233, 233, 0.73)
    ),
    url(${BannerBG});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  padding: 70px 50px;

  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding: 70px 20px;
  }
`;

export const Container = styled.div`
  max-width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 150px;
  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;
export const Article = styled.article`
  display: inline-block;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-align: left;
  color: #000000;
  font-size: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 0px;
  padding: 10rem 15rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export const DIV1 = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: flex;

  @media screen and (max-width: 760px) {
    grid-area: 1 / 1 / 2 / 3;
    justify-content: center;
    items-align: center;
    height: 100%;
  }
  @media only screen and (max-width: 310px) {
    justify-content: center;
    items-align: center;
    height: 120%;
  }
`;
export const DIV2 = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 750px) {
    grid-area: 2 / 1 / 3 / 3;
    justify-content: center;
    items-align: center;
    height: 30%;
  }
  @media only screen and (max-width: 310px) {
    justify-content: center;
    items-align: center;
    height: 40%;
    padding: 0 -50px;
  }
`;
export const DIV3 = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 750px) {
    grid-area: 3 / 1 / 4 / 3;
    justify-content: center;
    items-align: center;
    height: 40%;
    padding: 0 -50px;
  }
  @media only screen and (max-width: 310px) {
    justify-content: center;
    items-align: center;
    height: 40%;
    padding: 0 -50px;
  }
`;

export const ResponsiveH1 = styled.span`
  font-weight: bold;

  @media screen and (max-width: 820px) {
    line-height: 1.5rem;
  }
`;
