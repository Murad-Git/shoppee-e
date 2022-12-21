import { darkMode, productsValue } from '@/store/productsSlice';
import { useAppDispatch, useAppSelector } from '@/types/hooks';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowRightFromBracket,
  faCartShopping,
  faMoon,
  faSun,
  faUser as filledUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

const FunctionalLinks = ({
  handleGoProfile,
}: {
  handleGoProfile: () => void;
}) => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const productsList = useAppSelector(productsValue);
  const darkState = useAppSelector((state) => state.productsSlice.darkMode);
  return (
    <ul
      className={`h-full flex flex-wrap xl:space-x-4 items-center navbar-item ${
        darkState ? `dark-bg2` : ``
      }`}
    >
      <li>
        <button
          onClick={() => dispatch(darkMode())}
          aria-label="dark mode"
          className="box-border p-4 cursor-pointer transition-all duration-700"
        >
          <FontAwesomeIcon
            className={`h-4 ${
              darkState
                ? `text-yellow-500 hover:[#262626]`
                : `text-[#262626] hover:text-yellow-500`
            } `}
            icon={darkState ? faSun : faMoon}
          />
        </button>
      </li>
      <li>
        <button
          onClick={handleGoProfile}
          aria-label="profile page"
          className="box-border p-4 cursor-pointer  hover:text-accent-color"
        >
          <FontAwesomeIcon
            className="h-4 "
            icon={session ? filledUser : faUser}
          />
        </button>
      </li>
      <li className="hidden lg:block">
        <button
          className="box-border md:p-4 flex items-center  hover:text-accent-color"
          onClick={() => (session ? signOut() : signIn())}
        >
          {session ? (
            <>
              Log Out
              {/* <p className="mx-2">Log Out</p> */}
              <FontAwesomeIcon
                className="h-4 mx-2"
                icon={faArrowRightFromBracket}
              />
            </>
          ) : (
            <>
              <FontAwesomeIcon
                className="h-4 mx-2"
                icon={faArrowRightFromBracket}
              />
              Log In
              {/* <p className="mx-2">Log In</p> */}
            </>
          )}
        </button>
      </li>
      <li>
        <Link href="/cart">
          <a
            aria-label="cart page"
            className="box-border p-4 relative text-gray-800 group"
          >
            <p className="absolute text-[9px] inline-block font-bold text-gray-800 mb-0 ml-2 top-0 group-hover:text-accent-color">
              {productsList && productsList?.length > 0
                ? productsList.length
                : ``}
            </p>
            <FontAwesomeIcon
              className="h-4 group-hover:text-accent-color"
              icon={faCartShopping}
            />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default FunctionalLinks;
