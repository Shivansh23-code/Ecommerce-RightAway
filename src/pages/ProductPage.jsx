import ProductDetail from "../components/product/ProductDetail";
import { useParams  } from "react-router-dom";

const ProductPage = () => {
    const {id} = useParams();
  return (
    <main>
      <ProductDetail productId={id} />
    </main>
  );
}

export default ProductPage
