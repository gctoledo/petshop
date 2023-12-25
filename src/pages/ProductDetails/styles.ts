import styled from "styled-components";

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  background-color: #f9f9f9;
  padding: 8px;
  border-radius: 6px;

  img {
    height: 450px;
    border-radius: 6px;
  }
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  button {
    background-color: #515151;
    padding: 8px;
    font-weight: bold;
    border: none;
    color: #fff;
    cursor: pointer;
    border-radius: 6px;
  }
`;
