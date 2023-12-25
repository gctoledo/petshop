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
  font-family: DM Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
`;

export const Price = styled.p`
  font-family: DM Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  text-transform: capitalize;
  color: #a18a68;
`;

export const ProductInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
`;
