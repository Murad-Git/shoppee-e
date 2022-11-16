import { productsValue } from '@/store/productsSlice';
import { useAppSelector } from '@/types/hooks';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowRightFromBracket,
  faCartShopping,
  faUser as filledUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useState } from 'react';
import Overlay from '../ui/Overlay';
import HeaderItems from './HeaderItems';

export default function Header() {
  const router = useRouter();
  const { data: session } = useSession();
  const [hamMenuToggle, setHamMenuToggle] = useState<boolean>(false);
  const productsList = useAppSelector(productsValue);

  const handleGoProfile = () => {
    session ? router.push(`/profile`) : alert(`you need to login`);
  };
  return (
    <>
      {hamMenuToggle && (
        <div className="sidebar-wrapper fixed top-0 left-0 bottom-0 z-50 h-screen overflow-y-auto overflow-x-hidden w-[300px] transition-all">
          <nav className="w-[300px] absolute left-0 top-0 bottom-0 bg-[#262626] text-white overflow-y-auto font-sans">
            <header className="my-4 mx-0 text-lg w-max font-light text-left transition-[width] ease-in-out duration-300 pl-6">
              <Link href="/">
                <span
                  className="mx-1 font-bold text-4xl"
                  onClick={() => setHamMenuToggle((prev) => !prev)}
                >
                  Shoppee-<i>e</i>
                </span>
              </Link>
            </header>
            <HeaderItems toggleMenu={setHamMenuToggle} />
            <div></div>
          </nav>
        </div>
      )}
      <nav className="header navbar ">
        <div className="container flex flex-wrap justify-between items-center">
          <button
            className="md:hidden"
            onClick={() => setHamMenuToggle((prev) => !prev)}
          >
            HM
          </button>
          <Link href="/">
            <a className="navbar-brand inline-block whitespace-nowrap cursor-pointer">
              <span className="font-bold">
                Shoppee-<i>e</i>
              </span>
            </a>
          </Link>
          <nav className="header_nav">
            <ul className="leading-10">
              <li className="relative inline-block">
                <Link href="/">Home</Link>
              </li>
              <li className="relative inline-block">
                <a className="">Pages</a>
              </li>
              <li className="relative inline-block">
                <Link href="/shop" className="">
                  Shop
                </Link>
              </li>
              <li className="relative inline-block">
                <a className="">Blog</a>
              </li>
            </ul>
          </nav>
          <ul className="h-full flex flex-wrap md:space-x-4 items-center">
            <li onClick={handleGoProfile}>
              <Link href="/profile">
                <a className="box-border p-4">
                  <FontAwesomeIcon
                    className="h-4 text-[#262626] hover:text-accent-color"
                    icon={session ? filledUser : faUser}
                  />
                </a>
              </Link>
            </li>
            <li
              className="hidden md:block"
              onClick={() => (session ? signOut() : signIn())}
            >
              <button>
                <a className="box-border md:p-4 flex items-center">
                  {session ? (
                    <>
                      <p className="mx-2">Log Out</p>
                      <FontAwesomeIcon
                        className="h-4 text-[#262626] hover:text-accent-color"
                        icon={faArrowRightFromBracket}
                      />
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon
                        className="h-4 text-[#262626] hover:text-accent-color"
                        icon={faArrowRightFromBracket}
                      />
                      <p className="mx-2">Log In</p>
                    </>
                  )}
                </a>
              </button>
            </li>
            <li>
              <Link href="/cart">
                <a className="box-border p-4 relative">
                  <p className="absolute text-[9px] inline-block font-bold text-[#3c484f] mb-0 ml-2 top-0">
                    {productsList.length > 0 ? productsList.length : ``}
                  </p>
                  <FontAwesomeIcon
                    className="h-4 text-[#262626] hover:text-accent-color"
                    icon={faCartShopping}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {hamMenuToggle && <Overlay onConfirm={setHamMenuToggle} />}
    </>
  );
}
