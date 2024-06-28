import { useState, useRef, useContext } from 'react';

import CartModal from './CartModal.jsx';
import { CartContext } from '../store/shopping-cart-context.jsx';

export default function Header() {
  const [term, setTerm] = useState('');
  const modal = useRef();
  const { items, setSearchTerm } = useContext(CartContext);

  const cartQuantity = items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  function handleChange(e){
    setTerm(e.target.value);
    setSearchTerm(e.target.value);
  }

  let modalActions = <button>Close</button>;

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button>Close</button>
        <button>Checkout</button>
      </>
    );
  }

  return (
    <>
      <CartModal
        ref={modal}
        title="Your Cart"
        actions={modalActions}
      />
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Context</h1>
        </div>
        <input type="text" placeholder='search something...' value={term} onChange={handleChange}/>
        <p>
          <button onClick={handleOpenCartClick}>Cart ({cartQuantity})</button>
        </p>
      </header>
    </>
  );
}
