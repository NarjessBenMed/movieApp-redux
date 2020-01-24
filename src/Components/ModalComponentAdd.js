import React, { Component } from "react";
import "./ModalComponent.css";
import { Button, Modal } from "react-bootstrap";
import {addMovie} from '../Actions/Actions'
import { connect } from "react-redux";

class ModalComponent extends Component {
  state = {
    show: false,
    src:"",
    movieName:"",
    movieRating:0,
    releaseYear:""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClose = () => this.setState({ show: !this.state.show });

  render() {
    const { src, movieName, movieRating, releaseYear } = this.state;
    return (
      <div>
        <Button
          
          variant="secondary"
          className="addM"
          onClick={this.handleClose}
        >
          Add new movie
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body className="ModalBody">
            <input
              type="text"
              name="movieRating"
              onChange={this.handleChange}
              value={this.state.movieRating}
              placeholder="Movie rating"
            />

            <input
              type="text"
              name="src"
              onChange={this.handleChange}
              value={this.state.src}
              placeholder="Movie image"
            />

            <input
              type="text"
              name="movieName"
              onChange={this.handleChange}
              value={this.state.movieName}
              placeholder="Movie name"
            />

            <input
              type="text"
              name="releaseYear"
              onChange={this.handleChange}
              value={this.state.releaseYear}
              placeholder="Movie releaase year"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={e => {
                
                this.props.addMovie({
                  id: Date.now(),
                  movieName: movieName,
                  src: src,
                  movieRating: movieRating,
                  releaseYear: releaseYear
                });
                this.handleClose();
              }}
            >
              Add movie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMovie: (newm) =>
    dispatch(addMovie(newm))
});
export default connect(null, mapDispatchToProps)(ModalComponent);