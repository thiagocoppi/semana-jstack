import styled from 'styled-components';

export const Container = styled.header`
  background: #D73035;
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  max-width: 1216px;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #fff;
      font-size: 32px;
    }
    h2 {
      color: #fff;
      font-size: 16px;
      opacity: 0.9;
      font-weight: 400;
      margin-top: 6px;
    }
  }
`;
