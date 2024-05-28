import { useEffect, useRef, useState } from 'react';

import NavLink from './NavLink';

import closeIcon from '../../assets/images/icon-close.svg';
import menuIcon from '../../assets/images/icon-menu.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      backdropRef.current!.style.display = '';
      backdropRef.current!.style.opacity = '1';
    } else {
      backdropRef.current!.style.opacity = '0';
      setTimeout(() => {
        backdropRef.current!.style.display = 'none';
      }, 500);
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={backdropRef}
        className={
          'fixed top-0 right-0 bottom-0 left-0 bg-black/75 md:hidden transition-opacity duration-500'
        }
      ></div>
      <button onClick={() => setIsOpen(true)} className="-order-1 md:hidden">
        <img src={menuIcon.src} alt="Menu icon" />
      </button>
      <nav
        className={`${
          !isOpen && '-translate-x-full'
        } fixed top-0 bottom-0 left-0 w-2/3 bg-white p-6 transition-transform duration-500 md:p-0 md:static md:translate-x-0 md:transition-none`}
      >
        <button onClick={() => setIsOpen(false)} className="md:hidden pb-14">
          <img src={closeIcon.src} alt="Close icon" />
        </button>
        <ul className="flex flex-col gap-4 md:gap-8 md:flex-row">
          <NavLink label="Collections" />
          <NavLink label="Men" />
          <NavLink label="Women" />
          <NavLink label="About" />
          <NavLink label="Contact" />
        </ul>
      </nav>
    </>
  );
}
