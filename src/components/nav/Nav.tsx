import React, { useState } from 'react';
import Overlay from '../ui/Overlay';
import NavItems from './NavItems';

export default function Nav() {
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
      <nav className="header navbar flex justify-start flex-wrap items-center text-xl h-[60px] border-none font-medium z-40 bg-slate-300">
        <div className="container flex flex-wrap justify-between items-center">
          <button onClick={() => setHamMenuToggle((prev) => !prev)}>HM</button>
          <a href="/" className="navbar-brand inline-block whitespace-nowrap">
            <span className="font-bold">Shoppee-e</span>
          </a>
          <ul className="h-full flex flex-wrap">
            <li>
              <a href="/cart">
                <button>shopIcon</button>
              </a>
            </li>
            <li className="hidden">
              <a href="/cart">
                <button>shopIcon</button>
              </a>
            </li>
            <li className="hidden">
              <a href="/cart">
                <button>shopIcon</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {hamMenuToggle && <Overlay onConfirm={setHamMenuToggle} />}
    </>
  );
}
