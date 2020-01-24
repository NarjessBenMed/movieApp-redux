import { SEARCH_MOVIE} from  "../Actions/ActionsType";
const initialState = '';
 const filterNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return (action.payload);
   
    default:
      return state;
  }
};

export default filterNameReducer;