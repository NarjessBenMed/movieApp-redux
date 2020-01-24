import React from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import "./MovieList.css";
function MovieList(props) {
  return (
    <div className="MovieList">
      {props.movies
        .filter(
          el =>
            el.movieName
              .toUpperCase()
              .includes(props.filterName.toUpperCase()) &&
            el.movieRating >= props.searchRate
        )
        .map((el, i) => (
          <MovieCard key={el.id} id={el.id} movie={el} />
        ))}
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    movies: state.movies,
    filterName: state.searchName,
    searchRate: state.searchRating
  };

};

export default connect(mapStatetoProps)(MovieList);
