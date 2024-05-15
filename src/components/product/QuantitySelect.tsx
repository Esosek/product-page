import plusIcon from '../../assets/images/icon-plus.svg';
import minusIcon from '../../assets/images/icon-minus.svg';
import type { MouseEventHandler } from 'react';

interface IQuantitySelectProps {
  value: number;
  onIncrement?: MouseEventHandler;
  onDecrement?: MouseEventHandler;
}

export default function QuantitySelect(props: IQuantitySelectProps) {
  return (
    <div className="flex w-full justify-between text-center gap-6 bg-neutral-100 rounded-lg py-2 px-3 font-bold sm:max-w-36">
      <button onClick={props.onDecrement} className="hover:opacity-75">
        <img src={minusIcon.src} alt="Minus icon" />
      </button>
      {props.value}
      <button onClick={props.onIncrement} className="hover:opacity-75">
        <img src={plusIcon.src} alt="Plus icon" />
      </button>
    </div>
  );
}
