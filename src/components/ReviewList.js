
import Review from './Review'
import reviewImg from "../assets/imgs/review.png";

const ReviewList = () => {
  return (
    <section className='mb-20 '>
      {/* Review Item */}
      <Review name="Mitchelle" image={reviewImg} />
      {/* Review Item */}

      <Review name="Lawrence. B" image={reviewImg} />
    </section>
  );
}

export default ReviewList