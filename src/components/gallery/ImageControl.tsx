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
      className={`absolute z-10 ${props.extraStyles}`}
    >
      <div
        className={`bg-white size-10 rounded-full content-center ${
          props.isRight ? 'ml-auto' : ''
        }`}
      >
        <img
          src={props.isRight ? nextIcon.src : previousIcon.src}
          alt="Previous icon"
          className={`mx-auto max-h-4 ${props.isRight ? 'pl-[2px]' : 'pr-1'}`}
        />
      </div>
    </button>
  );
}
