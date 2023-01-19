import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../card/Card";
import "./movieList.css";

const MovieList = () => {
  const [movieList, setmovieList] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [type]);
  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=f7a97e00a57ce0bdc8cb8aebcf9982aa`
    )
      .then((res) => res.json())
      .then((data) => setmovieList(data.results));
  };
  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list_cards">
        {movieList.map((movie) => (
          <Card key={movie.id} movie={movie}></Card>
        ))}
      </div>
    </div>
  );
};
export default MovieList;
