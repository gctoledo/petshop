import { FaShoppingCart } from "react-icons/fa";

import { Logo, Header as StyledHeader } from "./styles";
import { Container } from "../../styles";

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <Logo>
          <span>Pet</span>shop
        </Logo>
        <FaShoppingCart size={25} color={"#212121"} />
      </StyledHeader>
    </Container>
  );
};

export default Header;
