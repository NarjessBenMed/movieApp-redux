import {
  ADD_MOVIE,
  EDIT_MOVIE,
  REMOVE_MOVIE,
  DELETE_MOVIE,
  SEARCH_MOVIE,
  SEARCH_Rating
} from "./ActionsType";



export const addMovie = (
  newmovie
) => ({
  type: ADD_MOVIE,
  payload: newmovie
    
  
});


export const deleteMovie = (id) => (
    {
        type: DELETE_MOVIE,
        payload: id

    })


export const editMovie = (id, newMovie) =>({

  type: EDIT_MOVIE,
  payload: { id, newMovie }
    })





    export const searchMovie = movie => ({
      type: SEARCH_MOVIE,
      payload: movie
    });



   export const searchMovieRating = rate=> ({
            type: SEARCH_Rating,
            payload: rate
          });


    







