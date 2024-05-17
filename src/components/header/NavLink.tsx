interface INavLinkProps {
  label: string;
  target?: string;
}

export default function NavLink({ label, target = '#' }: INavLinkProps) {
  return (
    <li className=" border-b-4 border-transparent font-bold md:font-normal md:text-neutral-700 md:pt-10 md:pb-8 has-[:hover]:text-neutral-900 has-[:hover]:border-primary-400 transition-colors">
      <a href={target}>{label}</a>
    </li>
  );
}
