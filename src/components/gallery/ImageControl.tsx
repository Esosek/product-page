import { useContext } from 'react';
import previousIcon from '../../assets/images/icon-previous.svg';
import nextIcon from '../../assets/images/icon-next.svg';
import { GalleryContext } from '../../context/GalleryContext';

interface IImageControlProps {
  isRight?: boolean;
  extraStyles?: string;
}

export default function ImageControl(props: IImageControlProps) {
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
  return (
    <button
      onClick={props.isRight ? showNextImage : showPreviousImage}
      className={`absolute z-10 group transition-colors ${props.extraStyles}`}
    >
      <div
        className={`bg-white size-10 group rounded-full content-center ${
          props.isRight ? 'ml-auto pl-[2px]' : 'pr-1'
        }`}
      >
        <svg
          width="13"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto"
        >
          <path
            d={props.isRight ? 'm2 1 8 8-8 8' : 'M11 1 3 9l8 8'}
            stroke={'#1D2026'}
            stroke-width="3"
            fill="none"
            fillRule="evenodd"
            className="group-hover:stroke-primary-400 transition-colors"
          />
        </svg>
      </div>
    </button>
  );
}
