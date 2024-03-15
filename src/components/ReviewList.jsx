import { useState } from "react";
import Review from "./Review";

export default function ReviewList(props) {
  return <div className="reviewList">{props.reviewList}</div>;
}
