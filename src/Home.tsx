import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import Shopiimg from "./assets/Frame 1.png";
import Faq from "./Faq";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
const Home = () => {
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
    <div>
      <div className="top-bar">
        First Order Get Free Up to 20% on Our Selected Jewelery.
      </div>
      <header className="header-container">
        <div className="nav-left">
          <span className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={26}
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M12.4582 22.7503C18.1421 22.7503 22.7498 18.1426 22.7498 12.4587C22.7498 6.77473 18.1421 2.16699 12.4582 2.16699C6.77424 2.16699 2.1665 6.77473 2.1665 12.4587C2.1665 18.1426 6.77424 22.7503 12.4582 22.7503Z"
                stroke="#786158"
                strokeOpacity="0.75"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23.8332 23.8337L21.6665 21.667"
                stroke="#786158"
                strokeOpacity="0.75"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div className="contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={26}
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M18.9042 24.6457C17.6801 24.6457 16.3909 24.3532 15.0584 23.7898C13.7584 23.2373 12.4476 22.479 11.1692 21.5582C9.90175 20.6265 8.67758 19.5865 7.51841 18.449C6.37008 17.2898 5.33008 16.0657 4.40925 14.809C3.47758 13.509 2.73008 12.209 2.19925 10.9523C1.63591 9.609 1.35425 8.309 1.35425 7.08484C1.35425 6.23984 1.50591 5.43817 1.79841 4.69067C2.10175 3.9215 2.58925 3.2065 3.25008 2.589C4.08425 1.76567 5.03758 1.354 6.05591 1.354C6.47842 1.354 6.91175 1.4515 7.28008 1.62484C7.70258 1.81984 8.06008 2.11234 8.32008 2.50234L10.8334 6.04484C11.0609 6.359 11.2342 6.66234 11.3534 6.96567C11.4942 7.29067 11.5701 7.61567 11.5701 7.92984C11.5701 8.3415 11.4509 8.74234 11.2234 9.1215C11.0609 9.414 10.8117 9.72817 10.4976 10.0423L9.76091 10.8115C9.77175 10.844 9.78258 10.8657 9.79342 10.8873C9.92342 11.1148 10.1834 11.5048 10.6817 12.0898C11.2126 12.6965 11.7109 13.249 12.2092 13.7582C12.8484 14.3865 13.3792 14.8848 13.8776 15.2965C14.4951 15.8165 14.8959 16.0765 15.1342 16.1957L15.1126 16.2498L15.9034 15.4698C16.2392 15.134 16.5642 14.8848 16.8784 14.7223C17.4742 14.354 18.2326 14.289 18.9909 14.6032C19.2726 14.7223 19.5759 14.8848 19.9009 15.1123L23.4976 17.669C23.8984 17.9398 24.1909 18.2865 24.3642 18.6982C24.5267 19.1098 24.6026 19.489 24.6026 19.8682C24.6026 20.3882 24.4834 20.9082 24.2559 21.3957C24.0284 21.8832 23.7467 22.3057 23.3892 22.6957C22.7717 23.3782 22.1001 23.8657 21.3201 24.1798C20.5726 24.4832 19.7601 24.6457 18.9042 24.6457ZM6.05591 2.979C5.46008 2.979 4.90758 3.239 4.37675 3.759C3.87841 4.22484 3.53175 4.734 3.31508 5.2865C3.08758 5.84984 2.97925 6.44567 2.97925 7.08484C2.97925 8.09234 3.21758 9.1865 3.69425 10.3132C4.18175 11.4615 4.86425 12.6532 5.73092 13.8448C6.59758 15.0365 7.58342 16.1957 8.66675 17.2898C9.75008 18.3623 10.9201 19.359 12.1226 20.2365C13.2926 21.0923 14.4951 21.7857 15.6867 22.284C17.5392 23.0748 19.2726 23.259 20.7026 22.6632C21.2551 22.4357 21.7426 22.089 22.1867 21.5907C22.4359 21.3198 22.6309 21.0273 22.7934 20.6807C22.9234 20.4098 22.9884 20.1282 22.9884 19.8465C22.9884 19.6732 22.9559 19.4998 22.8692 19.3048C22.8368 19.2398 22.7717 19.1207 22.5659 18.9798L18.9692 16.4232C18.7526 16.2715 18.5576 16.1632 18.3734 16.0873C18.1351 15.9898 18.0376 15.8923 17.6692 16.1198C17.4526 16.2282 17.2576 16.3907 17.0409 16.6073L16.2176 17.4198C15.7951 17.8315 15.1451 17.929 14.6467 17.7448L14.3542 17.6148C13.9101 17.3765 13.3901 17.0082 12.8159 16.5207C12.2959 16.0765 11.7326 15.5565 11.0501 14.8848C10.5192 14.3432 9.98841 13.769 9.43591 13.1298C8.92675 12.534 8.55841 12.0248 8.33091 11.6023L8.20092 11.2773C8.13592 11.0282 8.11425 10.8873 8.11425 10.7357C8.11425 10.3457 8.25508 9.999 8.52591 9.72817L9.33841 8.88317C9.55508 8.6665 9.71758 8.46067 9.82591 8.2765C9.91258 8.13567 9.94508 8.0165 9.94508 7.90817C9.94508 7.8215 9.91258 7.6915 9.85842 7.5615C9.78258 7.38817 9.66341 7.19317 9.51175 6.98734L6.99841 3.434C6.89008 3.28234 6.76008 3.174 6.59758 3.09817C6.42425 3.02234 6.24008 2.979 6.05591 2.979ZM15.1126 16.2607L14.9392 16.9973L15.2317 16.239C15.1776 16.2282 15.1342 16.239 15.1126 16.2607Z"
                fill="white"
              />
              <path
                d="M14.5572 16.4379L14.4525 16.8828L15.4057 17.1773L15.6982 16.4189L15.7259 16.3472L16.2545 15.8258L16.2545 15.8258L16.257 15.8234C16.5681 15.5123 16.8523 15.2988 17.1081 15.1664L17.1251 15.1577L17.1413 15.1476C17.5897 14.8704 18.1771 14.8078 18.7979 15.0644C19.0462 15.1696 19.3177 15.3145 19.6127 15.5209C19.6132 15.5213 19.6137 15.5216 19.6142 15.522L23.2079 18.0765L23.2078 18.0766L23.2177 18.0833C23.5437 18.3036 23.7686 18.5749 23.9013 18.8871C24.0423 19.246 24.1026 19.5613 24.1026 19.8682C24.1026 20.3115 24.001 20.7596 23.8028 21.1842C23.5965 21.6263 23.3431 22.006 23.0207 22.3578L23.0185 22.3602C22.4449 22.9941 21.8341 23.4338 21.1333 23.716L21.1321 23.7165C20.4446 23.9955 19.696 24.1457 18.9042 24.1457C17.76 24.1457 16.5374 23.8722 15.2535 23.3295C13.9936 22.794 12.7158 22.0558 11.4634 21.1538C10.2167 20.2374 9.01218 19.2141 7.87118 18.0946C6.74201 16.9546 5.71942 15.7508 4.81413 14.5156C3.90085 13.241 3.17372 11.9741 2.66009 10.7584C2.11819 9.46597 1.85425 8.2319 1.85425 7.08484C1.85425 6.30094 1.9947 5.56139 2.26379 4.87349C2.53855 4.17706 2.98228 3.52356 3.59145 2.95433L3.59158 2.95447L3.60132 2.94486C4.35427 2.20169 5.18546 1.854 6.05591 1.854C6.40567 1.854 6.76622 1.93562 7.06718 2.07725L7.06718 2.07726L7.07055 2.07882C7.41601 2.23826 7.69925 2.47248 7.90406 2.77969L7.90809 2.78573L7.91229 2.79166L10.4256 6.33416L10.4256 6.33417L10.4284 6.33809C10.6374 6.62666 10.7877 6.89308 10.888 7.1485L10.8912 7.15654L10.8946 7.16447C11.0136 7.4389 11.0701 7.69619 11.0701 7.92984C11.0701 8.2412 10.9808 8.55405 10.7947 8.86426L10.7904 8.8714L10.7863 8.87868C10.653 9.11862 10.4367 9.39615 10.144 9.68879L10.1439 9.6887L10.1365 9.6965L9.39982 10.4657L9.19119 10.6835L9.28657 10.9696C9.3087 11.036 9.33246 11.0835 9.34518 11.1089L9.34621 11.111L9.35241 11.1234L9.35929 11.1354C9.50856 11.3966 9.78836 11.8121 10.3011 12.4141L10.3011 12.4141L10.3055 12.4191C10.8388 13.0287 11.3441 13.5891 11.8519 14.1079L11.8518 14.108L11.8587 14.1147C12.5 14.7452 13.0426 15.2551 13.5573 15.6805C13.9698 16.0277 14.2985 16.2709 14.5572 16.4379ZM3.23376 10.508L3.234 10.5086C3.73816 11.6961 4.44051 12.9206 5.32655 14.1389C6.20844 15.3515 7.21075 16.5299 8.31144 17.6416L8.31142 17.6416L8.31498 17.6452C9.41583 18.735 10.6049 19.7479 11.8278 20.6404C13.0244 21.5156 14.2601 22.2292 15.4921 22.7446C17.4103 23.5631 19.2924 23.792 20.8939 23.1251C21.5194 22.8674 22.0671 22.4756 22.5574 21.9263C22.8407 21.6178 23.0627 21.2838 23.2452 20.895C23.4054 20.5604 23.4884 20.2058 23.4884 19.8465C23.4884 19.6033 23.4413 19.3608 23.3262 19.1018L23.3215 19.0914L23.3165 19.0812C23.2543 18.9568 23.1387 18.767 22.8522 18.5699L19.2589 16.0156L19.256 16.0136C19.0156 15.8453 18.7884 15.7175 18.5638 15.625L18.5627 15.6246C18.5402 15.6153 18.5187 15.6059 18.4916 15.5939C18.4668 15.583 18.4338 15.5684 18.3998 15.5548C18.3297 15.5269 18.2312 15.4931 18.1105 15.4833C17.861 15.4631 17.639 15.5534 17.4253 15.683C17.1471 15.826 16.9136 16.0277 16.6884 16.2527C16.6881 16.2531 16.6877 16.2534 16.6874 16.2538L15.8686 17.0617C15.8683 17.062 15.868 17.0624 15.8677 17.0627C15.5986 17.324 15.1648 17.397 14.8335 17.2807L14.5748 17.1657C14.1753 16.9492 13.6907 16.6074 13.14 16.14C12.6321 15.7061 12.0788 15.1956 11.404 14.5316C10.8817 13.9986 10.3593 13.4334 9.81511 12.8039C9.32756 12.2333 8.98907 11.7632 8.78428 11.3895L8.67704 11.1214C8.62391 10.9131 8.61425 10.823 8.61425 10.7357C8.61425 10.4744 8.7051 10.2561 8.87947 10.0817L8.87954 10.0818L8.88633 10.0747L9.69553 9.23315C9.93085 8.99737 10.1203 8.76121 10.2544 8.53421C10.3781 8.33186 10.4451 8.12454 10.4451 7.90817C10.4451 7.727 10.3856 7.52673 10.32 7.3692L10.32 7.36917L10.3165 7.3611C10.2213 7.14344 10.0806 6.9169 9.91723 6.69475L7.40662 3.14527L7.40663 3.14527L7.40528 3.14338C7.24816 2.92341 7.05153 2.75825 6.80902 2.64508L6.80909 2.64495L6.79799 2.64009C6.57052 2.54057 6.31831 2.479 6.05591 2.479C5.29817 2.479 4.62784 2.81461 4.03106 3.39772C3.48555 3.9087 3.09592 4.47691 2.85052 5.10161C2.59753 5.72896 2.47925 6.38825 2.47925 7.08484C2.47925 8.17032 2.7357 9.33075 3.23376 10.508Z"
                stroke="#786158"
                strokeOpacity="0.75"
              />
            </svg>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        <div className="logo">Kanvica</div>

        <div className="nav-center">
          <a href="#appointment" className="book-appointment">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={26}
              viewBox="0 0 24 26"
              fill="none"
            >
              <path
                d="M8 2.95264V5.99845"
                stroke="#786158"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2.95264V5.99845"
                stroke="#786158"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.2 22.6486C19.9673 22.6486 21.4 21.1941 21.4 19.3998C21.4 17.6055 19.9673 16.1509 18.2 16.1509C16.4327 16.1509 15 17.6055 15 19.3998C15 21.1941 16.4327 22.6486 18.2 22.6486Z"
                stroke="#786158"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 23.2579L21 22.2427"
                stroke="#786158"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 10.1509H20.5"
                stroke="#786158"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.37 23.2576H8C4.5 23.2576 3 21.2271 3 18.1812V9.55145C3 6.50564 4.5 4.4751 8 4.4751H16C19.5 4.4751 21 6.50564 21 9.55145V14.1202"
                stroke="#786158"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9955 14.8309H12.0045"
                stroke="#786158"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.29431 14.8309H8.30329"
                stroke="#786158"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.29431 17.8768H8.30329"
                stroke="#786158"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Book An Appointment</span>
          </a>
          <div className="icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={30}
              viewBox="0 0 28 30"
              fill="none"
            >
              <path
                d="M14.7235 25.4352C14.3268 25.5773 13.6735 25.5773 13.2768 25.4352C9.8935 24.2625 2.3335 19.3706 2.3335 11.0793C2.3335 7.41921 5.2385 4.45801 8.82016 4.45801C10.9435 4.45801 12.8218 5.50035 14.0002 7.11125C15.1785 5.50035 17.0685 4.45801 19.1802 4.45801C22.7618 4.45801 25.6668 7.41921 25.6668 11.0793C25.6668 19.3706 18.1068 24.2625 14.7235 25.4352Z"
                stroke="#2B2B2B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={30}
              viewBox="0 0 28 30"
              fill="none"
            >
              <path
                d="M8.75 9.87123V8.72228C8.75 6.0572 10.8617 3.43949 13.4867 3.19075C16.6133 2.88279 19.25 5.38204 19.25 8.49723V10.1318"
                stroke="#2B2B2B"
                strokeWidth="1.8"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.4998 26.8445H17.4998C22.1898 26.8445 23.0298 24.9375 23.2748 22.6159L24.1498 15.509C24.4648 12.6188 23.6481 10.2617 18.6665 10.2617H9.33313C4.35146 10.2617 3.5348 12.6188 3.8498 15.509L4.7248 22.6159C4.9698 24.9375 5.8098 26.8445 10.4998 26.8445Z"
                stroke="#2B2B2B"
                strokeWidth="1.8"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.0779 15.0004H18.0884"
                stroke="#2B2B2B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.91042 15.0004H9.9209"
                stroke="#2B2B2B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={30}
              viewBox="0 0 28 30"
              fill="none"
            >
              <path
                d="M14.1865 13.6611C14.0698 13.6493 13.9298 13.6493 13.8015 13.6611C11.0248 13.5664 8.81982 11.2566 8.81982 8.41389C8.81982 5.5119 11.1298 3.15479 13.9998 3.15479C16.8582 3.15479 19.1798 5.5119 19.1798 8.41389C19.1682 11.2566 16.9632 13.5664 14.1865 13.6611Z"
                stroke="#2B2B2B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.35334 18.0324C5.53001 19.9513 5.53001 23.0783 8.35334 24.9853C11.5617 27.1648 16.8233 27.1648 20.0317 24.9853C22.855 23.0665 22.855 19.9395 20.0317 18.0324C16.835 15.8648 11.5733 15.8648 8.35334 18.0324Z"
                stroke="#2B2B2B"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </header>
      <div className="sub-menu">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">New Products</a>
            </li>
            <li>
              <a href="/accessories">Accessories</a>
            </li>
            <li>
              <a href="/book">Stories</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <img
        src="https://s3-alpha-sig.figma.com/img/d51a/49dc/f51d96ceae5a2c814575461f33198b86?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dp8sYRrztoxh8uhuMG155McGxYpS4ak5Iq-9wQnR5Br-V8Zed5cQ4rvg8X0hNxcUnD0qDE7BjnFz-z~qAEwCSmoOnjtnxB0Us7JEpsZnyBLUiI3~XwdFsaunPMvC9WuKyEy3R4GEDjmrfKCrm-L1OGDaGp9BNHp31dRyPiLs5KP54P04qpT3xl9ZrpFFLs5ukhj0cbkga94Z96Ra6PVkgGxQhgP4n9gLJBn4EGQIR-VDTGaYhFLWiKKZ8ustMWDy~KtQjDq4pasursMz4kPBDGY0sPDea5LWvAC4kqblK3XUT6I3W3x6FuHyX5yMuYdsfJWrV~M-OI7Jl~fBy7NHYw__"
        style={{ width: "100%" }}
      />
      <div className="drawtxt">
        Drawing on a design from 1962 and inspired by New York, a city in flux,
        HardWear by this is an expression of love’s transformative strength.
      </div>
      <div className="grid">
        <div className="s-flex">
          <div className="grid-item one">
            <img
              src="https://s3-alpha-sig.figma.com/img/c108/1c78/e1c7f31b446ea8b18aa1b131bc33a45a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KrXwRxkHI9CRaN6-wyflpKxwwKYrMdFoPjfph5tniv9JE15JapoHM0dERKRHGUyyAH2JQH3f1vGy-HJz7cGkuuohsW9OQR5We2LsGuuIeTN4mZ~RmqyNoChP4TW1Q3~guujsSGp4G5PoNvy3rHzpXlKSpqYVSijz8naSpb4ykwrIP4MSTUA7Z~H42YB6b-ffbfogX70XkKTJYL9x-WzWFlkY1XS6LYffvNF-RiHe7AtnyXhKOImV4H7mepZwh1xItj0NQttCa7nRImv0vnO5swnWjNWMj1mciEaRMqM6zHG-ieWOz9QH1ZC7NW7IdtzKu4BRRwgcKewKdKMfuSFnIA__"
              alt="Shine Bright, Shine Bold!"
            />
          </div>
          <div className="grid-item two">
            <img
              src="https://s3-alpha-sig.figma.com/img/db94/3ca6/0b8deb232971b492b1c152ff20e62027?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bzgEK6xnWnbewH0irinm9zg2axJZGDqrndrxCNurefai~uGpZVV7CFSzU0rAwRsPj8Iueop7wpX9AB4ZKvzV~u4gQaEzos6JOw9F9aA4ZrlckA4EQXJlHnb2HMHxmbqZi-DmmmNVgrLmR3Ec0NLv3z7V8G4jq6zqm6npIfAq8-l9kknX~nmoSSv5JLT1Ab9TpWskvkXNG6FeWLBVTe5855lTw3E84xyG6maEM6X2ou5BaNhzWBH~TMVSrDyhL~j4NyPL71ip2rSGD5CVAwU~TeMUGyhDWZFYuvolwnjUSfSXEane1fElmEQYsjP000MBFbZ0cInjCAtM62fsjr0Kmw__"
              alt="Timeless Designs for Every Occasion"
            />
          </div>
        </div>
        <div className="s-flex">
          <div className="grid-item two">
            <img
              src="https://s3-alpha-sig.figma.com/img/14b8/8dc4/d3f31866371d7091f1450e1cabbe6fc1?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RpMT4VtSEliA0M~Pt0zPJcleHN1ftScWbzUfELKV7~YufMe6pEYcj5T5GtFP-rt~33i3q6jCzahi9QzRVs4OJbT~DVSHZj83G5k5DJX3qmwqMgqANdqpPiS-ICl~bD2E2Soj2PF-Y3dJuZHUsGikGV8cdJBSWUZPrOwP20OfvPacj2DNF3oXmsvoJRCm1rRI1a7WhOHSlPHrPhSag8EKo6z26k2g86NRuEPEX~y-b5Cp04DTVEnDDqzpi1si1eWZYLe9OxHMzp8cVGK2uiqFJG3JWRGrsBn561x6yPyDkalCbrB1B0Ot0JKSD0A4avi-7AGtTCcQ0o-rXFWYJc7xHw__"
              alt="Crafted with Love, Worn with Joy"
            />
          </div>
          <div className="grid-item one">
            <img
              src="https://s3-alpha-sig.figma.com/img/04d9/48fc/1e9c6dbc6cb9c24cdcd6d76a69d1eee5?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cUcSE~8Va34vsbt7wIvryuNfhucJOa9uoe9lqKMvgOBIdaAmkJVwbL7QKV3446Jk~jgHusvXcO0iIzuEBke0ImSXE40rqmd164gscMVj5ZxgzKuiKjdleqZsvb0Cg-XaN7QTgDiB-7oul3P6kIEklRJkqNItPyZz84fRqLqj8Za~xNAGMfSiC8baTP5Ct8hC8PZt7sIGKWKzR4ojg6Egerx9JbJbaCfntMpmQC~I314Kle09GQPfpG58nueXXh76r8PHeLJEmPvwNV~3L8GthfegjTAGb6m~lHyNzxw0IWkLZhb45vSRz9i9G0Wq622nn4M46PrO9iY2D6Ahv-dOHw__"
              alt="Crafted for Your Unique Style"
            />
          </div>
        </div>
      </div>
      <div className="text">
        <h3 className="kanvika-trust">The Kanvika Trust</h3>
        <div className="categories">
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode, Navigation, Pagination]}
            pagination={{ clickable: true }} // Enable pagination with clickable dots
            className="allCategorySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              425: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              488: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
            }}
          >
            <SwiperSlide>
              <div className="p-box">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={86}
                    height={86}
                    viewBox="0 0 86 86"
                    fill="none"
                  >
                    <rect
                      width={86}
                      height={86}
                      rx={43}
                      fill="#786158"
                      fillOpacity="0.08"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50.6094 63.3663C43.4569 66.0157 35.9015 65.465 29.5137 62.4368L29.042 63.9498C28.9388 64.2805 28.5286 64.3894 28.275 64.1533C25.8433 61.888 22.7692 57.551 22.5167 53.6848C22.4937 53.3334 22.8487 53.0839 23.1716 53.2246C25.3524 54.1741 28.3899 54.5825 31.3181 54.6319C31.6325 54.6372 31.8512 54.94 31.7577 55.2401L31.1452 57.2042C37.9002 60.5848 46.4783 60.7672 53.75 58.0736C57.1394 56.8181 60.1552 55.0407 62.7108 52.8992C63.1278 52.5497 63.7082 53.0831 63.3953 53.528C60.3367 57.8788 55.9736 61.3792 50.6094 63.3663ZM44.6208 37.9982V53.7702L57.9945 45.9V30.1278L54.2143 32.3524L54.2115 38.8204C54.2112 39.0767 54.0792 39.326 53.8422 39.465L49.5289 42.0033C49.0386 42.2913 48.4039 41.9412 48.4039 41.3587V35.7718L44.6208 37.9982ZM40.0638 23.1739L43.8708 20.9336L57.2713 28.8197L53.4643 31.06L40.0638 23.1739ZM35.7504 25.7123L38.5907 24.0408L51.9912 31.9269L49.151 33.5984L35.7504 25.7123ZM43.8708 36.7057L30.4702 28.8197L34.2772 26.5793L47.6779 34.4654L43.8708 36.7057ZM49.8981 34.8925L52.7144 33.2352V38.3949L49.8982 40.0522L49.8981 34.8925ZM43.1208 37.9982L29.7471 30.1278V45.9L43.1208 53.7702V37.9982Z"
                      fill="#786158"
                    />
                  </svg>
                </div>
                <p>Easy Return Policy</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-box">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={86}
                    height={86}
                    viewBox="0 0 86 86"
                    fill="none"
                  >
                    <rect
                      width={86}
                      height={86}
                      rx={43}
                      fill="#786158"
                      fillOpacity="0.08"
                    />
                    <path
                      d="M32.6595 44.275L35.1532 45.6813V49.0844L32.6595 47.6781V44.275ZM39.9813 48.4L36.1938 46.2719V49.975C36.2032 50.3594 35.7532 50.6313 35.4157 50.425L31.8813 48.4375C31.7126 48.3438 31.6188 48.175 31.6188 47.9875V43.6937L27.8407 41.5656V55.4406L39.9813 62.4531V48.4ZM52.947 55.4406V41.575L41.022 48.3906V62.3219L52.947 55.4406ZM48.1188 38.8937L36.7657 45.3906L40.497 47.4906L52.4595 40.6562L48.7751 38.5281L48.1188 38.8937ZM45.2126 36.475L33.1657 43.375L35.7063 44.8L47.7157 37.9281C47.4907 37.7969 45.4938 36.6437 45.2126 36.475ZM28.347 40.6562C29.2845 41.1812 31.1782 42.25 32.1157 42.775L44.172 35.875L40.3938 33.7L28.347 40.6562ZM59.5938 32.8563C55.7688 26.9125 48.8782 22.9656 41.8376 22.6094C41.5657 22.5906 41.3595 22.3656 41.3595 22.0938V19.0938L32.6782 24.7094L41.3595 30.325V27.6719C41.3595 27.3813 41.6032 27.1375 41.8938 27.1562C49.7782 27.175 57.1845 32.8 59.4626 40.3375C62.0501 47.9594 59.0032 56.8094 52.722 61.6656C43.2345 69.1 28.8157 66.0625 22.8345 55.675C29.922 69.0813 48.3345 70.7687 58.0188 59.2281C64.2813 51.8406 64.8626 40.9656 59.5938 32.8563Z"
                      fill="#786158"
                    />
                  </svg>
                </div>
                <p>Easy Back</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-box">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={86}
                    height={86}
                    viewBox="0 0 86 86"
                    fill="none"
                  >
                    <rect
                      width={86}
                      height={86}
                      rx={43}
                      fill="#786158"
                      fillOpacity="0.08"
                    />
                    <path
                      d="M34.7504 29.5168L31.0633 27.388L43.6344 20.1301L47.3212 22.2587L34.7504 29.5168ZM35.4081 35.9765L37.9626 37.4515V32.8832L35.4081 31.4083V35.9765ZM38.617 31.7491L51.1883 24.4913L48.6339 23.0165L36.0628 30.2745L38.617 31.7491ZM44.2908 50.295L51.7555 45.9853C51.2558 45.1198 50.9697 44.1153 50.9697 43.0441C50.9697 39.7912 53.6076 37.1533 56.8605 37.1533V28.5206L44.2909 35.7777V50.2951L44.2908 50.295ZM43.6359 34.6468L56.2072 27.3887L52.501 25.2491L39.9295 32.5069L43.6359 34.6468ZM42.9784 35.7791L39.2751 33.6409V38.5879C39.2751 38.8224 39.15 39.0388 38.947 39.1563C38.8454 39.2146 38.7321 39.2444 38.6188 39.2444C38.5056 39.2444 38.3923 39.2146 38.2907 39.1563L34.4238 36.9236C34.2208 36.8066 34.0957 36.5896 34.0957 36.3555V30.6505L30.4089 28.5219V43.0378L42.9785 50.295V35.7791H42.9784ZM28.1525 55.5139L30.6692 54.7077C30.8317 54.6555 30.9443 54.5271 30.9745 54.359C31.0046 54.191 30.9439 54.0313 30.8096 53.9259L23.5064 48.1915C23.3861 48.0972 23.2399 48.0703 23.094 48.1162C22.9481 48.162 22.8434 48.2676 22.7988 48.4138L20.067 57.3628C20.017 57.5269 20.0591 57.6936 20.1813 57.8141C20.3035 57.9345 20.4707 57.9745 20.6341 57.9222L23.3222 57.061C26.7495 66.3285 41.5761 69.7543 50.7025 60.0537C38.9365 65.813 29.4166 59.7615 28.1526 55.5137L28.1525 55.5139ZM52.2821 43.0442C52.2821 45.5728 54.332 47.6225 56.8605 47.6225C59.389 47.6225 61.4388 45.5728 61.4388 43.0442C61.4388 40.5157 59.3889 38.4658 56.8605 38.4658C54.3321 38.4658 52.2821 40.5157 52.2821 43.0442ZM56.8604 48.5383C52.0969 48.5383 48.186 52.186 47.7667 56.8402V57.899H65.9542V56.8402C65.5348 52.1859 61.624 48.5383 56.8604 48.5383Z"
                      fill="#786158"
                    />
                  </svg>
                </div>
                <p>BIS Return Policy</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-box">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={86}
                    height={86}
                    viewBox="0 0 86 86"
                    fill="none"
                  >
                    <rect
                      width={86}
                      height={86}
                      rx={43}
                      fill="#786158"
                      fillOpacity="0.08"
                    />
                    <path
                      d="M60.3832 57.4969V65.3147L57.5632 62.9663C57.3204 62.7638 56.9669 62.7638 56.7232 62.9663L53.9069 65.3138V57.496C54.2707 57.3994 54.6222 57.5204 54.8557 57.8213L55.3844 58.4982C55.8157 59.0522 56.44 59.3569 57.1432 59.3569C57.8482 59.3569 58.4735 59.0522 58.9057 58.4972L59.4307 57.8204C59.665 57.5213 60.0185 57.4004 60.3832 57.4969ZM65.5244 51.0788C65.6913 51.3244 65.7297 51.5926 65.6369 51.8757C65.546 52.1579 65.3575 52.351 65.0782 52.4522L64.2691 52.7447C63.3925 53.0654 62.8291 53.8407 62.7991 54.7716L62.7719 55.6257C62.7616 55.9276 62.6369 56.161 62.3941 56.3382C62.1485 56.5172 61.8888 56.5622 61.5972 56.4779L61.2419 56.3757C61.2335 56.3729 61.225 56.3701 61.2157 56.3682L61.2138 56.3672L60.776 56.2416C59.8807 55.9829 58.9685 56.2782 58.3947 57.0141L57.8688 57.6919C57.6869 57.9254 57.4432 58.0444 57.1432 58.0444C56.8413 58.0444 56.605 57.9291 56.4194 57.691L55.8925 57.0151C55.4622 56.4601 54.8154 56.1516 54.1413 56.1516C53.9341 56.1516 53.7232 56.1807 53.516 56.2416L53.0688 56.3691L53.0491 56.3747L52.6854 56.4788C52.4032 56.5613 52.1379 56.5144 51.895 56.3382C51.6504 56.161 51.5266 55.9285 51.5172 55.6276L51.4882 54.7707C51.4582 53.8416 50.8957 53.0663 50.0191 52.7447L49.211 52.4522C48.9316 52.351 48.7422 52.156 48.6504 51.8766C48.5585 51.5916 48.596 51.3235 48.7638 51.0769L49.2438 50.3654C49.7679 49.5929 49.7679 48.6338 49.2447 47.8651L48.7629 47.1516C48.596 46.9069 48.5585 46.6388 48.6494 46.3566C48.7422 46.0716 48.9316 45.8766 49.211 45.7754L50.0191 45.4829C50.8947 45.166 51.4582 44.3907 51.4882 43.4607L51.5172 42.601C51.5266 42.3038 51.6541 42.0638 51.895 41.8894C52.136 41.7141 52.4032 41.6672 52.6882 41.7497L53.5132 41.9879C54.3963 42.2447 55.33 41.9419 55.8907 41.2172L56.4204 40.5385C56.6041 40.3032 56.8469 40.1832 57.1432 40.1832C57.3663 40.1832 57.5594 40.2497 57.7197 40.3829C57.731 40.3922 57.7413 40.4016 57.7516 40.411C57.7929 40.4485 57.8322 40.4916 57.8688 40.5385L58.3957 41.2163C58.9685 41.9522 59.8807 42.2485 60.776 41.9879L61.1547 41.8782L61.1969 41.866L61.5972 41.7497C61.8897 41.6663 62.1504 41.7122 62.3932 41.8885C62.6332 42.0638 62.7616 42.3047 62.7719 42.601L62.7991 43.4597C62.8291 44.3916 63.3935 45.1669 64.271 45.4829L65.0791 45.7754C65.3575 45.8766 65.545 46.0707 65.6379 46.3566C65.7297 46.6379 65.6913 46.906 65.5235 47.1535L65.0425 47.8651C64.5222 48.6347 64.5222 49.5919 65.0425 50.3654L65.5244 51.0788ZM63.0588 49.1147C63.0588 45.8532 60.4047 43.2001 57.1432 43.2001C53.8825 43.2001 51.2304 45.8532 51.2304 49.1147C51.2304 52.3754 53.8825 55.0285 57.1432 55.0285C60.4047 55.0285 63.0588 52.3754 63.0588 49.1147ZM47.3022 46.4101H26.755C26.3922 46.4101 26.0988 46.1157 26.0988 45.7538C26.0988 43.756 24.4741 42.1313 22.4763 42.1313C22.1144 42.1313 21.82 41.8379 21.82 41.4751V27.406C21.82 27.0441 22.1144 26.7497 22.4763 26.7497C24.4741 26.7497 26.0988 25.1251 26.0988 23.1272C26.0988 22.7654 26.3922 22.471 26.755 22.471H53.891C54.2529 22.471 54.5472 22.7654 54.5472 23.1272C54.5472 25.1251 56.1719 26.7497 58.1688 26.7497C58.5316 26.7497 58.826 27.0441 58.826 27.406V39.6366C58.8532 39.6676 58.8794 39.6994 58.9047 39.7322C58.9047 39.7322 58.9057 39.7322 58.9057 39.7332L59.4316 40.411C59.6538 40.6951 59.9866 40.8179 60.3325 40.7466V22.4288C60.3325 21.4679 59.5507 20.6851 58.5888 20.6851H22.0544C21.0944 20.6851 20.3135 21.4679 20.3135 22.4288V46.4522C20.3135 47.4132 21.0944 48.196 22.0544 48.196H47.8835L47.6754 47.8885C47.3716 47.4413 47.245 46.9285 47.3022 46.4101ZM61.7463 49.1147C61.7463 51.6516 59.681 53.7151 57.1432 53.7151C54.6072 53.7151 52.5429 51.6516 52.5429 49.1147C52.5429 46.5769 54.6072 44.5126 57.1432 44.5126C59.681 44.5126 61.7463 46.5769 61.7463 49.1147ZM60.2754 47.0326C60.0194 46.7766 59.6041 46.7766 59.3472 47.0326L56.575 49.8029L54.9419 48.1697C54.686 47.9138 54.2697 47.9138 54.0138 48.1697C53.7579 48.4266 53.7579 48.8419 54.0138 49.0988L56.111 51.1951C56.2385 51.3235 56.4063 51.3872 56.575 51.3872C56.7429 51.3872 56.9107 51.3235 57.0382 51.1951L60.2754 47.9607C60.5322 47.7047 60.5322 47.2894 60.2754 47.0326ZM33.7497 28.5994H28.661C28.481 29.7451 27.6157 30.6666 26.5 30.931V35.3551C26.8685 37.6829 28.4079 39.2851 31.2035 40.246C33.9982 39.286 35.5394 37.6838 35.9097 35.3541V30.931C34.7941 30.6666 33.9297 29.7451 33.7497 28.5994ZM48.7647 44.5407C48.4282 44.6616 48.1375 44.851 47.905 45.0966H27.3682C27.0747 42.9001 25.33 41.1554 23.1325 40.8619V28.0191C25.33 27.7257 27.0747 25.981 27.3682 23.7844H53.2779C53.5713 25.981 55.316 27.7257 57.5125 28.0191V38.8997C57.3925 38.8801 57.2688 38.8707 57.1432 38.8707C56.4419 38.8707 55.8166 39.1763 55.3844 39.7313L54.8547 40.411C54.6166 40.7176 54.2528 40.8366 53.8788 40.7279L53.051 40.4879C52.3769 40.2947 51.6925 40.4147 51.1244 40.8263C50.5535 41.2407 50.2272 41.8557 50.2047 42.5579L50.1757 43.4176C50.1635 43.8057 49.9375 44.116 49.5719 44.2482L48.7647 44.5407ZM39.1657 30.5897C39.1657 30.9526 39.4591 31.246 39.8219 31.246H53.8319C54.1947 31.246 54.4882 30.9526 54.4882 30.5897C54.4882 30.2269 54.1947 29.9335 53.8319 29.9335H39.8219C39.4591 29.9335 39.1657 30.2269 39.1657 30.5897ZM39.1657 33.3432C39.1657 33.706 39.4591 33.9994 39.8219 33.9994H53.8319C54.1947 33.9994 54.4882 33.706 54.4882 33.3432C54.4882 32.9804 54.1947 32.6869 53.8319 32.6869H39.8219C39.4591 32.6869 39.1657 32.9804 39.1657 33.3432ZM39.1657 36.0985C39.1657 36.4613 39.4591 36.7557 39.8219 36.7557H53.8319C54.1947 36.7557 54.4882 36.4613 54.4882 36.0985C54.4882 35.7366 54.1947 35.4422 53.8319 35.4422H39.8219C39.4591 35.4422 39.1657 35.7366 39.1657 36.0985ZM37.2232 30.3507C37.2232 29.9879 36.9288 29.6944 36.5669 29.6944C35.7185 29.6944 35.0275 29.0044 35.0275 28.156C35.0275 28.0997 35.0294 28.0547 35.0341 28.0182C35.0557 27.8326 34.9966 27.646 34.8719 27.5063C34.7472 27.3666 34.5691 27.2869 34.3816 27.2869H28.0282C27.8407 27.2869 27.6625 27.3666 27.5379 27.5063C27.4132 27.646 27.3541 27.8326 27.3757 28.0182C27.3804 28.0547 27.3822 28.0997 27.3822 28.156C27.3822 29.0044 26.6922 29.6944 25.8438 29.6944C25.481 29.6944 25.1875 29.9879 25.1875 30.3507V35.4057C25.1875 35.4385 25.1894 35.4704 25.1941 35.5032C25.6329 38.4113 27.5866 40.4494 31 41.5622C31.0666 41.5838 31.135 41.5941 31.2035 41.5941C31.2719 41.5941 31.3413 41.5838 31.4069 41.5622C34.8194 40.4513 36.7741 38.4132 37.2157 35.5041C37.2204 35.4713 37.2232 35.4385 37.2232 35.4057V30.3507ZM53.8319 39.5082C54.1947 39.5082 54.4882 39.2147 54.4882 38.8519C54.4882 38.4891 54.1947 38.1957 53.8319 38.1957H39.8219C39.4591 38.1957 39.1657 38.4891 39.1657 38.8519C39.1657 39.2147 39.4591 39.5082 39.8219 39.5082H53.8319Z"
                      fill="#786158"
                    />
                  </svg>
                </div>
                <p>SGL Certificate</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-box">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="86"
                    height="86"
                    viewBox="0 0 86 86"
                    fill="none"
                  >
                    <rect
                      width="86"
                      height="86"
                      rx="43"
                      fill="#786158"
                      fill-opacity="0.08"
                    />
                    <g clip-path="url(#clip0_511_525)">
                      <path
                        d="M36.9027 54.6927C36.0524 54.4175 35.2724 53.9602 34.617 53.3527C33.9616 52.7452 33.4465 52.0021 33.1077 51.1752C32.9857 50.8891 32.7863 50.6427 32.5319 50.4638C32.2775 50.2849 31.9782 50.1806 31.6677 50.1627C30.7718 50.1011 29.8997 49.8479 29.1102 49.4202L24.2352 62.2452C24.1836 62.3791 24.1715 62.5251 24.2004 62.6657C24.2294 62.8064 24.2981 62.9357 24.3984 63.0384C24.4988 63.1411 24.6265 63.2128 24.7664 63.2451C24.9063 63.2773 25.0525 63.2686 25.1877 63.2202L31.0902 61.0977L34.0902 66.6102C34.156 66.7276 34.2517 66.8256 34.3676 66.894C34.4836 66.9625 34.6155 66.9992 34.7502 67.0002H34.8027C34.9449 66.9905 35.0813 66.94 35.1957 66.8549C35.3101 66.7698 35.3975 66.6536 35.4477 66.5202L39.8652 54.9102C39.526 54.9702 39.1821 55.0003 38.8377 55.0002C38.1806 54.9994 37.5276 54.8956 36.9027 54.6927Z"
                        fill="#786158"
                      />
                      <path
                        d="M61.7653 62.2452L56.8903 49.4202C56.1034 49.8478 55.2337 50.1011 54.3403 50.1627C54.0285 50.1795 53.7277 50.2832 53.4719 50.4621C53.216 50.6411 53.0154 50.8881 52.8928 51.1752C52.5539 52.0021 52.0389 52.7452 51.3834 53.3527C50.728 53.9602 49.948 54.4175 49.0978 54.6927C48.4728 54.8956 47.8199 54.9994 47.1628 55.0002C46.8183 55.0003 46.4745 54.9702 46.1353 54.9102L50.5528 66.5202C50.6029 66.6536 50.6904 66.7698 50.8047 66.8549C50.9191 66.94 51.0555 66.9905 51.1978 67.0002H51.2503C51.3849 66.9992 51.5169 66.9625 51.6328 66.894C51.7487 66.8256 51.8444 66.7276 51.9103 66.6102L54.9103 61.0977L60.8128 63.2202C60.9479 63.2686 61.0941 63.2773 61.234 63.2451C61.3739 63.2128 61.5016 63.1411 61.602 63.0384C61.7023 62.9357 61.771 62.8064 61.8 62.6657C61.8289 62.5251 61.8169 62.3791 61.7653 62.2452Z"
                        fill="#786158"
                      />
                      <path
                        d="M43 25.75C40.9233 25.75 38.8932 26.3658 37.1665 27.5196C35.4398 28.6733 34.094 30.3132 33.2993 32.2318C32.5045 34.1504 32.2966 36.2616 32.7018 38.2984C33.1069 40.3352 34.1069 42.2062 35.5754 43.6746C37.0438 45.1431 38.9148 46.1431 40.9516 46.5482C42.9884 46.9534 45.0996 46.7455 47.0182 45.9507C48.9368 45.156 50.5767 43.8102 51.7304 42.0835C52.8842 40.3568 53.5 38.3267 53.5 36.25C53.4969 33.4662 52.3896 30.7973 50.4212 28.8288C48.4527 26.8604 45.7838 25.7531 43 25.75ZM49.3809 35.0425L46.7339 37.6217L47.3586 41.2638C47.3822 41.4016 47.3668 41.5433 47.3141 41.6728C47.2614 41.8023 47.1735 41.9145 47.0604 41.9968C46.9473 42.079 46.8134 42.128 46.674 42.1382C46.5345 42.1483 46.395 42.1193 46.2711 42.0544L43 40.3351L39.729 42.0545C39.6052 42.1194 39.4656 42.1484 39.3262 42.1382C39.1867 42.128 39.0529 42.0791 38.9398 41.9968C38.8267 41.9146 38.7388 41.8024 38.6861 41.6729C38.6334 41.5433 38.618 41.4017 38.6415 41.2638L39.2663 37.6218L36.6192 35.0425C36.5189 34.9448 36.4479 34.821 36.4144 34.6851C36.3808 34.5491 36.386 34.4065 36.4293 34.2734C36.4726 34.1402 36.5522 34.0219 36.6593 33.9317C36.7664 33.8415 36.8966 33.783 37.0352 33.763L40.6922 33.2316L42.3276 29.9181C42.3966 29.8012 42.4949 29.7042 42.6129 29.6369C42.7308 29.5696 42.8642 29.5341 43 29.5341C43.1358 29.5341 43.2692 29.5696 43.3872 29.6369C43.5051 29.7042 43.6034 29.8012 43.6724 29.9181L45.3078 33.2316L48.9648 33.763C49.1034 33.783 49.2336 33.8415 49.3407 33.9317C49.4478 34.0219 49.5275 34.1402 49.5707 34.2734C49.614 34.4065 49.6192 34.5491 49.5856 34.6851C49.5521 34.821 49.4811 34.9448 49.3809 35.0425Z"
                        fill="#786158"
                      />
                      <path
                        d="M44.1375 34.2491L43 31.9451L41.8626 34.2491C41.8089 34.3582 41.7294 34.4526 41.631 34.5241C41.5326 34.5957 41.4183 34.6422 41.2979 34.6596L38.7549 35.0291L40.5955 36.8228C40.6824 36.9078 40.7475 37.0126 40.785 37.1282C40.8225 37.2439 40.8314 37.3669 40.8109 37.4867L40.3765 40.0195L42.6514 38.8238C42.759 38.7672 42.8787 38.7377 43.0002 38.7377C43.1217 38.7377 43.2414 38.7672 43.3489 38.8238L45.6238 40.0195L45.1895 37.4867C45.169 37.3669 45.1779 37.2439 45.2154 37.1282C45.2529 37.0126 45.3179 36.9078 45.4049 36.8228L47.245 35.0291L44.7025 34.6596C44.5821 34.6422 44.4677 34.5957 44.3692 34.5242C44.2708 34.4527 44.1912 34.3582 44.1375 34.2491Z"
                        fill="#786158"
                      />
                      <path
                        d="M48.6331 53.2665C49.2758 53.0591 49.8656 52.7142 50.3614 52.2555C50.8571 51.7969 51.2469 51.2357 51.5035 50.611C51.7329 50.0643 52.1103 49.5923 52.5931 49.2481C53.0759 48.9039 53.6452 48.7012 54.2368 48.6626C54.922 48.6182 55.589 48.4233 56.1903 48.0918C56.7916 47.7603 57.3125 47.3004 57.7159 46.7448C58.1109 46.2019 58.3812 45.5786 58.5077 44.9192C58.6342 44.2599 58.6137 43.5807 58.4476 42.9303C58.3072 42.3615 58.3308 41.7645 58.5156 41.2086C58.7005 40.6527 59.039 40.1604 59.492 39.789C60.0164 39.3591 60.4387 38.8181 60.7284 38.2051C61.0181 37.5921 61.1679 36.9223 61.1671 36.2443C61.1662 35.5663 61.0147 34.8969 60.7235 34.2846C60.4323 33.6723 60.0086 33.1324 59.4832 32.7039C59.0319 32.3309 58.6953 31.8378 58.5125 31.2817C58.3297 30.7255 58.308 30.1289 58.45 29.5609C58.6148 28.9115 58.6344 28.2338 58.5076 27.576C58.3808 26.9182 58.1105 26.2964 57.7162 25.7548C57.3118 25.1985 56.7897 24.7382 56.1871 24.4067C55.5845 24.0752 54.9162 23.8807 54.2299 23.837C53.6394 23.7972 53.0716 23.594 52.59 23.25C52.1085 22.906 51.7321 22.4348 51.503 21.8891C51.2466 21.2645 50.8569 20.7033 50.3612 20.2447C49.8655 19.7861 49.2758 19.4412 48.6331 19.2341C47.9812 19.0209 47.2906 18.9525 46.6096 19.0336C45.9285 19.1147 45.2734 19.3433 44.6897 19.7036C44.1808 20.0145 43.596 20.179 42.9997 20.179C42.4033 20.179 41.8185 20.0145 41.3096 19.7036C40.726 19.3433 40.0708 19.1147 39.3898 19.0336C38.7087 18.9525 38.0182 19.0209 37.3663 19.2341C36.7238 19.4414 36.1343 19.7864 35.6388 20.2449C35.1433 20.7035 34.7538 21.2645 34.4974 21.8891C34.2676 22.4358 33.8901 22.9077 33.4072 23.2518C32.9242 23.596 32.355 23.7988 31.7632 23.8376C31.0781 23.882 30.4111 24.0769 29.8098 24.4083C29.2085 24.7398 28.6876 25.1997 28.2842 25.7554C27.8892 26.2983 27.6189 26.9216 27.4924 27.5809C27.3659 28.2403 27.3864 28.9194 27.5525 29.5699C27.6929 30.1387 27.6693 30.7356 27.4844 31.2916C27.2996 31.8475 26.9611 32.3398 26.5081 32.7113C25.9837 33.1411 25.5614 33.6821 25.2717 34.2951C24.982 34.9081 24.8322 35.5779 24.833 36.2559C24.8339 36.9339 24.9854 37.6033 25.2766 38.2156C25.5678 38.8279 25.9915 39.3678 26.5169 39.7963C26.9682 40.1692 27.3048 40.6623 27.4876 41.2185C27.6704 41.7747 27.6921 42.3713 27.55 42.9393C27.3853 43.5886 27.3657 44.2663 27.4925 44.9242C27.6193 45.582 27.8896 46.2038 28.2839 46.7454C28.6883 47.3016 29.2104 47.7619 29.813 48.0934C30.4156 48.4249 31.0839 48.6194 31.7702 48.6632C32.3607 48.7029 32.9285 48.9062 33.4101 49.2501C33.8916 49.5941 34.268 50.0653 34.4971 50.611C34.7535 51.2356 35.1431 51.7968 35.6388 52.2554C36.1344 52.7139 36.7241 53.0588 37.3667 53.266C38.0186 53.4792 38.7092 53.5476 39.3902 53.4665C40.0713 53.3854 40.7264 53.1568 41.3101 52.7965C41.8189 52.4858 42.4035 52.3214 42.9997 52.3214C43.5959 52.3214 44.1806 52.4858 44.6894 52.7965L44.6902 52.7969C45.2738 53.1569 45.9288 53.3854 46.6097 53.4665C47.2906 53.5476 47.9813 53.4794 48.6331 53.2665ZM43 48.2501C40.6267 48.2501 38.3066 47.5463 36.3332 46.2277C34.3598 44.9091 32.8217 43.035 31.9135 40.8423C31.0052 38.6496 30.7676 36.2368 31.2306 33.909C31.6936 31.5812 32.8365 29.443 34.5148 27.7648C36.193 26.0866 38.3312 24.9437 40.659 24.4807C42.9867 24.0176 45.3995 24.2553 47.5923 25.1635C49.785 26.0718 51.6591 27.6098 52.9777 29.5832C54.2963 31.5566 55 33.8767 55 36.2501C54.9964 39.4316 53.731 42.4817 51.4813 44.7313C49.2317 46.981 46.1815 48.2464 43 48.2501Z"
                        fill="#786158"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_511_525">
                        <rect
                          width="48"
                          height="48"
                          fill="white"
                          transform="translate(19 19)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p>IGL Certificate</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="text">
        <h3 className="kanvika-trust">Popular Collection</h3>
        <div className="categories">
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode, Navigation, Pagination]}
            pagination={{ clickable: true }} // E nable pagination with clickable dots
            className="allCategorySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              425: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              488: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
            }}
          >
            {["logo", "logo", "logo", "logo", "logo"].map((item, id) => (
              <SwiperSlide key={id}>
                <div className="logoimg">
                  <h4>{item}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <h3 className="kanvika-trust">Shop By Category</h3>
        <p className="p-center">
          Brilliant design and unparalleled craftsmanship
        </p>
      </div>
      <div className="jewelry-container">
        <h2>Brilliant design and unparalleled craftsmanship</h2>
        <div className="jewelry-grid">
          <div className="jewelry-item">
            <img
              style={{ height: "400px" }}
              src="https://s3-alpha-sig.figma.com/img/4d94/3e73/ec70b2ffa2627479002d45f50fbc30b2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SJBn1RhGeDYU~ROnhL6X6XpVCcXcMJBY~bbueeb5LBWPDv2dvkLOUf9gIyUY8Dx9t5ezNJGTaMSfoZ4ZVb~jH-rKAGMp2QdUOZsk5Uo7~nR0kO9NSzr5H~BvfaK74vUflY5~WQUgQAlowil2--lZ8jbGyltDzDurLZTTAWUekuFtbXvQojTMmf8BOFwjfXzJhTBSRrVCO2CUXH0IzSRrFR2Z~ozCCZ3ZMIK0V9dCpC0wzrDtFzM9uJ6I9hcr0CZVv-8ru2bHaB-svzkTZ76x0aYufjzkrEkhYvW7TJk30syytsZp6pjQHp1aKSKkezheBf0Sz5o3oqcZqIQrJq-qRw__"
              alt="Rings"
            />
            <p>Rings</p>
          </div>
          <div className="jewelry-item earing">
            <img
              style={{ height: "400px" }}
              src="https://s3-alpha-sig.figma.com/img/885e/488a/9e4c05fd15e5c3b61943f29fcab53322?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f0xpfnU~xCEKknalsNk~mDv0wkdUyIGJvoW7HMPP-U0fOVQORyhNz3bMXeA3Vt-y9~kZ8sm1nLvXXSeGQ0dXcr3RxyMN0qlAw9EwExtIaExg9m7SXHcQSxzX50qphUwtHsvcQYx6rHAcylFvW-LoYrbGvEytf05sKcFnxUt~rUVkqzCke7yn-9vLMyOV5Idp9hfUWJoKGqW9RLTr7LF6ilQ79H20PBQFPprs~hWzkZ0s-ZgGF3h-WfPffq1hrkV-U6ETKw~wxbeDSOqGcPsDbW8p-4xSe6gysbz2mHBiAdf5bYynVcjDRgyrnN~OrDovDn3H6NeZmWbidJPb2cmLJg__"
              alt="Earrings"
            />
            <p>Earrings</p>
          </div>
          <div className="jewelry-item">
            <img
              style={{ height: "400px" }}
              src="https://s3-alpha-sig.figma.com/img/bd02/8fa8/746fc4f6bf62311f581c7c0adcecb0b7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F~RXfQkOcFP9gtBu5Va7whd7vpTkeIADU2gwWI6vsDnTGmnauFfHzVQzTeCW0xYlYZ0Jb64vSyQFYVLM0A8ZVRkSLvAvRlP8pRE5cttmEhfzwsleclvIai4xjpYUOtHx-TFdWjI30iXMzwEUwlVn4K6Uya1pSZdYv6Mup9~OZbcWNL0UOJssA0HQ4Uu8vKkd9Ou2U0LKvky4r4cg894kHmxnapqazyplsviMslJPl3aHX-k75GPJLQgpY8h6uP2EoxkjkayfLEHmcu9p~kIM-1c-w5~j1-K6UVkybDFWru5Wo~05RIJYhn0ZhcejdYeiQBMMLbv1ocGJriDYeXo1kQ__"
              alt="Pendants"
            />
            <p>Pendants</p>
          </div>
        </div>
        <div className="jew-flex">
          <div className="jewelry-item">
            <img
              src="https://s3-alpha-sig.figma.com/img/1173/bab3/8982791c35ae390dd65b703997275d1b?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mTTYBhyFRYKidNrYjFcR~pQ4R9ebnqDMWgr4YgoatG1HStsbXIYPBljeraptrsewWLI3l47t~71jptKuXwHYWz-t51F9HsS1t38e61mNHT49C~iLtxQG5MiGMnHD3KLRGFRF56gwlj7ohEhbU1rEU6IBChEQ1SW9K~Fykvdg5N2OPffDo1AHWhHJeOFE3moJTeyv1ZXdUCOOdrfRfWCRQ33Bno-xXKC0-Qdg60HW~SrCGMzEzIucozeCZ24J6rdw0bWiU7JnaXE1G8V1nUYdCkiZnwtDomOO-YESlCDXVcHd5CBE1VQFj612gGGa4rbGKprpZBK1jflNEFDG82vA3g__"
              alt="Bangles"
            />
            <p>Bangles</p>
          </div>
          <div className="jewelry-item">
            <img
              src="https://s3-alpha-sig.figma.com/img/2696/6a81/a5ea992106a830794b5470095a6cafc5?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hn2g82JTbUWDB9Ps8uJg90tX0knw4HqBR3MbtfNsHnEkrD7IcJAKPrUzCS4V9Av4ce-2K3aP7WYFlgXFQtrCmIlYPZA8d4XFVAK~gjc5uZl9Q8qO4kMjsAIWKTyNwkL~tdsJogIQ4gtlR3QvQv8g2fBy5WH-RAYsWUZIfuaZtgfX42PJ0k0TovcOQ-dWDedpHrqss1XOSss0tdIiOYIwdckZBuMK5d-pN7gR-~lr2oTiWz3yugARkl4f4jB4RQjpfd9qhM~2xR4FT1xTroqypZFGX5X-bM-0WBULRVnz8Sby7TL27PwPOTTEt7nr7uQ7DVOw1qf6ohDznRtORYBF~w__"
              alt="Bracelets"
            />
            <p>Bracelets</p>
          </div>
        </div>
      </div>
      <div className="budget-shop">
        <div>
          <h3 className="kanvika-trust">Shop On Budget</h3>
          <p className="p-center">
            Brilliant design and unparalleled craftsmanship
          </p>
        </div>
        <div>
          <img src={Shopiimg} alt="shop" />
        </div>
      </div>
      <div className="ring-size">
        <div className="ring-txt">
          <h3>Are Forget Your Ring Size?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <button className="size-btn" role="button">
            Find Size
          </button>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/9b4e/9fcf/fb2284fd95fbf5ac0cb5a68a96b9424e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aPSTIZWugzm3yxJYRqy5n-d1~y60YsU~25CCIdykQvTYB04YKkW4Ncmtxcu0w2ipytAYPJ6D6EscqZibU69naJ08jO5TyUDHZirhYT8pYp9ALMgTQgWCoAQKooqDw4VrVXCIps0VaznoXSYFHnYZoqndtTdHzvtRSNlbVXH~IStlG-UDmGW1ry14g6~sATiI4agL-yRaNGy-FRY0Xp7EmognwjH0ojlAtnQNzpCKNvtvswxJVY6xPpf~kDnhVG7jBZvVs3dUA1s16EL2-6oYxciomWKN78ehf2V03feNhDgr-0xAXEKs0lIKNTHsQ4dCCnJRQrT-u69WqXfBzmaH4w__"
          alt="ring"
        />
      </div>
      <div className="jewelry-options">
        <div className="option-card">
          <img
            src="https://www.figma.com/file/RNqdm0Wowanflk9DqcXUnD/image/e106ec914fa8ee415e7fd08f29304a9962eba879"
            alt="Create Your Own Jewellery"
          />
          <div className="card-overlay">
            <p>Create Your Own Jewellery →</p>
          </div>
        </div>
        <div className="option-card">
          <img
            src="https://s3-alpha-sig.figma.com/img/1d8e/32e7/415bdf0243f749f07a5198606b6a5b63?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SiXOCsC0-tBSmcitzM~9Ke1PyS89tAZVN0GUD1tSh8-QxWNi7UVXNNVNgGExGfih-rdrW-f4XqIQH5xNaUXfG2UnyyQ8z7ejjvVFAB14TpUUoi8qUDEfQzLntHtdw8SVvEsAkov5QXtH2aO8e7h25H-RawrcPd15UMvSc7TptaRbXsetHDKY5MSx8t9LhHNuDj07Ijr9tKIALFWRCqPGASMRa~5RFPid89Prk8rpg9wiUEA2R-UZ4y91CLScN6uUGpGZPywf~MIk1m5PxP~-wV0si9d19Y235dbmjO-QvFl9~dh0Q6g7zfs~IdnvSI6RCB~qOI5IgwgwbeHCwPmoDw__"
            alt="Consult With Our Stylist"
          />
          <div className="card-overlay">
            <p>Consult With Our Stylist →</p>
          </div>
        </div>
      </div>
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
      <Faq />
    </div>
  );
};

export default Home;
