import Gallery from '../gallery/Gallery';
import ProductInfo from './ProductInfo';

interface IProductPageProps {}

export default function ProductPage(props: IProductPageProps) {
  return (
    <main className="grid py-16 items-center md:gap-24 md:grid-cols-2 md:px-10">
      <Gallery />
      <ProductInfo />
    </main>
  );
}
