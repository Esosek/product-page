import { createContext, useState, type ReactNode } from 'react';
import PRODUCT_IMAGES from '../data/productImages';

type ImagesType = {
  full: string;
  thumbnail: string;
};

interface GalleryContextType {
  images: ImagesType[];
  setImages: (images: ImagesType[]) => void;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

const defaultValue: GalleryContextType = {
  images: PRODUCT_IMAGES,
  setImages: () => {},
  selectedIndex: 0,
  setSelectedIndex: () => {},
};

const GalleryContext = createContext<GalleryContextType>(defaultValue);

interface GalleryProviderProps {
  children: ReactNode;
}

function GalleryProvider({ children }: GalleryProviderProps) {
  const [images, setImages] = useState<ImagesType[]>(PRODUCT_IMAGES);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const gallery = {
    images,
    setImages,
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
