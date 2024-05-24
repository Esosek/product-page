import { type MouseEventHandler } from 'react';
import ProductPrimaryImage from './ProductPrimaryImage';
import GalleryThumbnailList from './GalleryThumbnailList';
import ImageControl from './ImageControl';

interface ILightboxProps {
  onClose?: MouseEventHandler;
}

export default function Lightbox(props: ILightboxProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-lvh z-10 flex items-center justify-center bg-black/75">
      <div className="flex relative flex-col max-w-md gap-4">
        <button onClick={props.onClose} className="ml-auto">
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        </button>

        <ProductPrimaryImage>
          <ImageControl extraStyles="-left-5" />
          <ImageControl isRight={true} extraStyles="-right-5" />
        </ProductPrimaryImage>
        <GalleryThumbnailList />
      </div>
    </div>
  );
}
