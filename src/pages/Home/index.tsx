import ProductList from "../../components/ProductList";
import { Container } from "../../styles";
import { SectionTitle } from "./styles";

const Home = () => {
  return (
    <Container>
      <SectionTitle>Produtos</SectionTitle>
      <ProductList />
    </Container>
  );
};

export default Home;
