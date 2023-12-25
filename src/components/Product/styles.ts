import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 3px;
`;

export const ProductTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
`;

export const AddButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
`;
