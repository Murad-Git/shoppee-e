import useSnackBar from '@/hooks/use-snackBar';
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
  const notLogged = useSnackBar({
    snacktype: {
      type: `message`,
      message: `You need to Login`,
    },
    variant: `warning`,
  });
  const handleGoProfile = () => {
    session ? router.push(`/profile`) : notLogged();
  };

  return (
    <>
      <nav className="header navbar ">
        <div className="container flex flex-wrap justify-between items-center">
          <button
            className="menuToggle md:hidden"
            onClick={() => setHamMenuToggle((prev) => !prev)}
          >
            <input
              type="checkbox"
              checked={hamMenuToggle}
              name="hamburger"
              id="hamburger"
            />
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Link href="/">
            <a className="navbar-brand inline-block whitespace-nowrap cursor-pointer">
              <span className="font-bold">
                Shoppee-<i>e</i>
              </span>
            </a>
          </Link>
          <nav className="header_nav">
            {hamMenuToggle && (
              <div className="block md:hidden sidebar-wrapper absolute top-0 left-0 bottom-0 z-30 h-screen overflow-x-hidden w-[300px] bg-[#262626] text-white ">
                <nav className="w-[300px] relative left-0 top-20 bottom-0  font-sans">
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
            <ul className="leading-10 hidden md:inline-block space-x-9">
              <li className="relative inline-block">
                <Link href="/">Home</Link>
              </li>
              <li className="relative inline-block" onClick={handleGoProfile}>
                <a className="">Profile</a>
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
          <ul className="h-full flex flex-wrap xl:space-x-4 items-center">
            <li onClick={handleGoProfile}>
              <a className="box-border p-4 cursor-pointer">
                <FontAwesomeIcon
                  className="h-4 text-[#262626] hover:text-accent-color"
                  icon={session ? filledUser : faUser}
                />
              </a>
            </li>
            <li
              className="hidden lg:block"
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
      {/* {status === `authenticated` && welcomeSnackBar()} */}
      {hamMenuToggle && <Overlay onConfirm={setHamMenuToggle} />}
    </>
  );
}
