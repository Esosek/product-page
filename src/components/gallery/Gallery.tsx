import { useState } from 'react';

import Lightbox from './Lightbox';
import ProductPrimaryImage from './ProductPrimaryImage';

import GalleryThumbnailList from './GalleryThumbnailList';
import ImageControl from './ImageControl';

export default function Gallery() {
  const [isLightboxShown, setIsLightboxShown] = useState(false);

  function showLightbox() {
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    if (width < 640) return;
    setIsLightboxShown(true);
  }

  function hideLightBox() {
    setIsLightboxShown(false);
  }

  return (
    <>
      {isLightboxShown && <Lightbox onClose={hideLightBox} />}

      <div className="relative sm:max-w-sm sm:mx-auto sm:py-8">
        <ImageControl extraStyles="top-0 bottom-0 w-1/3 px-4 sm:hidden" />
        <ImageControl
          isRight={true}
          extraStyles="top-0 bottom-0 w-1/3 px-4 right-0 sm:hidden"
        />
        <button onClick={showLightbox}>
          <ProductPrimaryImage />
        </button>
        <GalleryThumbnailList />
      </div>
    </>
  );
}
