import type { MouseEventHandler } from 'react';
import GalleryThumbnail from './GalleryThumbnail';

interface IGalleryThumbnailListProps {
  productImages: { full: string; thumbnail: string }[];
  activeIndex: number;
  onClick: (index: number) => void;
}

export default function GalleryThumbnailList(
  props: IGalleryThumbnailListProps
) {
  return (
    <ul className="hidden sm:grid grid-cols-4 gap-6">
      {props.productImages.map((value, index) => {
        return (
          <GalleryThumbnail
            key={index}
            src={value.thumbnail}
            alt={`Product image ${index + 1}`}
            isSelected={index === props.activeIndex}
            onPress={() => props.onClick(index)}
          />
        );
      })}
    </ul>
  );
}
