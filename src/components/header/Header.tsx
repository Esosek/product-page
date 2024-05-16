import NavLink from './NavLink';

import logo from '../../assets/images/logo.svg';
import profileAvatar from '../../assets/images/image-avatar.png';

export default function Header() {
  return (
    <header className="flex items-center gap-10 mx-4 border-b-[1px] border-neutral-400">
      <nav className="pt-8">
        <ul className="flex gap-8">
          <a href="#">
            <img src={logo.src} alt="Sneakers logo" />{' '}
          </a>
          <NavLink label="Collections" />
          <NavLink label="Men" />
          <NavLink label="Women" />
          <NavLink label="About" />
          <NavLink label="Contact" />
        </ul>
      </nav>
      <button className="ml-auto">
        <svg
          className="group"
          aria-label="Cart icon"
          width="22"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="group-hover:fill-neutral-900 transition-colors"
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="#69707D"
          />
        </svg>
      </button>
      <button className="rounded-full border-2 border-transparent hover:border-primary-400 transition-colors">
        <img src={profileAvatar.src} alt="User avatar" className="max-h-10" />
      </button>
    </header>
  );
}
