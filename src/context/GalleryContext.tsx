import { createContext, useState, type ReactNode } from 'react';
import PRODUCTS, { type ProductType } from '../data/products';

type ImagesType = {
  full: string;
  thumbnail: string;
};

type GalleryContextType = {
  images: ImagesType[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
};

type GalleryProviderProps = {
  images: ImagesType[];
  children: ReactNode;
};

const defaultValue: GalleryContextType = {
  images: [],
  selectedIndex: 0,
  setSelectedIndex: () => {},
};

const GalleryContext = createContext<GalleryContextType>(defaultValue);

function GalleryProvider({ images, children }: GalleryProviderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const gallery = {
    images,
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
