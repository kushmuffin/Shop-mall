import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import Product from './components/Product.jsx';
import Footer from './components/Footer.jsx';
import CartContextProvider, { CartContext } from './store/shopping-cart-context.jsx';
import { useContext } from 'react';

function App() {
  const { filteredProducts } = useContext(CartContext);

  return (
    <CartContextProvider>
      <Header />
      <Shop>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
      <Footer />
    </CartContextProvider>
  );
}

export default App;
