import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=ac5d2b5"

    const response = await fetch(url);

    const responseJson = await response.json();

    console.log(responseJson);
  }

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
  <div className='container-fluid movie-app'>
    <div className="row">
      <MovieList movies={movies} />
    </div>  
  </div>
  );
};

export default App;