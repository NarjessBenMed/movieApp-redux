import { SEARCH_Rating } from "../Actions/ActionsType";
const initialState = "";
const filterRatingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_Rating :
      return action.payload;

    default:
      return state;
  }
};

export default filterRatingReducer;
