import styled from 'styled-components';

export const Container = styled.section`
  display:flex;
  place-content: center;
  place-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  width: 90%;
  margin: auto;
  h1{
    text-align:center;
  }
  img{
    align-self: center;
  }
  section{
    display:flex;
    flex-direction: row;
    width:100%;
    justify-content: center;
    div,img{
      width:50%;
    }
    >div{
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
    }
    form{
      display:flex;
      flex-direction:row;
      width:100%;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      >div{
        width:40%;
      }
      div,label{
        display:flex;
        flex-direction:column;

      }
    }
    a{
      width:50%;
      
    }
    input{
      height:40px;
    }
  }
  

`


