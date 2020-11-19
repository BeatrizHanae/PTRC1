import styled from 'styled-components';

export const Container = styled.section`
display: flex;
flex-direction:column;

`
export const DivTexto = styled.div`
 padding-bottom: 70px;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 h5{
  font-size:18px; }
  gap:10px;   
  padding-top: 10px;
`
export const DivBotao = styled.div`

  display:flex;
  flex-direction:column;  
  justify-content:space-between;
  gap: 20px;
  padding: 40px;
 
  a{
    display:flex;
    justify-content: space-between;
    width: 500px;
    height: 50px;
    align-items:center;
    
  }
`
export const ButtonLink = styled.div`
margin-left: 275px;
a{
  color: black;
}
`