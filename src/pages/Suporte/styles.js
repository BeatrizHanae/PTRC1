import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  > h1 {
    padding: 50px;
  }
`;

export const DivBotao = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;

  a {
    width: 500px;
    height: 40px;
  }
  h1 {
    text-decoration: underline;
    padding: 30px;
  }
  h2 {
  }
  h3 {
    background: #1e3e59;
    padding: 10px;
    color: white;
  }
  p {
    text-align: flex-start;
    flex-wrap: wrap;
    padding: 2px 300px 2px 300px;
  }
`;

export const DivAgrupa = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  padding: 30px 0px 0px 0px;

  img {
    padding: 10px;
    height: 60px;
    width: 80px;
  }
  ul {
    padding-left: 15px;
  }
`;

export const DivManutencao = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
`;
export const DivAssistencia = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  flex-wrap: wrap;
  gap: 10px;
`;
