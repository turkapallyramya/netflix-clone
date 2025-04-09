import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './TVShows.css';

const TVShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const API_KEY = 'b2ab69e2efe08968de25c743195e7354'
  useEffect(() => {
    const fetchTVShows = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`
        );
        setTvShows(response.data.results);
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      }
    };

    fetchTVShows();
  }, []);

  return (
    <>
      <Navbar />
      <div className="tvshows-page">
        <h2 className="page-title">Popular TV Shows</h2>
        <div className="tvshows-grid">
          {tvShows.map((show) => (
            <Link to={`/player/${show.id}`} className="tvshow-card" key={show.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
                className="tvshow-poster"
              />
              <p className="tvshow-title">{show.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default TVShows;
