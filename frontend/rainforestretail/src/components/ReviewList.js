import Review from "./Review";

const ReviewList = ({ reviews, deleteReview, editReview }) => {
    const reviewComponents = reviews.map(review => (
        <Review
            key={review.id}
            review={review}
            deleteReview={deleteReview}
            editReview={editReview}
        />
    ));


    return (
        <div className="review-componentlist">

            <ul>
                {reviewComponents}
            </ul>
        </div>
    );
};

export default ReviewList;
