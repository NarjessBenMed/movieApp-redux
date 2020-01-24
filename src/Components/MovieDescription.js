import React from "react";
import "./MovieDescription.css";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class MovieDescription extends React.Component {
  state = {
    id: this.props.match.params.id
  };

  render() {

    const myTab = this.props.movies.filter(e => e.id === Number(this.state.id));
    if (myTab.length === 0) {
      return <Redirect to="/" />;
    } else {
      const { movieName, releaseYear, src, movieRating } = myTab[0];
      return (
        <div className="details">
          <img  className="poster" src={src} alt="" />
          <div className="movie-details">
            <p>
              <span>Movie Name:</span> {movieName}
            </p>
            <p>
              <span>Release Year:</span> {releaseYear}
            </p>
            <p>
              <span>Rating:</span>
              <span style={{ color: "gold" }}>★{movieRating}</span>
            </p>
          </div>
        </div>
      );
    }
  }
}
const mapState = state => ({
  movies: state.movies
});
export default connect(mapState)(MovieDescription);
