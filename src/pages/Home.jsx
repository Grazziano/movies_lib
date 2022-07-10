import React, { useEffect, useState } from 'react';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export default function Home() {
  // console.log(moviesURL, apiKey);
  const [topMovies, setTopMovies] = useState([]);

  const getTopRateMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    // console.log(topRatedUrl);
    getTopRateMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => {
            return <p>{movie.title}</p>;
          })}
      </div>
    </div>
  );
}
