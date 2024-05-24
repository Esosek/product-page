import { useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContext';

export default function ProductPrimaryImage() {
  const galleryContext = useContext(GalleryContext);
  return (
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
  );
}
