import styled from 'styled-components';
import linhas from '../../assets/linhas.png';

export const Container = styled.div`
display:flex;
flex-direction:column;
padding: 3em;
justify-content: space-between;

h2{
  display:flex;
  justify-content:center;
  padding-top: 60px;
}

`
export const DivPrimeira = styled.div`
display:flex;
flex-direction:column;
padding-left: 3em;
gap:15px;
align-items:center;

`
export const DivBusca = styled.div`
display:flex;
display:flex;
align-items:flex-start;
background-color:#e6e6ff;
border:solid 1px;
border-radius:10px;
width: 60%;
height: 10%;
gap:5px;
padding-left: 5px;
input{
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:transparent;
  padding-left:5px;
  font-style:italic;
  border:none;
  margin-left: 50px;
 
 
}
img{
  display:flex;
  width:30px;
}
`
export const Div1 = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-content: center;
flex-direction: row;

`
export const Div2 = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
width: 25%;
flex-wrap: wrap;
align-content:center;
margin:50px;
padding:1em;
border:solid 1px;

a{
  display:flex;
  justify-content:center;
  width: 150px;
}

;
`
