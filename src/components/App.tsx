import PRODUCTS from '../data/products';
import Header from './header/Header';
import ProductPage from './product/ProductPage';

export default function App() {
  return (
    <>
      <Header />
      <ProductPage product={PRODUCTS[0]} />
    </>
  );
}
