import { useParams } from "react-router-dom";
import { Container, Price } from "../../styles";
import { useGetProductByIDQuery } from "../../services/api";
import { ProductContainer, ProductInfos } from "./styles";

const ProductDetails = () => {
  const { id } = useParams();

  const { data: product } = useGetProductByIDQuery(Number(id));

  return (
    <Container>
      <ProductContainer>
        <img src={product?.cover} alt={product?.title} />
        <ProductInfos>
          <h3>{product?.title}</h3>
          <Price>
            {product?.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Price>
          <p>{product?.description}</p>
          <button>Adicionar ao carrinho</button>
        </ProductInfos>
      </ProductContainer>
    </Container>
  );
};

export default ProductDetails;
