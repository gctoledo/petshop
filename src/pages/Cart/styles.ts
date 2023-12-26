import styled from "styled-components";
import { Container } from "../../styles";

type Props = {
  action: "add" | "remove";
};

export const CartContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ProductCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductCartInfo = styled.div`
  display: flex;

  img {
    max-width: 100%;
    height: 150px;
    border-radius: 3px;

    @media (max-width: 660px) {
      height: 100px;
    }
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  margin-left: 10px;
  gap: 8px;

  h3 {
    @media (max-width: 660px) {
      font-size: 15px;
    }
  }

  span {
    @media (max-width: 660px) {
      font-size: 14px;
    }
  }
`;

export const RemoveButton = styled.button`
  border: none;
  background-color: red;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  color: #fff;
  font-weight: bold;

  @media (max-width: 660px) {
    padding: 6px;
    font-size: 10px;
  }
`;

export const AddRemoveButton = styled.button<Props>`
  border: none;
  background-color: ${(props) => (props.action === "add" ? "green" : "red")};
  padding: 2px 6px;
  margin: 0 4px;
  color: #fff;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
`;

export const TotalCart = styled.p`
  margin-top: 24px;
  font-weight: bold;
  font-size: 20px;
`;
