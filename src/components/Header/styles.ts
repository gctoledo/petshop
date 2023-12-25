import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 8px 0;
`;

export const Logo = styled.h1`
  color: #a18a68;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Allerta Stencil;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  user-select: none;

  span {
    color: #191919;
  }
`;
