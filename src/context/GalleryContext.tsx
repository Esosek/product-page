import { createContext, useState, type ReactNode } from 'react';
import PRODUCTS, { type ProductType } from '../data/products';

type ImagesType = {
  full: string;
  thumbnail: string;
};

interface GalleryContextType {
  images: ImagesType[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

const defaultValue: GalleryContextType = {
  images: PRODUCTS[0].images,
  selectedIndex: 0,
  setSelectedIndex: () => {},
};

const GalleryContext = createContext<GalleryContextType>(defaultValue);

interface GalleryProviderProps {
  product: ProductType;
  children: ReactNode;
}

function GalleryProvider({ product, children }: GalleryProviderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const gallery = {
    images: product.images,
    selectedIndex,
    setSelectedIndex,
  };

  return (
    <GalleryContext.Provider value={gallery}>
      {children}
    </GalleryContext.Provider>
  );
}

export { GalleryContext, GalleryProvider };
