import productImg01 from '../assets/images/image-product-1.jpg';
import productImg02 from '../assets/images/image-product-2.jpg';
import productImg03 from '../assets/images/image-product-3.jpg';
import productImg04 from '../assets/images/image-product-4.jpg';
import productImgThumbnail01 from '../assets/images/image-product-1-thumbnail.jpg';
import productImgThumbnail02 from '../assets/images/image-product-2-thumbnail.jpg';
import productImgThumbnail03 from '../assets/images/image-product-3-thumbnail.jpg';
import productImgThumbnail04 from '../assets/images/image-product-4-thumbnail.jpg';

export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  quantity: number;
  images: { full: string; thumbnail: string }[];
};

const PRODUCTS: ProductType[] = [
  {
    id: 0,
    name: 'Fall Limited Edition Sneakers',
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weathe can offer.",
    price: 125,
    originalPrice: 250,
    quantity: 0,
    images: [
      { full: productImg01.src, thumbnail: productImgThumbnail01.src },
      { full: productImg02.src, thumbnail: productImgThumbnail02.src },
      { full: productImg03.src, thumbnail: productImgThumbnail03.src },
      { full: productImg04.src, thumbnail: productImgThumbnail04.src },
    ],
  },
];

export default PRODUCTS;
