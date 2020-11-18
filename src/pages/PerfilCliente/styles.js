import styled from 'styled-components';

export const Container = styled.section`
display: flex;
flex-direction:column;
`
export const DivTexto = styled.div`
 padding:30px;
 display:flex;
 flex-direction:column;
 justify-content:flex-start;
 gap:25px;

 h2{
   display:flex;
   justify-content:center;
   text-decoration: underline;
 }
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
  img{
    display:flex;
    width:45px;

  }
`
export const DivTextos = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
gap:50px;

`
