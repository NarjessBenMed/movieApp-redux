import React from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import SearchByName from "./Components/SearchByName";
import ModalComponent from "./Components/ModalComponentAdd";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <SearchByName />
      <MovieList />
      <ModalComponent />
    </div>
  );
}

export default App;
