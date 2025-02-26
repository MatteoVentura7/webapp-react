import axios from "../api/axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Stars from "../components/ui/Stars";
import { Link } from "react-router";
import Heading from "../components/ui/Heading";

export default function MoviePage() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchMovie = () => {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/404");
        }
      });
  };

  useEffect(fetchMovie, [(id, navigate)]);
  const { reviews } = movie;
  return (
    <>
      <div className="container max-w-10xl mx-auto pt-10">
        <div className="text-center pb-5">
          <Link to="/">
            <i className="fa-solid fa-house"></i> Home page
          </Link>
        </div>

        <div className="justify-center mb-5 m-10 md:flex ">
          <img className=" sm:w-20 md:w-60 lg:w-60" src={movie.image} alt="" />
          <div className="bg-emerald-700 p-4">
            <Heading level={1}>{movie.title}</Heading>
            <Heading level={3}>Regista: {movie.director}</Heading>
            <Heading level={6}>{movie.abstract}</Heading>
            <Heading level={6}>Genere: {movie.genre}</Heading>
            <Heading level={6}>Anno: {movie.release_year}</Heading>
          </div>
        </div>
        <div className="text-center pb-10">
          {" "}
          <Heading level={1}>Recensioni</Heading>
          {reviews?.length > 0 ? (
            <ul className="mt-4 space-y-4">
              {reviews.map((review) => (
                <li key={review.id}>
                  <strong>{review.name}</strong> <Stars vote={review.vote} />
                  <p className="mt-2">{review.text}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Non ci sono recensiioni</p>
          )}
        </div>
      </div>
    </>
  );
}
