import Review from "./Review";

export default function ReviewForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const userReview = event.target.userReview.value;
    const newReviewList = [...props.reviewList];
    const newReview = (
      <Review reviewContent={userReview} key={newReviewList.length}></Review>
    );
    newReviewList.push(newReview);
    props.setReviewList(newReviewList);
    event.target.userReview.value = "";
  }

  return (
    <>
      <form className="reviewForm" onSubmit={handleSubmit}>
        <p>User Review : </p>
        <textarea name="userReview" id="" cols="40" rows="3"></textarea>
        <br />
        <div className="reviewForm__buttons">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
