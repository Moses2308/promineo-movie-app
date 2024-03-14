export default function ReviewForm() {
  function handleSubmit(event) {
    console.log(event.target.userReview.value);
    event.preventDefault();
  }

  return (
    <>
      <form className="reviewForm" onSubmit={handleSubmit}>
        <p>User Review : </p>
        <textarea name="userReview" id="" cols="40" rows="3"></textarea>
        <br />
        <button type="submit">Submit Review</button>
      </form>
    </>
  );
}
