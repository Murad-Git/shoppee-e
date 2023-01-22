import useSnackBar from '@/hooks/use-snackBar';
import { useAppSelector } from '@/types/hooks';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { useState } from 'react';
import Overlay from '../ui/Overlay';
import FunctionalLinks from './FunctionalLinks';
import HeaderItems from './HeaderItems';

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [hamMenuToggle, setHamMenuToggle] = useState(false);
  const darkState = useAppSelector((state) => state.productsSlice.darkMode);
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
      <nav
        className={`header navbar ${
          darkState ? `dark-bg2 shadow-white shadow-lg` : ``
        }`}
      >
        <div className="container flex flex-wrap justify-between items-center">
          <button
            className={`menuToggle md:hidden ${darkState ? `dark-bg` : ``}`}
          >
            <input
              type="checkbox"
              onChange={() => setHamMenuToggle((prev) => !prev)}
              checked={hamMenuToggle}
              name="hamburger"
              id="hamburger"
            />
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Link href="/">
            <a className="navbar-brand inline-block whitespace-nowrap cursor-pointer navbar-item">
              <p
                className={`font-bold text-2xl ${
                  darkState ? `text-gray-200` : ``
                }`}
              >
                Shoppee-<i>e</i>
              </p>
            </a>
          </Link>
          <nav className="header_nav">
            {hamMenuToggle && (
              <div className="block md:hidden sidebar-wrapper absolute top-0 left-0 bottom-0 z-30 h-screen overflow-x-hidden w-[300px] bg-slate-800 text-white ">
                <nav className="w-[300px] relative left-0 top-20 bottom-0  font-sans">
                  <header className="my-4 mx-0 text-lg w-max font-light text-left transition-[width] ease-in-out duration-300 pl-6">
                    <Link href="/">
                      <button
                        className="mx-1 font-bold text-4xl text-gray-200"
                        onClick={() => setHamMenuToggle((prev) => !prev)}
                      >
                        Shoppee-<i>e</i>
                      </button>
                    </Link>
                  </header>
                  <HeaderItems toggleMenu={setHamMenuToggle} />
                </nav>
              </div>
            )}
            {/* Links */}
            <ul className="leading-10 hidden md:inline-block space-x-3  lg:space-x-9 navbar-item">
              <li className="relative inline-block">
                <Link href="/">Home</Link>
              </li>
              <li className="relative inline-block cursor-pointer">
                <button onClick={handleGoProfile}>Profile</button>
              </li>
              <li className="relative inline-block">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="relative inline-block cursor-pointer">
                <a>Blog</a>
              </li>
            </ul>
          </nav>
          {/* Functional buttons */}
          <FunctionalLinks handleGoProfile={handleGoProfile} />
        </div>
      </nav>
      {hamMenuToggle && <Overlay onConfirm={setHamMenuToggle} />}
    </>
  );
};

export default Header;

// request.time < timestamp.date(2022, 12, 2);
