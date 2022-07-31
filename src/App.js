import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
  return (
  <div className="container-fluid">
    <div className="row">
      <MovieList movies={movies} />
    </div>  
  </div>
  );
};

export default App;