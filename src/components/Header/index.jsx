import React from 'react';

const Header = ({ profile }) => (
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
);

export default Header;
