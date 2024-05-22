interface IProductPrimaryImageProps {
  productImages: { full: string; thumbnail: string }[];
  activeImage: number;
}

export default function ProductPrimaryImage(props: IProductPrimaryImageProps) {
  return (
    <div className="flex overflow-hidden mb-6 sm:rounded-xl">
      {props.productImages.map((value, index) => (
        <img
          key={value.full}
          src={value.full}
          alt={`Product image ${index + 1}`}
          className="aspect-[4/3] w-full object-cover sm:aspect-auto transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(${-100 * props.activeImage}%)`,
          }}
        />
      ))}
    </div>
  );
}
