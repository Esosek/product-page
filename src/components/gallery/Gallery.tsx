import { useState } from 'react';

import GalleryThumbnail from './GalleryThumbnail';
import Lightbox from './Lightbox';
import ProductPrimaryImage from './ProductPrimaryImage';

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
import GalleryThumbnailList from './GalleryThumbnailList';

interface IGalleryProps {}

const PRODUCT_IMAGES = [
  { full: productImg01.src, thumbnail: productImgThumbnail01.src },
  { full: productImg02.src, thumbnail: productImgThumbnail02.src },
  { full: productImg03.src, thumbnail: productImgThumbnail03.src },
  { full: productImg04.src, thumbnail: productImgThumbnail04.src },
];

export default function Gallery(props: IGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxShown, setIsLightboxShown] = useState(false);

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

  function showLightbox() {
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    if (width < 768) return;
    setIsLightboxShown(true);
  }

  function hideLightBox() {
    setIsLightboxShown(false);
  }

  return (
    <>
      {isLightboxShown && <Lightbox onClose={hideLightBox} />}

      <div className="relative sm:max-w-sm sm:mx-auto sm:py-8">
        <button
          onClick={showPreviousImage}
          className="absolute top-0 bottom-0 w-1/3 px-4 z-10 sm:hidden"
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
          className="absolute top-0 bottom-0 right-0 w-1/3 px-4 z-10 sm:hidden"
        >
          <div className="bg-white size-10 rounded-full content-center ml-auto">
            <img
              src={nextIcon.src}
              alt="Next icon"
              className="mx-auto max-h-4"
            />
          </div>
        </button>
        <button onClick={showLightbox}>
          <ProductPrimaryImage
            productImages={PRODUCT_IMAGES}
            activeImage={activeImage}
          />
        </button>
        <GalleryThumbnailList
          productImages={PRODUCT_IMAGES}
          activeIndex={activeImage}
          onClick={(index) => {
            setActiveImage(index);
          }}
        />
      </div>
    </>
  );
}
