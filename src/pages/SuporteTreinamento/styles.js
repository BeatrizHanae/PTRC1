import styled from 'styled-components';

export const Container = styled.section`
  display:flex;
  flex-wrap: wrap;
  flex-direction:column;
  justify-content: center;
  width: 70%;
  gap: 40px;
  h2{
    display: flex;
    justify-content: center;
    text-decoration: underline;
  }
 
`
export const DivImgT = styled.div`
  display:flex;
  flex-wrap: wrap;
  flex-direction:column;
  
  div{
    display:flex;
    justify-content: space-between;
    align-items: center;
    h3{

    }
    input{
      display:flex;
      height: 40px;
      background-color: #B0C4DE;
    }
  }

`

export const DivFormT = styled.div`
  display:flex;
  flex-direction:column;
  flex-flow: row wrap;
  flex-wrap: wrap;
  justify-content: center;
  form{
    width: 100%;
    gap: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    input {
      height: 40px;
    }
  }
  label{
    display: flex;
    flex-direction: column;
  }

  
`

