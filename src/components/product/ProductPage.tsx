import ProductInfo from './ProductInfo';

interface IProductPageProps {}

export default function ProductPage(props: IProductPageProps) {
  return (
    <main className="grid grid-cols-2 p-10">
      <ProductInfo />
    </main>
  );
}
