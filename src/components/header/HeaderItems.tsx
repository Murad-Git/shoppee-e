import React from 'react';
import HeaderItem from './HeaderItem';
const hamMenuItems = [
  {
    title: `Home`,
  },
  {
    title: `Pages`,
    subMenu: [
      {
        title: `About Us`,
        id: 1,
      },
      {
        title: `About Team`,
        id: 2,
      },
      {
        title: `Contact Us`,
        id: 3,
      },
      {
        title: `FAQ`,
        id: 4,
      },
    ],
  },
  {
    title: `Shop`,
    subMenu: [
      {
        title: `Shop`,
        id: 5,
      },
      {
        title: `Categories`,
        id: 6,
      },
      {
        title: `Account`,
        id: 7,
      },
    ],
  },
];
export default function HeaderItems() {
  return (
    <ul className="pt-8 pb-3 px-0 overflow-y-auto overflow-x-hidden">
      {hamMenuItems.map((item, index) => (
        <HeaderItem key={index} {...item} />
      ))}
    </ul>
  );
}
