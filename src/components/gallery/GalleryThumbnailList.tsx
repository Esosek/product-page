import { useContext } from 'react';
import { GalleryContext } from '../../context/GalleryContext';
import GalleryThumbnail from './GalleryThumbnail';

export default function GalleryThumbnailList() {
  const galleryContext = useContext(GalleryContext);
  return (
    <ul className="hidden mt-4 sm:flex sm:justify-center gap-6">
      {galleryContext.images.map((value, index) => {
        return (
          <GalleryThumbnail
            key={index}
            src={value.thumbnail}
            alt={`Product image ${index + 1}`}
            isSelected={index === galleryContext.selectedIndex}
            onPress={() => galleryContext.setSelectedIndex(index)}
          />
        );
      })}
    </ul>
  );
}
