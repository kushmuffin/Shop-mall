import { useState, useRef, useContext } from "react";

import CartModal from "./CartModal.jsx";
import { CartContext } from "../store/shopping-cart-context.jsx";
import logo from "../assets/icon/logo-hugo.png";

export default function Header() {
  const [term, setTerm] = useState("");
  const modal = useRef();
  const { items, setSearchTerm } = useContext(CartContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  function handleChange(e) {
    setTerm(e.target.value);
    setSearchTerm(e.target.value);
  }

  let modalActions = <button>關閉</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>返回</button>
        <button>確認</button>
      </>
    );
  }

  return (
    <>
      <CartModal ref={modal} title="你的購物車" actions={modalActions} />
      <header id="main-header">
        <div id="main-title">
          <img src={logo} alt="" />
          <h1>小書店</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>
            我的購物車 ({cartQuantity})
          </button>
        </p>
      </header>
    </>
  );
}
