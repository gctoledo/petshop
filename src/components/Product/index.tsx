import { BsFillCartPlusFill } from "react-icons/bs";

import { Card, Price, ProductImage, ProductInfo, ProductTitle } from "./styles";

const Product = () => {
  return (
    <Card>
      <ProductImage
        src="https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png"
        alt="Nome do produto"
      />
      <ProductInfo>
        <div>
          <ProductTitle>Nome do produto</ProductTitle>
          <Price>R$20,00</Price>
        </div>
        <BsFillCartPlusFill size={20} color={"#212121"} />
      </ProductInfo>
    </Card>
  );
};

export default Product;
