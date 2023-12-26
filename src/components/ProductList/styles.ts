import styled from "styled-components";

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;

  @media (max-width: 660px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;
