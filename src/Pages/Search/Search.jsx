import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './Search.css';

const Search = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const API_KEY = 'b2ab69e2efe08968de25c743195e7354'
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=${API_KEY}&language=en-US`
        );
        const data = await res.json();
        setResults(data.results || []);
      } catch (err) {
        console.error('Search fetch failed:', err);
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div className="search-page">
      <Navbar />
      <h2 className="search-title">Search Results for: "{query}"</h2>
      <div className="search-results">
        {results.length > 0 ? (
          results
            .filter((item) => item.poster_path)
            .map((item) => (
              <Link to={`/player/${item.id}`} key={item.id} className="search-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title || item.name}
                  className="search-poster"
                />
                <p className="search-name">{item.title || item.name}</p>
              </Link>
            ))
        ) : (
          <p>No results found for "{query}"</p>
        )}
      </div>
    </div>
  );
};

export default Search;
