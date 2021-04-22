import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useGlobalContext } from '../../state/GlobalProvider';

const Header = ({ findVideos }) => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const { state, dispatch } = useGlobalContext();

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    findVideos(state.searchText);
  };

  const handleChange = (event) => {
    dispatch({ type: 'CHANGE_SEARCH_TEXT', payload: event.target.value });
  };

  const handleDarkTheme = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  return (
    <nav className="bg-blue-400 dark:bg-gray-800">
      <div className="px-8 mx-auto border border-blue-500 dark:border-indigo-900">
        <div className="flex justify-between items-center">
          <div className="dark:text-gray-200">Menu</div>
          <div className="relative mr-6 my-2">
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                className="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ..."
                type="text"
                placeholder="Search by topic..."
                value={state.searchText}
              />
            </form>
          </div>
          <div className="flex">
            <label htmlFor="toogleA" className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  id="toogleA"
                  type="checkbox"
                  className="sr-only"
                  onChange={handleDarkTheme}
                />
                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner" />
                <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition" />
              </div>
              <div className="ml-3 text-gray-700 dark:text-gray-200 font-medium">
                Dark Mode
              </div>
            </label>
          </div>
          {isAuthenticated && (
            <div className="p-10">
              <div className="dropdown inline-block relative">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
                >
                  <span className="mr-1">{user.name}</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                  </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                    {user.email}
                  </li>
                  <li className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                    <RouterNavLink
                      to="#"
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                    >
                      Log out
                    </RouterNavLink>
                  </li>
                </ul>
              </div>
            </div>
          )}
          {!isAuthenticated && (
            <button id="qsLoginBtn" type="button" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
