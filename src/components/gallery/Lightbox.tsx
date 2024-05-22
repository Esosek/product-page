import type { MouseEventHandler } from 'react';

interface ILightboxProps {
  onClose?: MouseEventHandler;
}

export default function Lightbox(props: ILightboxProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-lvh z-10 bg-black/75"></div>
  );
}
