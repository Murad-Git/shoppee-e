import Link from 'next/dist/client/link';

interface Props {
  toggleMenu: (prev: any) => void;
  itemInfo: {
    title: string;
    href: string;
    id: number;
  }[];
}

export default function HeaderToggleItem({ itemInfo, toggleMenu }: Props) {
  return (
    <ul className="p-4">
      {itemInfo.map((item) => (
        <li key={item.id} onClick={() => toggleMenu((prev: any) => !prev)}>
          <Link href={item.href}>
            <a className="nav-ham-drop-items">
              <span>{item.title}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
