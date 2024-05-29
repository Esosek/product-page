import type { MouseEventHandler, ReactNode } from 'react';

type PrimaryButtonProps = {
  children?: ReactNode;
  onClick?: MouseEventHandler;
};

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="flex justify-center items-center gap-4 w-full 
      bg-primary-400 text-white py-4 px-3 rounded-lg 
      shadow-lg shadow-primary-400/50 
      hover:opacity-75 transition-opacity md:p-3"
    >
      {props.children}
    </button>
  );
}
