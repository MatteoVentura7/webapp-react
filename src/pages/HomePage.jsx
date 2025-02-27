import axios from "../api/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../components/ui/Heading";

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
      <div>
        <div className="container max-w-10xl mx-auto pt-10 pb-20 ">
          <div className="grid gap-8 h-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="flex  justify-center hover:scale-125 duration-700 cursor-pointer "
              >
                <div className="h-full ">
                  <img
                    className="w-40 object-cover h-full "
                    src={movie.image}
                    alt=""
                  />
                </div>

                <div className="w-50 bg-emerald-700 p-4 rounded-2xl rounded-l-none">
                  <Heading level={3}>{movie.title}</Heading>
                  <Heading level={4}>{movie.director}</Heading>
                  <Heading level={6}>{movie.abstract}</Heading>

                  <Link to={`/movies/${movie.id}`}>
                    <button className="text-white border-2 border-red-700 p-1.5 bg-red-700 cursor-pointer hover:scale-112 mt-4 rounded-2xl ">
                      Info
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
