import axios from "../api/axios";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [movies, setmovies] = useState([]);

  const fetchmovies = () => {
    axios.get("/movies").then((res) => {
      setmovies(res.data);
    });
  };

  useEffect(fetchmovies, []);

  return (
    <>
      <h1>Home Page</h1>
      <hr />
      {movies.map((movie) => (
        <div key={movie.id}>
          {movie.title}
          <img className="w-100" src={`/img/${movie.title}.jpg`} alt="" />
        </div>
      ))}
    </>
  );
}
