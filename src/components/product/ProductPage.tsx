import Gallery from '../gallery/Gallery';
import ProductInfo from './ProductInfo';

interface IProductPageProps {}

export default function ProductPage(props: IProductPageProps) {
  return (
    <main className="grid grid-cols-2 px-10 py-14 items-center gap-24">
      <Gallery />
      <ProductInfo />
    </main>
  );
}
