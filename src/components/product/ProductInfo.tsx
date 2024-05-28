import { useState } from 'react';
import QuantitySelect from './QuantitySelect';
import PrimaryButton from '../PrimaryButton';

export default function ProductInfo() {
  const [productCount, setProductCount] = useState(0);
  return (
    <div className="px-6 md:px-0">
      <p className="uppercase text-primary-400 tracking-widest font-bold">
        Sneaker company
      </p>
      <h1 className="text-4xl font-bold my-4 sm:mb-8">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-neutral-700 mb-4">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weathe can offer.
      </p>
      <div className="flex items-center justify-between mb-8 sm:block">
        <div className="flex gap-4 items-center">
          <p className="font-bold text-2xl">$125.00</p>
          <p className="bg-primary-300 text-primary-400 px-2 rounded-md font-bold">
            50%
          </p>
        </div>
        <p className="line-through text-neutral-400">$250.00</p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-[1fr_2fr]">
        <QuantitySelect
          value={productCount}
          onIncrement={() => setProductCount(productCount + 1)}
          onDecrement={() =>
            setProductCount(productCount > 0 ? productCount - 1 : 0)
          }
        />
        <PrimaryButton>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#fff"
            />
          </svg>
          Add to cart
        </PrimaryButton>
      </div>
    </div>
  );
}
