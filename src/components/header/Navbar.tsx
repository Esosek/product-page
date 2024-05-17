import NavLink from './NavLink';

interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <nav>
      <ul className="flex gap-8">
        <NavLink label="Collections" />
        <NavLink label="Men" />
        <NavLink label="Women" />
        <NavLink label="About" />
        <NavLink label="Contact" />
      </ul>
    </nav>
  );
}
