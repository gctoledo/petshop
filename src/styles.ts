import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: DM Sans, sans-serif;
  list-style: none;

  body {
    background-color: #f1f1f1;
  }
}

`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;

export default GlobalStyle;
