import {
  ADD_MOVIE,
  EDIT_MOVIE,
  REMOVE_MOVIE,
  DELETE_MOVIE
} from "../Actions/ActionsType";

const initailState = [
  {
    id: 1,
    movieName: "Miraculous",
    src: "https://media.picwictoys.com/images/products/1723291/1723291_1.png",
    movieRating: 2,
    releaseYear: "2010"
  },

  {
    id: 2,
    movieName: "Masha",
    src:
      "https://i.pinimg.com/originals/c0/a8/8f/c0a88ff222b80920a068fe242d427abe.jpg",
    movieRating: 3,
    releaseYear: "2014"
  },

  {
    id:3,
    movieName: "Pyjamasque",
    src:
      "https://www.groupemodus.com/wp-content/uploads/2018/10/435_Pyjamasques_C1.jpg",
    movieRating: 1,
    releaseYear: "2018"
  },

  {
    id:4,
    movieName: "La garde de rois lion",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/51jWA-DMveL._SX258_BO1,204,203,200_.jpg",
    movieRating: 1,
    releaseYear: "2018"
  },

  {
    id:5,
    movieName: "Nancy Flancy Clancy",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSj9Sb_VCQPeY2zpyU_yZ0JachcCYP79ligO62MGh00w4bWJM&s",
    movieRating: 1,
    releaseYear: "2018"
  },

  {
    id:6,
    movieName: "Princesse sofia",
    src: "https://www.chroniquedisney.fr/imgTele/hs/2017-sofia-iles-01.jpg",
    movieRating: 4,
    releaseYear: "2018"
  },

  {
    id:7,
    movieName: "Mickey et ses amis",
    src:
      "https://fusion.molotov.tv/arts/m2/446x588/Ch8SHQoU8lQMEw2lo7QwW8wFLnRJ7nNaWOwSA2pwZxgBCh8IARIbChQxgQpChqM8tTAyjq8H0vK29njHtBIDcG5n/jpg",
    movieRating: 2,
    releaseYear: "2018"
  },

  {
    id: 8,
    movieName: "Vampirina",
    src: " https://pictures.abebooks.com/isbn/9788416931682-us.jpg",
    movieRating: 2,
    releaseYear: "2018"
  },

  {
    id: 9,
    movieName: "Maman j'ai raté l'avion",
    src:
      "https://www.ecranlarge.com/media/cache/160x213/uploads/image/001/123/rsw3rjbbipiejpatztc0jbczfo6-495.jpg",
    movieRating: 3,
    releaseYear: "2018"
  },
  {
    id: 10,
    movieName: "Max le chien geant",
    src:
      "http://www.blurayenfrancais.com/images/illustrations/concoursmaxlegeant.jpg",
    movieRating: 1,
    releaseYear: "2018"
  }
];

const movieReducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return state.concat(action.payload);

    case DELETE_MOVIE:
      return state.filter(el => el.id !== action.payload);
      break;

    case EDIT_MOVIE:
      return state.map((el ) => 
    

        el.id === action.payload.id ?
    
        {  ...
             
                action.payload.newMovie,
              
        }
          :   el
      );

      break;
          }
      return state;
  
};

export default movieReducer;
