import styled from 'styled-components';

import sectionOneImage from '../../assets/sectionOne.png';
import linhasImage from '../../assets/linhas.png';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
`;

export const SectionOne = styled(Section)`
  background-color: #1e3e59;
  width: 100%;
  min-height: 100vh;
  display: flex;
  place-content: center;
  align-items: center;
  flex-direction: row;

  div.content {
    background: rgba(0, 0, 0, 0.45);
    max-width: max(40vw, 300px);
    padding: 20px 50px;
    color: #b0c4de;
    font-size: 2rem;
    text-align: center;
    margin-left: 40px;
    filter: drop-shadow(-4px 6px 20px rgba(255, 255, 255, 0.2));
  }

  div.flex {
    display: flex;
    flex: 1;
  }

  &:before {
    content: '';
    position: absolute;
    background-image: url(${sectionOneImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    min-height: 100vh;
    display: block;
    mix-blend-mode: overlay;
  }
`;

export const QuemSomos = styled(Section)`
  background-image: url(${linhasImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 200px 10px;

  p {
    max-width: 60%;
    text-align: center;
  }
`;

export const Produtos = styled(Section)`
  gap: 20px;
  > div {
    width: 30%;
    background: rgba(30, 62, 89, 0.63);
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    box-shadow: -5px 9px 5px rgba(0, 0, 0, 0.8);

    p {
      margin-bottom: 15px;
    }
  }
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10px;
`;
export const Jornada = styled(Section)`
  gap: 20px;
  margin-top: 40px;
  div {
    display: flex;
    flex-direction: row;
    gap: 20px;
    img {
      align-self: center;
    }
  }
`;
