import { useDispatch, useSelector } from "react-redux";
import { addItemtoCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import "./product-card.styles.scss";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { imageUrl, name, price } = product;
  const cartItems = useSelector(selectCartItems);

  const handleClick = () => dispatch(addItemtoCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={handleClick} buttonType={BUTTON_TYPE_CLASSES.inverted}>
        Add to Cart
      </Button>
    </div>
  );
};
