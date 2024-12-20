import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ReviewImg from "./assets/Review.png";
const Review = () => {
  const reviews = [
    {
      name: "Pravesh Soni",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: ReviewImg, // Replace with actual image paths
      stars: 5,
    },
    {
      name: "Pravesh Soni",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: ReviewImg,
      stars: 5,
    },
    {
      name: "Pravesh Soni",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: ReviewImg,
      stars: 5,
    },
    {
      name: "Pravesh Soni",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: ReviewImg,
      stars: 5,
    },
    {
      name: "Pravesh Soni",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: ReviewImg,
      stars: 5,
    },
    {
      name: "Pravesh Soni",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image: ReviewImg,
      stars: 5,
    },
  ];
  return (
    <div className="customer-review-section">
      <h2 className="section-title">Customer Review</h2>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Pagination]}
        className="customer-swiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <div className="profile">
                <img
                  src={review.image}
                  alt={review.name}
                  className="profile-image"
                />
                <h3>{review.name}</h3>
              </div>
              <div className="stars">
                {"★".repeat(review.stars)}
                {"☆".repeat(5 - review.stars)}
              </div>
              <p className="review-text">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Review;
