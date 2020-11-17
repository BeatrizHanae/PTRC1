import styled from 'styled-components';

export const Container = styled.section`
display:flex;
flex-direction:row;
align-items: center;
justify-content:space-around;
padding-right:70px;

`
export const DivProd = styled.div`
display:flex;
flex-direction:column;
>div{
  display:flex;
  flex-direction:row;
  align-items:center;
  gap:20px;
  margin:20px;
}

`
export const DivImg = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
border: solid 1px;

p{
  display:flex;
  flex-wrap:wrap;
}
img{
  width:200px;
  display:flex;
  justify-content:center;
  align-items:center;
  align-content: center;
}
`
export const Div1 = styled.div`
display:flex;
justify-content:space-between;
text-decoration: underline;
`
export const DivOrcamento = styled.div`
display:flex;
align-items:flex-start;
flex-direction:column;
gap:15px;

input{
  display:flex;
align-items:center;
}
`
