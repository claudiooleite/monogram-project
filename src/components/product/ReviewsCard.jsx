import './reviewscard.css';
const ReviewCard = ({ review }) => {
    return (
        <div className="review-card">
            <div className='review-flex'>
                <img src={review.customerImg} alt={`${review.customerName}'s profile`} className="customer-img" />
                <div>
                    <h3>{review.customerName}</h3>
                    <p className="rating">{review.rating}</p>
                </div>
            </div>
            <p className="testimonial">{review.testimonial}</p>
        </div>
    );
}

export default ReviewCard;
