const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <div className="contact-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={54}
              height={41}
              viewBox="0 0 54 41"
              fill="none"
            >
              <path
                d="M11.6459 21.7946L11.6925 21.748L11.6459 21.7012L22.2498 11.0451L26.365 15.1806L19.8302 21.748L26.365 28.3164L22.2498 32.4529L11.6459 21.7946ZM42.3538 21.7943L42.3074 21.7477L42.3538 21.7009L25.5532 4.81754C19.3088 -1.45829 9.18279 -1.60156 2.75848 4.38246L3.83945 5.46848C7.99541 1.7562 14.4184 1.89959 18.3992 5.89944L34.1695 21.7477L20.8831 35.1031C16.7578 39.2493 9.99619 39.2523 5.86726 35.1031C1.73846 30.9536 1.73805 24.1623 5.86686 20.0124L9.51907 16.3423L5.40372 12.206L4.79026 12.8231C-1.59726 19.2463 -1.59634 29.7659 4.79052 36.1846C11.1766 42.6023 21.6483 42.6073 28.037 36.185L42.3538 21.7943ZM26.9997 28.0949C27.2577 26.5452 27.9793 24.8933 29.1297 23.9086C30.1096 22.7525 31.7533 22.0272 33.2954 21.7681C31.7533 21.5091 30.1096 20.7836 29.1297 19.6274C27.9793 18.6428 27.2577 16.9908 26.9997 15.4411C26.742 16.9906 26.0203 18.643 24.8699 19.6274C23.8906 20.7836 22.2462 21.5088 20.704 21.7679C22.2462 22.0272 23.8906 22.7525 24.8699 23.9084C26.0203 24.8927 26.742 26.5452 26.9997 28.0949ZM27.6348 5.6332L28.4465 4.81754C34.6909 -1.45802 44.8173 -1.60156 51.2412 4.38246L50.1605 5.46876C46.0047 1.75595 39.5814 1.89959 35.6005 5.89944L31.7502 9.76906L27.6348 5.6332ZM31.7502 33.7292L33.1169 35.1031C37.2421 39.249 44.0039 39.252 48.1327 35.1031C52.2618 30.9536 52.262 24.1623 48.133 20.0124L44.4808 16.342L48.5961 12.206L49.2101 12.8231C55.5974 19.2463 55.5962 29.7662 49.2093 36.1846C43.3784 42.0443 34.1419 42.5567 27.7168 37.7132C28.0438 37.4306 28.3626 37.134 28.6721 36.8227L31.7502 33.7292Z"
                fill="url(#paint0_linear_509_339)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_509_339"
                  x1={27}
                  y1={0}
                  x2={27}
                  y2={41}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C99F86" />
                  <stop offset="0.485" stopColor="#FCCFB0" />
                  <stop offset={1} stopColor="#C99F86" />
                </linearGradient>
              </defs>
            </svg>

            {/* <img src="logo-placeholder.png" alt="Kanvika Logo" /> */}
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-info">
            <h4>Call Us</h4>
            <p className="contact-number">+91 96421 39953</p>
          </div>
          <div className="contact-info">
            <h4>Mail Us</h4>
            <p className="contact-email">Kanvika232@gmail.com</p>
          </div>
          <div className="contact-newsletter">
            <h4>Newsletter</h4>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter Email Address" />
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
