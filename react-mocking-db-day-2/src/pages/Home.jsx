/* eslint-disable react/prop-types */
import ProductContainer from "../components/ProductContainer";

const Home = ({ products }) => {
  return (
    <div className="flex flex-column width-100 border-red center-content">
      <ProductContainer products={products} />
    </div>
  );
};

export default Home;
