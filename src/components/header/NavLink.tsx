interface INavLinkProps {
  label: string;
  target?: string;
}

export default function NavLink({ label, target = '#' }: INavLinkProps) {
  return (
    <li className="text-neutral-700 border-b-4 pt-10 pb-8 border-transparent has-[:hover]:text-neutral-900 has-[:hover]:border-primary-400 transition-colors">
      <a href={target}>{label}</a>
    </li>
  );
}
