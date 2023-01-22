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
          className="box-border p-2 px-3 lg:p-4 cursor-pointer transition-all duration-700"
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
          data-cy="go-profile"
          className="box-border p-2 px-3 lg:p-4 cursor-pointer  hover:text-accent-color"
        >
          <FontAwesomeIcon
            className="h-4 "
            icon={session ? filledUser : faUser}
          />
        </button>
      </li>
      <li>
        <button
          data-cy="logging"
          className="box-border md p-2 px-3:lg:p-4 flex items-center  hover:text-accent-color"
          onClick={() => (session ? signOut() : signIn())}
        >
          {session ? (
            <>
              <span className="hidden lg:block">Log Out</span>
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
              <span className="hidden lg:block">Log In</span>
            </>
          )}
        </button>
      </li>
      <li>
        <Link href="/cart">
          <a
            aria-label="cart page"
            className="box-border p-2 px-3 lg:p-4 relative text-gray-800 group"
            data-cy="go-cart"
          >
            <p
              className="absolute text-[9px] inline-block font-bold text-gray-800 mb-0 ml-2 top-[-5px] lg:top-0 group-hover:text-accent-color"
              data-cy="items-number"
            >
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
