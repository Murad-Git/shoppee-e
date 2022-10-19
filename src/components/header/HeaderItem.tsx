import React, { useState } from 'react';
import HeaderToggleItem from './HeaderToggleItem';

interface Props {
  title: string;
  subMenu?: {
    title: string;
    id: number;
  }[];
}

export default function HeaderItem({ title, subMenu }: Props) {
  const [toggleHeaderItem, setToggleHeaderItem] = useState(false);
  return (
    <li
      className="nav-hamb-items"
      onClick={() => setToggleHeaderItem((prev) => !prev)}
    >
      <a>
        <span>{title}</span>
      </a>
      {subMenu && (
        <div className="block border-none">
          {toggleHeaderItem && <HeaderToggleItem itemInfo={subMenu} />}
        </div>
      )}
    </li>
  );
}
