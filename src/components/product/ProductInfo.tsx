interface IProductInfoProps {}

export default function ProductInfo(props: IProductInfoProps) {
  return (
    <div>
      <p className="uppercase text-primary-400 tracking-widest font-bold">
        Sneaker company
      </p>
      <h1 className="text-4xl font-bold mt-4 mb-8">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-neutral-700 mb-4">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weathe can offer.
      </p>
      <div className="flex gap-4 items-center mb-1">
        <p className="font-bold text-2xl">$125.00</p>
        <p className="bg-primary-300 text-primary-400 px-2 rounded-md font-bold">
          50%
        </p>
      </div>
      <p className="line-through text-neutral-400">$250.00</p>
      <div>
        {/* QuantitySelect */}
        {/* PrimaryButton */}
      </div>
    </div>
  );
}
