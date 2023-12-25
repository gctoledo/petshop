import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 8px 0;
  margin-bottom: 24px;

  a {
    text-decoration: none;
  }
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

export const CartIcon = styled.div`
  max-height: 30px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-family: sans-serif;
    border-radius: 50%;
    transform: translateY(-30px) translateX(12px);
    background-color: #a18a68;
    padding: 4px;
    width: 8px;
    height: 8px;
    color: #fff;
  }
`;
