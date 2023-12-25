import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import {
  AddRemoveButton,
  CartContainer,
  ProductCart,
  ProductCartInfo,
  ProductDetails,
  RemoveButton,
} from "./styles";
import { add, remove } from "../../store/reducers/cart";

const Cart = () => {
  const items = useSelector((state: RootReducer) => state.cart.itens);
  const dispatch = useDispatch();

  return (
    <CartContainer>
      {items.map((item) => (
        <ProductCart key={item.id}>
          <ProductCartInfo>
            <img src={item.cover} alt={item.title} />
            <ProductDetails>
              <h3>{item.title}</h3>
              <span>
                Preço:{" "}
                {item.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <span>
                Quantidade:{" "}
                <AddRemoveButton
                  action="remove"
                  onClick={() => dispatch(remove(item))}
                >
                  -
                </AddRemoveButton>{" "}
                {item.amount}{" "}
                <AddRemoveButton
                  action="add"
                  onClick={() => dispatch(add(item))}
                >
                  +
                </AddRemoveButton>
              </span>
            </ProductDetails>
          </ProductCartInfo>
          <RemoveButton onClick={() => dispatch(remove(item))}>
            Remover
          </RemoveButton>
        </ProductCart>
      ))}
    </CartContainer>
  );
};

export default Cart;
