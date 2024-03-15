export default function Review(props) {
  return (
    <div className="review">
      <p>{props.reviewContent}</p>
      <button>Delete</button>
    </div>
  );
}
//TODO : SHOULD ADD FUNCTIONALITY TO BUTTON TO DELETE COMMENT FROM ARRAY
