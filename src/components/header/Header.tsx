import logo from '../../assets/images/logo.svg';
import profileAvatar from '../../assets/images/image-avatar.png';
import Navbar from './Navbar';
import Cart from '../cart/Cart';

export default function Header() {
  return (
    <header className="flex items-center z-30 fixed h-16 bg-white gap-6 top-0 left-0 right-0 py-4 px-6 md:static md:h-auto md:gap-10 md:border-b-[1px] md:border-neutral-400 md:p-0">
      <a href="#">
        <img src={logo.src} alt="Sneakers logo" />{' '}
      </a>
      <Navbar />
      <Cart />
      <button className="rounded-full border-2 border-transparent hover:border-primary-400 transition-colors">
        <img
          src={profileAvatar.src}
          alt="User avatar"
          className="max-h-7 sm:max-h-10"
        />
      </button>
    </header>
  );
}
