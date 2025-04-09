import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './Movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = 'b2ab69e2efe08968de25c743195e7354'; 
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Navbar />
      <div className="movies-page">
        <h2 className="page-title">Popular Movies</h2>
        <div className="movies-grid">
          {movies.map((movie) => (
            <Link to={`/player/${movie.id}`} className="movie-card" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
              />
              <p className="movie-title">{movie.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
