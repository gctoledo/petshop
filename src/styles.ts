import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: DM Sans, sans-serif;
  list-style: none;

  body {
    background-color: #f1f1f1;
    padding-bottom: 80px;
  }
}

`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 660px) {
    width: 85%;
  }
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  text-transform: capitalize;
  color: #a18a68;
`;

export default GlobalStyle;
