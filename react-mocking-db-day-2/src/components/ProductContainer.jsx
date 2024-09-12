import ProductCard from "./ProductCard";

/* eslint-disable react/prop-types */
const ProductContainer = ({ products }) => {
  console.log("products n productscontaineer: ", products);

  return (
    <div className="flex flex-column width-80">
      <div className="flex border-white space-evenly flex-wrap">
        {products.length > 0 ? (
          products.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default ProductContainer;
