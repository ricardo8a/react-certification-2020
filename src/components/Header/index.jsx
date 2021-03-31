import React, { useState } from 'react';


/*
<nav className="flex items-center justify-between flex-wrap bg-teal p-6 bg-blue-400">
    <div>Menu</div>
    <div className="relative mr-6 my-2">
      <input
        className="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ..."
        type="text"
        placeholder="Search by topic..."
      />
    </div>
    <div>Dark Mode</div>
    <div>Profile: {profile}</div>
  </nav>
*/
const Header = ({ profile, findVideos }) => {

  const [keySearch, setKeySearch] = useState('Globant');

  const handleSubmit = (event) => {
    event.preventDefault();
    findVideos(keySearch);
  }

  const handleChange = (event) => {
    setKeySearch(event.target.value);
  };

  return (
  <nav className="bg-blue-400">
    <div className="px-8 mx-auto border border-blue-500">
      <div className="flex justify-between items-center">
        <div>Menu</div>
        <div className="relative mr-6 my-2">
          <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent ..."
            type="text"
            placeholder="Search by topic..."
            value={keySearch}
          />
          </form>
        </div>
        <div>Dark Mode</div>
        <div>Profile: {profile}</div>
      </div>
    </div>
  </nav>
);
  }

export default Header;
