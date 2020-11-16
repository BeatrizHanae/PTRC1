import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0;
  img {
    align-self: center;
  }
  h2 {
    padding-top: 50px;
  }
`;
export const DivTitulo = styled.div`
  width: 100%;
  flex-direction: column;
  text-align: center;
  h1 {
    padding-top: 0px;
    text-decoration: underline;
  }
  h2 {
    padding: 20px;
  }
`;

export const DivFormCad = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 40vw;
    input {
      height: 40px;
    }
    label {
      display: flex;
      flex-direction: column;
    }
  }
  margin-left:100px;

`;

export const DivImgCad = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    justify-content: center;
    display: flex;
  }

  h2 {
    justify-content: center;
    text-decoration: underline;
    display: flex;
    padding: 20px;
  }
`;
