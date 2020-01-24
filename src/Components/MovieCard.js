import React, { Component } from 'react'
import  './MovieCard.css'
import  {deleteMovie, editMovie} from '../Actions/Actions'
import ModalComponentEdit from './ModalComponentEdit'
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
class  MovieCard  extends Component{

   state= {

   }

 render (){
        return (
          <div className="MovieCard">
            <img className="poster" src={this.props.movie.src} />
            <div className="MovieDesc">
              <p className="marg"> {this.props.movie.movieName} </p>
              <p className="marg"> {this.props.movie.releaseYear}</p>
              <StarRatingComponent
                className="star"
                name="rate1"
                starCount={5}
                value={this.props.movie.movieRating}
              />

              <Link to={"/" + this.props.movie.id}>
                <button className="marg"> Movie description</button>
              </Link>
            </div>
            <div className="EditRemove">
              <ModalComponentEdit movie={this.props.movie} />
              <button onClick={() => this.props.deleteMovie(this.props.id)}>
                Remove{" "}
              </button>
            </div>
          </div>
        );
    }
  }


    const mapDispatchToProps = disptch => ({
      deleteMovie: id => disptch(deleteMovie(id)),
      

      
    });

    export default connect(null, mapDispatchToProps)(MovieCard);
