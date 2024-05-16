import type { MouseEventHandler, ReactNode } from 'react';

interface IPrimaryButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler;
}

export default function PrimaryButton(props: IPrimaryButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className="flex justify-center items-center gap-4 w-full bg-primary-400 text-white p-3 rounded-lg shadow-xl shadow-primary-400/50 hover:opacity-75 transition-opacity"
    >
      {props.children}
    </button>
  );
}
