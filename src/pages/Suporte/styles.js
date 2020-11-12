import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;

`;

export const DivBotao = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  gap:30px;
  a{
    width:500px;
    height:40px;  

  }
  h1{
    text-decoration: underline;
  }
  h2{
    text-decoration: underline;
  }
`

export const DivAgrupa = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;

  img{
    height:60px;
    width:80px;
  }
`

export const DivManutencao = styled.div`
  display:flex;
  flex-direction:column;
  padding: 20px;
  flex-wrap:wrap;
  justify-content:space-between;
  gap: 10px;
`
export const DivAssistencia = styled.div`
  display:flex;
  flex-direction:column;
  padding: 20px;
  flex-wrap:wrap;
  gap: 10px;
`
