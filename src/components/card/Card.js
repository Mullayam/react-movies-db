import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({movie}) => {
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="card">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="card">
            <img
              className="card_img"
              src={`https://image.tmdb.org/t/p/original${
                movie && movie.backdrop_path
              }`}
            />
            <div className="card_overlay">
              <div className="card_title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="card_runtime">
                {movie ? movie.release_date : ""}
                <span className="card_rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fa fa-star" aria-hidden="true"></i>{" "}
                </span>
                <div className="card_description">
                  {movie ? movie.overview.slice(0, 118) : ""}
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
export default Card;
