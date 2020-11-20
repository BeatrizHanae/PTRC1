import styled from 'styled-components';

export const Container = styled.section`
display:flex;
flex-direction: column;
align-content: center;
flex-wrap:wrap;
>h1{
  display:flex;
  flex-direction: center;
  align-self: center;
  text-decoration: underline;
}
`
export const DivAgrupa = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-content: center;
flex-wrap:wrap;
img{
  height:450px;
  align-self: center;
}
`
export const DivUm = styled.div`

display:flex;
flex-direction:column;
flex-wrap: wrap;
justify-content: center;
align-items:center;
align-content: center;
padding: 2em;
gap: 10px;

input{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-self: center;
  width: 100%;
  height: 80px;
  margin: 5px;
}

a{
  width: 28%;
}

`
