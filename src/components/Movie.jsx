import Stars from "./Stars";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import { useState } from "react";

export default function Movie(props) {
  const [reviewList, setReviewList] = useState([]);
  const reviewWrapper = { reviewList, setReviewList };

  return (
    <>
      <article className="movie">
        <img className="movie--poster" src={props.Poster} alt="Movie Poster" />
        <div className="movie__info">
          <h2 className="movie--title">{props.Title}</h2>
          <p className="movie--genre">Genre : {props.Genre}</p>
          <p className="movie--year">Release Year : {props.Year}</p>
          <p className="movie--ageRating">Rated : {props.Rated}</p>
          <h3>Synopsis</h3>
          <p className="movie--synopsis">{props.Plot}</p>
        </div>
        <Stars></Stars>
        <ReviewList {...reviewWrapper}></ReviewList>
        <div className="movie__rating">
          <ReviewForm {...reviewWrapper}></ReviewForm>
        </div>
      </article>
    </>
  );
}
