import React, { useState } from 'react';
import NavToggleItem from './NavToggleItem';

interface Props {
  title: string;
  subMenu?: {
    title: string;
    id: number;
  }[];
}

export default function NavItem({ title, subMenu }: Props) {
  const [toggleNavItem, setToggleNavItem] = useState(false);
  return (
    <li
      className="nav-hamb-items"
      onClick={() => setToggleNavItem((prev) => !prev)}
    >
      <a>
        <span>{title}</span>
      </a>
      {subMenu && (
        <div className="block border-none">
          {toggleNavItem && <NavToggleItem itemInfo={subMenu} />}
        </div>
      )}
    </li>
  );
}
