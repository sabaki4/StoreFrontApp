import { useContext, useState } from "react";
import { userState } from "../containers/StoreContainer";

const ReviewForm = ({ itemId, postReview }) => {

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const { activeCustomer } = useContext(userState);

    const handleSubmit = (event) => {
        event.preventDefault();

        postReview({
            itemId: itemId,
            customerId: activeCustomer.id,
            rating: rating,
            comment: comment
        });
        alert("Review has been added.");
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="reviews-form">
                <label htmlFor="rating">Rating:</label>
                <input
                    type="number"
                    id="rating"
                    value={rating}
                    onChange={(event) => setRating(parseInt(event.target.value))}
                    min={1}
                    max={5}
                    required
                />
            </div>
            <div className="review-comment">
                <label htmlFor="comment">Comment:</label>
                <textarea
                    id="comment"
                    value={comment}
                    rows="4" cols="50"
                    onChange={(event) => setComment(event.target.value)}
                    required
                />
            </div>
            <button type="submit" className="review-btn">Submit Review</button>
        </form>
    );
};

export default ReviewForm;