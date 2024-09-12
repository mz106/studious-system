/* eslint-disable react/prop-types */
const ProductCard = ({ item }) => {
  return (
    <div
      key={item.id}
      className="width-30 flex flex-column border-red"
      role="cardwrapper"
    >
      <p>{item.name}</p>
      <p>{item.desc}</p>
      <p>£{item.price}</p>
    </div>
  );
};

export default ProductCard;
