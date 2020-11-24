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
`;
export const Divagrupa = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const DivFormCTT = styled.div`
  display: flex;
  flex-direction: column;
  form {
    padding: 20px;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
    }
    input {
      height: 40px;
      width: 550px;
    }
    #teste {
      display: flex;
      padding-left: 10px;
      width: 550px;
      justify-content: center;
      margin-left: 10px;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  h1 {
    text-decoration: underline;
    text-align: center;
  }
`;
export const DivIcon = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  > img {
    width: 30px;
    align-self: center;
  }
  p {
    padding-left: 10px;
  }
`;
export const Divmapa = styled.div`
  padding-left: 10px;
`;
export const ButtonForm = styled.div`
  padding: 10px;
`;
export const DivImgCTT = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  > p {
    padding-left: 20px;
  }
`;
