import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";

import "./product-card.styles.scss";

export const ProductCard = ({ product }) => {
  const { addItemtoCart } = useContext(CartContext);
  const { imageUrl, name, price } = product;

  const handleClick = () => addItemtoCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={handleClick} buttonType="inverted ">
        Add to Cart
      </Button>
    </div>
  );
};
