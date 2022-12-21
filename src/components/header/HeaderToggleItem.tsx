import Link from 'next/dist/client/link';

interface Props {
  toggleMenu: (prev: any) => void;
  itemInfo: {
    title: string;
    href: string;
    id: number;
  }[];
}

const HeaderToggleItem = ({ itemInfo, toggleMenu }: Props) => {
  return (
    <ul className="p-4">
      {itemInfo.map((item) => (
        <li key={item.id} onClick={() => toggleMenu((prev: any) => !prev)}>
          <Link href={item.href}>
            <a aria-label={item.title} className="nav-ham-drop-items">
              <p>{item.title}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default HeaderToggleItem;
