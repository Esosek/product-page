import type { MouseEventHandler } from 'react';

type GalleryThumbnailProps = {
  src: string;
  alt?: string;
  isSelected?: boolean;
  onPress?: MouseEventHandler;
};

export default function GalleryThumbnail({
  src,
  alt = '',
  isSelected = false,
  onPress,
}: GalleryThumbnailProps) {
  const selectedClasses = isSelected && 'outline outline-2 outline-primary-400';
  return (
    <li
      className={`max-h-20 rounded-xl overflow-clip aspect-square ${selectedClasses}`}
    >
      <button onClick={onPress} className="bg-white">
        <img
          src={src}
          alt={alt}
          className={` transition-opacity ${
            isSelected ? 'opacity-30' : 'hover:opacity-30'
          }`}
        />
      </button>
    </li>
  );
}
