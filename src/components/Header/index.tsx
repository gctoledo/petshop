import { FaShoppingCart } from "react-icons/fa";

import { CartIcon, Logo, Header as StyledHeader } from "./styles";
import { Container } from "../../styles";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

const Header = () => {
  const items = useSelector((state: RootReducer) => state.cart.itens);

  return (
    <Container>
      <StyledHeader>
        <Logo>
          <span>Pet</span>shop
        </Logo>
        <CartIcon>
          <FaShoppingCart size={25} color={"#212121"} />
          {items.length > 0 && <div>{items.length}</div>}
        </CartIcon>
      </StyledHeader>
    </Container>
  );
};

export default Header;
