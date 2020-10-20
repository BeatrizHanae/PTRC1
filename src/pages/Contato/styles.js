import styled from 'styled-components';

export const Container = styled.section`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

`;
export const DivFormCTT  = styled.div` 
 display: flex;
 flex-direction: column;
  form{
    padding: 20px;
    input {
      height: 40px;
      width: 550px;
    }
  }
 
  label{
    display: flex;
    flex-direction: column;
    
    
  }
`;
export const DivIcon = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  >img{
    width: 30px;
    align-self:center;
  }

`
export const Divmapa = styled.div`

`
export const DivImgCTT = styled.div`
  
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  
  
`;
