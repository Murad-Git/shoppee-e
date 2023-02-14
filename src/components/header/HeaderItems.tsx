import { hamMenuItems } from '@/utils/database';
import { signIn, signOut, useSession } from 'next-auth/react';
import { HeaderItem } from './HeaderItem';

interface Props {
  toggleMenu: (prev: any) => void;
}
export const HeaderItems = ({ toggleMenu }: Props) => {
  const { data: session } = useSession();
  return (
    <ul className="pt-8 pb-3 px-0 overflow-y-auto overflow-x-hidden">
      {hamMenuItems.map((item) => (
        <HeaderItem key={item.id} {...item} toggleMenu={toggleMenu} />
      ))}
      <li className="nav-hamb-items">
        <button onClick={() => (session ? signOut() : signIn())}>
          <a aria-label="logging button">
            <p>{session ? `Log Out` : `Log In`}</p>
          </a>
        </button>
      </li>
    </ul>
  );
};
