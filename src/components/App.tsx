import PRODUCTS from '../data/products';
import CartContextProvider from '../context/CartContext';
import Header from './header/Header';
import ProductPage from './product/ProductPage';

export default function App() {
  return (
    <CartContextProvider>
      <Header />
      <ProductPage product={PRODUCTS[0]} />
    </CartContextProvider>
  );
}
