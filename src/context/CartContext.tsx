import { createContext, useState, type PropsWithChildren } from 'react';
import type { ProductType } from '../data/products';

type CartContextType = {
  products: ProductType[];
  addProduct: (product: ProductType, quantity: number) => void;
  removeProduct: (product: ProductType) => void;
};

const defaultValue: CartContextType = {
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
};

export const CartContext = createContext(defaultValue);

export default function CartContextProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<ProductType[]>([]);

  function addProduct(product: ProductType, quantity: number = 1) {
    setProducts((prevValue) => {
      const existingProductIndex = prevValue.findIndex(
        (p) => p.id === product.id
      );
      if (existingProductIndex !== -1) {
        const updatedProducts = [...products];
        updatedProducts[existingProductIndex] = {
          ...updatedProducts[existingProductIndex],
          quantity: updatedProducts[existingProductIndex].quantity + quantity,
        };
        return updatedProducts;
      } else {
        return [...prevValue, { ...product, quantity: quantity }];
      }
    });
  }

  function removeProduct(product: ProductType) {
    setProducts((prevValue) => {
      return [...prevValue.filter((p) => p.id !== product.id)];
    });
  }

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}
