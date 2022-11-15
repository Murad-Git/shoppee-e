import Link from 'next/dist/client/link';
import { useState } from 'react';
import HeaderToggleItem from './HeaderToggleItem';

interface Props {
  title: string;
  href?: string;
  toggleMenu: (prev: any) => void;
  subMenu?: {
    title: string;
    id: number;
    href: string;
  }[];
}

export default function HeaderItem({
  title,
  href,
  subMenu,
  toggleMenu,
}: Props) {
  const [toggleHeaderItem, setToggleHeaderItem] = useState(false);
  return (
    <li
      className="nav-hamb-items"
      onClick={() => setToggleHeaderItem((prev) => !prev)}
    >
      <Link href={href ? href : ``}>
        <button onClick={() => (href ? toggleMenu((prev: any) => !prev) : ``)}>
          <a>
            <span>{title}</span>
          </a>
        </button>
      </Link>
      {subMenu && (
        <div className="block border-none">
          {toggleHeaderItem && (
            <HeaderToggleItem itemInfo={subMenu} toggleMenu={toggleMenu} />
          )}
        </div>
      )}
    </li>
  );
}
