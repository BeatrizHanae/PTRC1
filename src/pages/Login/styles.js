import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: row;
  flex-direction: flex;
  align-items: center;
  justify-content: space-around;
`;
export const DivForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 150%;
    input {
      height: 40px;
    }
    label {
      display: flex;
      flex-direction: column;
    }
  }
  h1 {
    text-decoration: center;
  }
`;
export const DivImg = styled.div`
  display: flex;
`;
