export default function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_THEME': {
      return {
        ...state,
        searchText: state.searchText,
        darkMode: !state.darkMode,
      };
    }
    case 'CHANGE_SEARCH_TEXT': {
      return {
        ...state,
        searchText: action.payload,
        darkMode: state.darkMode,
      };
    }
    default:
      throw new Error('Unkown action');
  }
}
