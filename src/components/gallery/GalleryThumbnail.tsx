interface IGalleryThumbnailProps {
  src: string;
  alt?: string;
  isSelected?: boolean;
}

export default function GalleryThumbnail({
  src,
  alt = '',
  isSelected = false,
}: IGalleryThumbnailProps) {
  const selectedClasses = isSelected && 'outline outline-2 outline-primary-400';
  return (
    <li
      className={` rounded-xl overflow-clip aspect-square ${selectedClasses}`}
    >
      <button>
        <img
          src={src}
          alt={alt}
          className={`transition-opacity ${isSelected && 'opacity-30'}`}
        />
      </button>
    </li>
  );
}
