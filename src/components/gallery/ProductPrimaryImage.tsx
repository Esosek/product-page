import { useContext, type ReactNode } from 'react';
import { GalleryContext } from '../../context/GalleryContext';

interface IProductPrimaryImageProps {
  children?: ReactNode;
}

export default function ProductPrimaryImage({
  children,
}: IProductPrimaryImageProps) {
  const galleryContext = useContext(GalleryContext);
  return (
    <div className="relative">
      {children}
      <div className="flex overflow-hidden sm:rounded-xl">
        {galleryContext.images.map((value, index) => (
          <img
            key={value.full}
            src={value.full}
            alt={`Product image ${index + 1}`}
            className="aspect-[4/3] w-full object-cover sm:aspect-auto transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(${-100 * galleryContext.selectedIndex}%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
