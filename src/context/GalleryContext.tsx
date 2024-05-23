import { createContext, useState, type ReactNode } from 'react';

interface GalleryContextType {
  images: string[];
  setImages: (images: string[]) => void;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

const defaultValue: GalleryContextType = {
  images: [''],
  setImages: () => {},
  selectedIndex: 0,
  setSelectedIndex: () => {},
};

const GalleryContext = createContext<GalleryContextType>(defaultValue);

interface GalleryProviderProps {
  children: ReactNode;
}

function GalleryProvider({ children }: GalleryProviderProps) {
  const [images, setImages] = useState<string[]>([]);
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
