import { signIn, signOut, useSession } from 'next-auth/react';
import HeaderItem from './HeaderItem';

const hamMenuItems = [
  {
    title: `Home`,
    href: `/`,
  },
  {
    title: `Pages`,
    subMenu: [
      {
        title: `About Us`,
        href: `/about`,

        id: 1,
      },
      {
        title: `About Team`,
        href: `/about`,

        id: 2,
      },
      {
        title: `Contact Us`,
        href: `/contact`,

        id: 3,
      },
      {
        title: `FAQ`,
        href: `/faq`,

        id: 4,
      },
    ],
  },
  {
    title: `Shop`,
    subMenu: [
      {
        title: `Shop`,
        href: `/shop`,
        id: 5,
      },
      {
        title: `Categories`,
        href: `/`,
        id: 6,
      },
      {
        title: `Account`,
        href: `/`,
        id: 7,
      },
    ],
  },
];

interface Props {
  toggleMenu: (prev: any) => void;
}
export default function HeaderItems({ toggleMenu }: Props) {
  const { data: session } = useSession();
  console.log(session);
  return (
    <ul
      className="pt-8 pb-3 px-0 overflow-y-auto overflow-x-hidden"
      // onClick={() => toggleMenu((prev: any) => !prev)}
    >
      {hamMenuItems.map((item, index) => (
        <HeaderItem key={index} {...item} toggleMenu={toggleMenu} />
      ))}
      <li className="nav-hamb-items">
        <button onClick={() => (session ? signOut() : signIn())}>
          <a>
            <span>{session ? `Log Out` : `Log In`}</span>
          </a>
        </button>
      </li>
    </ul>
  );
}
