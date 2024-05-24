import { createContext, useState, type ReactNode } from 'react';

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

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

interface GalleryProviderProps {
  children: ReactNode;
}

function GalleryProvider({ children }: GalleryProviderProps) {
  const [images, setImages] = useState<ImagesType[]>([
    { full: '', thumbnail: '' },
  ]);
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
