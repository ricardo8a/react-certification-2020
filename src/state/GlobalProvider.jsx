import React, { createContext, useContext, useReducer } from 'react';

import reducer from './GlobalReducer';

const initState = {
  searchText: 'wizeline',
  darkMode: false,
};

const GlobalContext = createContext({
  searchText: '',
  darkMode: false,
});

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useGlobalContext" without an GlobalProvider!`);
  }
  return context;
}

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { useGlobalContext };

export default GlobalProvider;
