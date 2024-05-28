import { createContext, useState, type PropsWithChildren } from 'react';
import type { ProductType } from '../data/products';

type CartContextType = {
  products: ProductType[];
  addProduct: (product: ProductType) => void;
  clear: () => void;
};

const defaultValue: CartContextType = {
  products: [],
  addProduct: () => {},
  clear: () => {},
};

const CartContext = createContext(defaultValue);

export default function CartContextProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<ProductType[]>([]);

  function addProduct(product: ProductType) {
    setProducts((prevValue) => {
      const existingProductIndex = prevValue.findIndex(
        (p) => p.id === product.id
      );
      if (existingProductIndex !== -1) {
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = {
          ...updatedProducts[existingProductIndex],
          quantity: updatedProducts[existingProductIndex].quantity + 1,
        };
        return updatedProducts;
      } else {
        return [...prevValue, { ...product, quantity: 1 }];
      }
    });
  }

  return (
    <CartContext.Provider
      value={{ products, addProduct, clear: () => setProducts([]) }}
    >
      {children}
    </CartContext.Provider>
  );
}
