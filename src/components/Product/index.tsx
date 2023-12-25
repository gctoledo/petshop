import { useDispatch } from "react-redux";
import { add } from "../../store/reducers/cart";

import { BsFillCartPlusFill } from "react-icons/bs";

import {
  AddButton,
  Card,
  Price,
  ProductImage,
  ProductInfo,
  ProductTitle,
} from "./styles";
import { Product as ProductProps } from "../../types";

type Props = {
  product: ProductProps;
};

const Product = ({ product }: Props) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <ProductImage src={product.cover} alt={product.title} />
      <ProductInfo>
        <div>
          <ProductTitle>{product.title}</ProductTitle>
          <Price>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Price>
        </div>
        <div>
          <AddButton type="button" onClick={() => dispatch(add(product))}>
            <BsFillCartPlusFill size={20} color={"#212121"} />
          </AddButton>
        </div>
      </ProductInfo>
    </Card>
  );
};

export default Product;
