export default function Stars() {
  return (
    <div className="stars">
      <form action="">
        <div className="rating-stars">
          <input
            type="radio"
            className="starRating"
            name="starRating"
            id="rating-1"
            value={1}
          />
          <input
            type="radio"
            className="starRating"
            name="starRating"
            id="rating-2"
            value={2}
          />
          <input
            type="radio"
            className="starRating"
            name="starRating"
            id="rating-3"
            value={3}
          />
          <input
            type="radio"
            className="starRating"
            name="starRating"
            id="rating-4"
            value={4}
          />
          <input
            type="radio"
            className="starRating"
            name="starRating"
            id="rating-5"
            value={5}
          />
        </div>
      </form>
    </div>
  );
}
