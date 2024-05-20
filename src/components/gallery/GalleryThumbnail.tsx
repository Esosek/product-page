import type { MouseEventHandler } from 'react';

interface IGalleryThumbnailProps {
  src: string;
  alt?: string;
  isSelected?: boolean;
  onPress?: MouseEventHandler;
}

export default function GalleryThumbnail({
  src,
  alt = '',
  isSelected = false,
  onPress,
}: IGalleryThumbnailProps) {
  const selectedClasses = isSelected && 'outline outline-2 outline-primary-400';
  return (
    <li
      className={` rounded-xl overflow-clip aspect-square ${selectedClasses}`}
    >
      <button onClick={onPress}>
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
