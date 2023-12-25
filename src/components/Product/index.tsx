import { useDispatch } from "react-redux";
import { add } from "../../store/reducers/cart";

import { BsFillCartPlusFill } from "react-icons/bs";

import {
  AddButton,
  Card,
  ProductImage,
  ProductInfo,
  ProductTitle,
} from "./styles";
import { Product as ProductProps } from "../../types";
import { Link } from "react-router-dom";
import { Price } from "../../styles";

type Props = {
  product: ProductProps;
};

const Product = ({ product }: Props) => {
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(add(product));
  };

  return (
    <Card>
      <ProductImage src={product.cover} alt={product.title} />
      <ProductInfo>
        <div>
          <ProductTitle>
            <Link to={`produto/${product.id}`}>{product.title}</Link>
          </ProductTitle>
          <Price>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Price>
        </div>
        <div>
          <AddButton type="button" onClick={() => addProduct()}>
            <BsFillCartPlusFill size={24} color={"#212121"} />
          </AddButton>
        </div>
      </ProductInfo>
    </Card>
  );
};

export default Product;
