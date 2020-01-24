import React, { Component } from "react";
import "./SearchByName.css";
import StarRatingComponent from "react-star-rating-component";
import {connect} from 'react-redux'
import {searchMovie, searchMovieRating} from '../Actions/Actions'
 class SearchByName extends Component {
  state = { rating: 0 };

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({ rating: nextValue });
  };

  render() {
    return (
      <div className="search">
        <input
          className="textinput"
          type="text"
          placeholder="enter your searching name"
          onChange={e => this.props.searchMovie(e.target.value)}
        />
        <StarRatingComponent
          className="stars"
          name="rate1"
          starCount={5}
          onStarClick={
            (this.props.searchMovieRating(this.state.rating), this.onStarClick)
          }
        />
      </div>
    );
  }
}

const mapDispatchToProps = disptch => ({
  searchMovie: movie => disptch(searchMovie(movie)),
  searchMovieRating: rate=> disptch(searchMovieRating(rate))
});

export default connect(null, mapDispatchToProps)(SearchByName);
