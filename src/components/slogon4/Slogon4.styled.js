import styled from 'styled-components';

export const ValeursContainer = styled.section`
  background: #66cccc;
  padding: 50px 25px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const H1 = styled.h1`
  font-family: 'Impact', sans-serif;
  font-size: 2.5rem;
  line-height: 2.5rem;
  color: #fff;
  margin-bottom: 1rem;
  @media screen and (max-width: 820px) {
    font-size: 2rem;
    line-height: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

export const IMGSMALL = styled.img`
  width: 90px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 1rem;
`;
