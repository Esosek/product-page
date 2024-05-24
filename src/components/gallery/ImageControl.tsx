import previousIcon from '../../assets/images/icon-previous.svg';
import nextIcon from '../../assets/images/icon-next.svg';

interface IImageControlProps {
  isRight?: boolean;
  onClick?: () => void;
}

export default function ImageControl(props: IImageControlProps) {
  return (
    <button
      onClick={props.onClick}
      className={`absolute top-0 bottom-0 w-1/3 px-4 z-10 sm:hidden ${
        props.isRight ? 'right-0' : ''
      }`}
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
