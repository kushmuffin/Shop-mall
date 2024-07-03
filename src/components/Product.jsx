import { useContext } from "react";

import { CartContext } from "../store/shopping-cart-context";

export default function Product({
  id,
  image,
  title,
  author,
  price,
  description,
}) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>作者：{author}</p>
          <p>
            {description.split("<br>").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </p>
        </div>
        <p className="product-actions">
          <button onClick={() => addItemToCart(id)}>加入購物車</button>
        </p>
      </div>
    </article>
  );
}
