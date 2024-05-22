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

const PRODUCT_IMAGES = [
  { full: productImg01.src, thumbnail: productImgThumbnail01.src },
  { full: productImg02.src, thumbnail: productImgThumbnail02.src },
  { full: productImg03.src, thumbnail: productImgThumbnail03.src },
  { full: productImg04.src, thumbnail: productImgThumbnail04.src },
];

export default function Gallery(props: IGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);

  function showPreviousImage() {
    setActiveImage((index) =>
      index === 0 ? PRODUCT_IMAGES.length - 1 : index - 1
    );
  }

  function showNextImage() {
    setActiveImage((index) =>
      index === PRODUCT_IMAGES.length - 1 ? 0 : index + 1
    );
  }
  return (
    <div className="relative sm:max-w-sm sm:mx-auto sm:py-8">
      <button
        onClick={showPreviousImage}
        className="absolute top-0 bottom-0 w-1/3 px-4 sm:hidden"
      >
        <div className="bg-white size-10 rounded-full content-center">
          <img
            src={previousIcon.src}
            alt="Previous icon"
            className="mx-auto pr-1 max-h-4"
          />
        </div>
      </button>
      <button
        onClick={showNextImage}
        className="absolute top-0 bottom-0 right-0 w-1/3 px-4 sm:hidden"
      >
        <div className="bg-white size-10 rounded-full content-center ml-auto">
          <img src={nextIcon.src} alt="Next icon" className="mx-auto max-h-4" />
        </div>
      </button>
      <div>
        <img
          src={PRODUCT_IMAGES[activeImage].full}
          alt="Highlighted product image"
          className="aspect-[4/3] w-full object-cover mb-6 sm:rounded-xl sm:aspect-auto "
        />
      </div>

      <ul className="hidden sm:grid grid-cols-4 gap-6">
        {PRODUCT_IMAGES.map((value, index) => {
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
