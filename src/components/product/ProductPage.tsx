import { GalleryProvider } from '../../context/GalleryContext';
import { type ProductType } from '../../data/products';
import Gallery from '../gallery/Gallery';
import ProductInfo from './ProductInfo';

type ProductPageProps = {
  product: ProductType;
};

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <main className="grid py-16 items-center md:gap-24 md:grid-cols-2 md:px-10">
      <GalleryProvider images={product.images}>
        <Gallery />
      </GalleryProvider>
      <ProductInfo />
    </main>
  );
}
