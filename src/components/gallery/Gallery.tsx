import productImg01 from '../../assets/images/image-product-1.jpg';
import productImgThumbnail01 from '../../assets/images/image-product-1-thumbnail.jpg';
import productImgThumbnail02 from '../../assets/images/image-product-2-thumbnail.jpg';
import productImgThumbnail03 from '../../assets/images/image-product-3-thumbnail.jpg';
import productImgThumbnail04 from '../../assets/images/image-product-4-thumbnail.jpg';

import GalleryThumbnail from './GalleryThumbnail';

interface IGalleryProps {}

export default function Gallery(props: IGalleryProps) {
  return (
    <div>
      <img
        src={productImg01.src}
        alt="Highlighted product image"
        className="rounded-xl mb-6"
      />
      <ul className="grid grid-cols-4 gap-6">
        <GalleryThumbnail
          src={productImgThumbnail01.src}
          alt="Product image 1"
          isSelected={true}
        />
        <GalleryThumbnail
          src={productImgThumbnail02.src}
          alt="Product image 2"
        />
        <GalleryThumbnail
          src={productImgThumbnail03.src}
          alt="Product image 3"
        />
        <GalleryThumbnail
          src={productImgThumbnail04.src}
          alt="Product image 4"
        />
      </ul>
    </div>
  );
}
