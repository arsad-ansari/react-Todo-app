import { useState } from "react";
import axios from "axios";

function Movie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const searchMovies = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Enter movie name");
      setMovies([]);
      return;
    }

    try {
      setError("");

      const res = await axios.get(
        `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=a11c6f88`
      );

      setMovies(res.data.Search || []);

      if (!res.data.Search) {
        setError("Movie not found");
      }
    } catch {
      setMovies([]);
      setError("Something went wrong");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Movie Search App</h2>

      <form onSubmit={searchMovies}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movie"
        />
        <button>Search</button>
      </form>

      {error && <p>{error}</p>}

      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          {movie.Poster !== "N/A" && (
            <img src={movie.Poster} alt={movie.Title} width="100" />
          )}
        </div>
      ))}
    </div>
  );
}

export default Movie;