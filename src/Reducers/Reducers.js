import movieReducer from './ReducerMovie'
import { combineReducers} from "redux";
import filterNameReducer from './SearchReducer'
import filterRatingReducer  from './SearchRatingReducer'

 const reducers = combineReducers({
   movies: movieReducer,
   searchName: filterNameReducer,
   searchRating: filterRatingReducer
 });

export default reducers