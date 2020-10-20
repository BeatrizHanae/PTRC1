import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  img {
    width: 100vw;
  }
  position: relative;
  top: -100px;
  z-index: -1;
  margin-bottom: -100px;
`;
