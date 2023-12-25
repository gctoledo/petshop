import { BsFillCartPlusFill } from "react-icons/bs";

import { Card, Price, ProductImage, ProductInfo, ProductTitle } from "./styles";
import { Product as ProductProps } from "../../types";

type Props = {
  product: ProductProps;
};

const Product = ({ product }: Props) => {
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
          <BsFillCartPlusFill size={20} color={"#212121"} />
        </div>
      </ProductInfo>
    </Card>
  );
};

export default Product;
