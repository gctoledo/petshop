import { List } from "./styles";
import Product from "../Product";

import { useGetProductsQuery } from "../../services/api";

const ProductList = () => {
  const { data: products } = useGetProductsQuery();

  return (
    <List>
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </List>
  );
};

export default ProductList;
