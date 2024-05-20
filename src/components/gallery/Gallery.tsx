import previousIcon from '../../assets/images/icon-previous.svg';
import nextIcon from '../../assets/images/icon-next.svg';
import productImg01 from '../../assets/images/image-product-1.jpg';
import productImg02 from '../../assets/images/image-product-2.jpg';
import productImg03 from '../../assets/images/image-product-3.jpg';
import productImg04 from '../../assets/images/image-product-4.jpg';
import productImgThumbnail01 from '../../assets/images/image-product-1-thumbnail.jpg';
import productImgThumbnail02 from '../../assets/images/image-product-2-thumbnail.jpg';
import productImgThumbnail03 from '../../assets/images/image-product-3-thumbnail.jpg';
import productImgThumbnail04 from '../../assets/images/image-product-4-thumbnail.jpg';

import GalleryThumbnail from './GalleryThumbnail';
import { useState } from 'react';

interface IGalleryProps {}

const productImages = [
  { full: productImg01.src, thumbnail: productImgThumbnail01.src },
  { full: productImg02.src, thumbnail: productImgThumbnail02.src },
  { full: productImg03.src, thumbnail: productImgThumbnail03.src },
  { full: productImg04.src, thumbnail: productImgThumbnail04.src },
];

export default function Gallery(props: IGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className="relative sm:max-w-sm sm:mx-auto sm:py-8">
      <button className="absolute left-4 bottom-1/2 bg-white size-10 rounded-full content-center sm:hidden">
        <img
          src={previousIcon.src}
          alt="Previous icon"
          className="mx-auto pr-1 max-h-4"
        />
      </button>
      <button className="absolute right-4 bottom-1/2 bg-white size-10 rounded-full content-center sm:hidden">
        <img src={nextIcon.src} alt="Next icon" className="mx-auto max-h-4" />
      </button>
      <img
        src={productImages[activeImage].full}
        alt="Highlighted product image"
        className="aspect-[4/3] w-full object-cover mb-6 sm:rounded-xl sm:aspect-auto "
      />
      <ul className="hidden sm:grid grid-cols-4 gap-6">
        {Object.entries(productImages).map(([_, value], index) => {
          return (
            <GalleryThumbnail
              key={index}
              src={value.thumbnail}
              alt={`Product image ${index + 1}`}
              isSelected={index === activeImage}
              onPress={() => setActiveImage(index)}
            />
          );
        })}
      </ul>
    </div>
  );
}
