import React from 'react';

interface Props {
  itemInfo: {
    title: string;
    id: number;
  }[];
}

export default function HeaderToggleItem({ itemInfo }: Props) {
  return (
    <ul className="p-4">
      {itemInfo.map((item) => (
        <li key={item.id}>
          <a
            className="nav-ham-drop-items"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{item.title}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
