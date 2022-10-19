import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faCartShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import Overlay from '../ui/Overlay';
import NavItems from './HeaderItems';

export default function Header() {
  const [hamMenuToggle, setHamMenuToggle] = useState<boolean>(false);

  return (
    <>
      {hamMenuToggle && (
        <div className="sidebar-wrapper fixed top-0 left-0 bottom-0 z-50 h-screen overflow-y-auto overflow-x-hidden w-[300px] transition-all">
          <nav className="w-[300px] absolute left-0 top-0 bottom-0 bg-[#262626] text-white overflow-y-auto font-sans">
            <header className="my-4 mx-0 text-lg w-max font-light text-left transition-[width] ease-in-out duration-300 pl-6">
              <span className="mx-1 font-bold text-4xl">
                Shoppee-<i>e</i>
              </span>
            </header>
            <NavItems />
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
          <Link
            href="/"
            className="navbar-brand inline-block whitespace-nowrap"
          >
            <span className="font-bold">
              Shoppee-<i>e</i>
            </span>
          </Link>
          <nav className="header_nav">
            <ul className="leading-10">
              <li className="relative inline-block">
                <a className="">Home</a>
              </li>
              <li className="relative inline-block">
                <a className="">Pages</a>
              </li>
              <li className="relative inline-block">
                <Link href="/products" className="">
                  Shop
                </Link>
              </li>
              <li className="relative inline-block">
                <a className="">Blog</a>
              </li>
            </ul>
          </nav>
          <ul className="h-full flex flex-wrap space-x-6">
            <li className="hidden md:inline-block ">
              <a href="/cart">
                <FontAwesomeIcon
                  className="h-4 text-[#262626] hover:text-accent-color"
                  icon={faMagnifyingGlass}
                />
              </a>
            </li>
            <li className="hidden md:inline-block">
              <a href="/cart">
                <FontAwesomeIcon
                  className="h-4 text-[#262626] hover:text-accent-color"
                  icon={faUser}
                />
              </a>
            </li>
            <li>
              <a href="/cart">
                <FontAwesomeIcon
                  className="h-4 text-[#262626] hover:text-accent-color"
                  icon={faCartShopping}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {hamMenuToggle && <Overlay onConfirm={setHamMenuToggle} />}
    </>
  );
}
