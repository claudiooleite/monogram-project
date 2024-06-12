import './reviewscard.css'; 
const ReviewCard = ({ review }) => {
    return (
        <div className="review-card">
            <img src={review.customerImg} alt={`${review.customerName}'s profile`} className="customer-img" />
            <h3>{review.customerName}</h3>
            <p className="rating">{review.rating}</p>
            <p className="testimonial">{review.testimonial}</p>
        </div>
    );
}

export default ReviewCard;
