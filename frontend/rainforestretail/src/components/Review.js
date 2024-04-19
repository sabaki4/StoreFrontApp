import { useContext, useState } from "react";
import { userState } from "../containers/StoreContainer";


const Review = ({ review, deleteReview, editReview }) => {

    const [expandStatus, setExpandStatus] = useState(false);
    const { activeCustomer } = useContext(userState);

    const handleDeleteButton = () => {
        deleteReview(review.id);
    }

    const toggleExpandStatus = () => {
        setExpandStatus((expandStatus) => !expandStatus);
    }

    const toggleButtonLabel = () => {
        if (!expandStatus) {
            return "More"
        }
        return "Less"
    }


    return (
        <>
            <div className="reviews">
                <h3>{review.customer.name}</h3>
                <p>Rating: {review.rating}</p>
                {expandStatus && <p>Comment: {review.comment}</p>}
                <button onClick={toggleExpandStatus}>
                    {toggleButtonLabel()}
                </button>
                {activeCustomer.id === review.customer.id ?
                    <button onClick={handleDeleteButton}>Delete</button> :
                    <></>}
            </div>
        </>);
}

export default Review;