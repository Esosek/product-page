import { useContext, useState } from 'react';

import Lightbox from './Lightbox';
import ProductPrimaryImage from './ProductPrimaryImage';

import previousIcon from '../../assets/images/icon-previous.svg';
import nextIcon from '../../assets/images/icon-next.svg';

import GalleryThumbnailList from './GalleryThumbnailList';
import { GalleryContext } from '../../context/GalleryContext';

export default function Gallery() {
  const [isLightboxShown, setIsLightboxShown] = useState(false);
  const galleryContext = useContext(GalleryContext);

  function showPreviousImage() {
    const selectedIndex = galleryContext.selectedIndex;
    if (selectedIndex === 0) {
      galleryContext.setSelectedIndex(galleryContext.images.length - 1);
    } else galleryContext.setSelectedIndex(selectedIndex - 1);
  }

  function showNextImage() {
    const selectedIndex = galleryContext.selectedIndex;
    if (selectedIndex >= galleryContext.images.length - 1) {
      galleryContext.setSelectedIndex(0);
    } else galleryContext.setSelectedIndex(selectedIndex + 1);
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
          <ProductPrimaryImage />
        </button>
        <GalleryThumbnailList />
      </div>
    </>
  );
}
