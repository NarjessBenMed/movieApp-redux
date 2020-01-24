import React, { Component } from "react";
import "./ModalComponent.css";


import { Button, Modal } from "react-bootstrap";
import { editMovie } from "../Actions/Actions";
import { connect } from "react-redux";

class ModalComponentEdit extends Component {
  state = {
    show: false,
    src: this.props.movie.src,
    movieName: this.props.movie.movieName,
    movieRating: this.props.movie.movieRating,
    releaseYear: this.props.movie.releaseYear
  }

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
          variant="secondary" className="butEdit"
       
          onClick={this.handleClose}
        >
          Edit
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit movie</Modal.Title>
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
              
                this.props.editMovie(
                  this.props.movie.id,

                  {
                    id: this.props.movie.id,
                    movieName: this.state.movieName,
                    src: this.state.src,
                    movieRating: this.state.movieRating,
                    releaseYear: this.state.releaseYear
                  }
                );
          this.handleClose();
        }}
      >
        Validate changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editMovie: (id, newMovie) => dispatch(editMovie(id, newMovie))
});
export default connect(null, mapDispatchToProps)(ModalComponentEdit);
