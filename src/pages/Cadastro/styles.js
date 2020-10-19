import styled from 'styled-components';


export const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  img{
    align-self:center;
  }

`
export const DivTitulo = styled.div`
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  text-align:center;

`

export const  DivFormCad = styled.div`
form{
    display: flex;
    flex-direction: column;
    gap: 40px;
    width:250%;
    input {
      height: 40px;
    }
    label{
      display: flex;
      flex-direction: column;

    }
  }

`

export const DivImgCad = styled.div`
  display: flex;  
  flex-direction: column;

  h1{
    justify-content:center;
    display: flex;
  }

  h2{
    justify-content:center;
    text-decoration: underline;
    display: flex;
    padding: 20px;
  }

`

export const DivImgLinhas = styled.div`
  display: flex;
  flex-direction: column;
  background-size: cover;

`
