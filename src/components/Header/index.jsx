import React from 'react';

import { useGlobalContext } from '../../state/GlobalProvider';

const Header = ({ profile, findVideos }) => {
  const { state, dispatch } = useGlobalContext();

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
          <div className="dark:text-gray-200">Profile: {profile}</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
