import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  h1 {
    padding-top: 20px;
    text-align: center;
    text-decoration: underline;
  }
  h3 {
    padding-top: 20px;
    text-align: center;
  }
`;
export const DivForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 150%;
    input {
      height: 40px;
    }
    label {
      display: flex;
      flex-direction: column;
    }
  }

  h5 {
    text-align: center;
    padding-top: 0px;
    color: #1e3e59;
  }
  a {
    color: #f24f13;
  }
`;
export const Divagrupa = styled.div`
  display: flex;
  flex-wrap: row;
  flex-direction: flex;
  align-items: center;
  justify-content: space-around;
`;
export const DivImg = styled.div`
  display: flex;
`;
