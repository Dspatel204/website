import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Review = () => {
  const reviews = [
    {
      name: "Pravesh Soni",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        "https://s3-alpha-sig.figma.com/img/9fed/d075/c698ce83a80ac7e18000932ce1af7b03?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IEk~K-hf9ex28IzTNnDI5I7m41zxl8CbnwGAI09gIiatDqT~yk5q1He~QUp9Pm7aT5jq4Bb2Nx-g2D6GbpwWnwf6w0X15nEZZmfMbuvq4Bww9HwUjObe~-s3JDmSLjhNguSoeg1iJOANuCbUQ9I3YHclzOBfMsTEVwtm3UYdSwI7DBDxdlZ784Ad1uWSsgjh8UYUuNxIsymhNjmLlrXqm0hMYWOv24UC18qgYfBQPetTeL02pnuhWADM9jFT5Lq1m2-Rd2UT1OluyfHtwu3G~5chF0Fx7Suf2lKuYvwwzZXMe~qo0rNAO~xec2LDefdoUE6S4OBWwTvjeCXe2eoc3A__", // Replace with actual image paths
      stars: 5,
    },
    {
      name: "Pravesh Soni",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        "https://s3-alpha-sig.figma.com/img/9fed/d075/c698ce83a80ac7e18000932ce1af7b03?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IEk~K-hf9ex28IzTNnDI5I7m41zxl8CbnwGAI09gIiatDqT~yk5q1He~QUp9Pm7aT5jq4Bb2Nx-g2D6GbpwWnwf6w0X15nEZZmfMbuvq4Bww9HwUjObe~-s3JDmSLjhNguSoeg1iJOANuCbUQ9I3YHclzOBfMsTEVwtm3UYdSwI7DBDxdlZ784Ad1uWSsgjh8UYUuNxIsymhNjmLlrXqm0hMYWOv24UC18qgYfBQPetTeL02pnuhWADM9jFT5Lq1m2-Rd2UT1OluyfHtwu3G~5chF0Fx7Suf2lKuYvwwzZXMe~qo0rNAO~xec2LDefdoUE6S4OBWwTvjeCXe2eoc3A__",
      stars: 5,
    },
    {
      name: "Pravesh Soni",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        "https://s3-alpha-sig.figma.com/img/9fed/d075/c698ce83a80ac7e18000932ce1af7b03?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IEk~K-hf9ex28IzTNnDI5I7m41zxl8CbnwGAI09gIiatDqT~yk5q1He~QUp9Pm7aT5jq4Bb2Nx-g2D6GbpwWnwf6w0X15nEZZmfMbuvq4Bww9HwUjObe~-s3JDmSLjhNguSoeg1iJOANuCbUQ9I3YHclzOBfMsTEVwtm3UYdSwI7DBDxdlZ784Ad1uWSsgjh8UYUuNxIsymhNjmLlrXqm0hMYWOv24UC18qgYfBQPetTeL02pnuhWADM9jFT5Lq1m2-Rd2UT1OluyfHtwu3G~5chF0Fx7Suf2lKuYvwwzZXMe~qo0rNAO~xec2LDefdoUE6S4OBWwTvjeCXe2eoc3A__",
      stars: 5,
    },
    {
      name: "Pravesh Soni",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        "https://s3-alpha-sig.figma.com/img/9fed/d075/c698ce83a80ac7e18000932ce1af7b03?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IEk~K-hf9ex28IzTNnDI5I7m41zxl8CbnwGAI09gIiatDqT~yk5q1He~QUp9Pm7aT5jq4Bb2Nx-g2D6GbpwWnwf6w0X15nEZZmfMbuvq4Bww9HwUjObe~-s3JDmSLjhNguSoeg1iJOANuCbUQ9I3YHclzOBfMsTEVwtm3UYdSwI7DBDxdlZ784Ad1uWSsgjh8UYUuNxIsymhNjmLlrXqm0hMYWOv24UC18qgYfBQPetTeL02pnuhWADM9jFT5Lq1m2-Rd2UT1OluyfHtwu3G~5chF0Fx7Suf2lKuYvwwzZXMe~qo0rNAO~xec2LDefdoUE6S4OBWwTvjeCXe2eoc3A__", // Replace with actual image paths
      stars: 5,
    },
    {
      name: "Pravesh Soni",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        "https://s3-alpha-sig.figma.com/img/9fed/d075/c698ce83a80ac7e18000932ce1af7b03?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IEk~K-hf9ex28IzTNnDI5I7m41zxl8CbnwGAI09gIiatDqT~yk5q1He~QUp9Pm7aT5jq4Bb2Nx-g2D6GbpwWnwf6w0X15nEZZmfMbuvq4Bww9HwUjObe~-s3JDmSLjhNguSoeg1iJOANuCbUQ9I3YHclzOBfMsTEVwtm3UYdSwI7DBDxdlZ784Ad1uWSsgjh8UYUuNxIsymhNjmLlrXqm0hMYWOv24UC18qgYfBQPetTeL02pnuhWADM9jFT5Lq1m2-Rd2UT1OluyfHtwu3G~5chF0Fx7Suf2lKuYvwwzZXMe~qo0rNAO~xec2LDefdoUE6S4OBWwTvjeCXe2eoc3A__",
      stars: 5,
    },
    {
      name: "Pravesh Soni",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      image:
        "https://s3-alpha-sig.figma.com/img/9fed/d075/c698ce83a80ac7e18000932ce1af7b03?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IEk~K-hf9ex28IzTNnDI5I7m41zxl8CbnwGAI09gIiatDqT~yk5q1He~QUp9Pm7aT5jq4Bb2Nx-g2D6GbpwWnwf6w0X15nEZZmfMbuvq4Bww9HwUjObe~-s3JDmSLjhNguSoeg1iJOANuCbUQ9I3YHclzOBfMsTEVwtm3UYdSwI7DBDxdlZ784Ad1uWSsgjh8UYUuNxIsymhNjmLlrXqm0hMYWOv24UC18qgYfBQPetTeL02pnuhWADM9jFT5Lq1m2-Rd2UT1OluyfHtwu3G~5chF0Fx7Suf2lKuYvwwzZXMe~qo0rNAO~xec2LDefdoUE6S4OBWwTvjeCXe2eoc3A__",
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
