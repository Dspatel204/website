const RingSize = () => {
  const tableData = [
    { fingerSize: 0, diameter: 12.4, circumference: 39.0 },
    { fingerSize: 0.5, diameter: 12.8, circumference: 40.2 },
    { fingerSize: 1, diameter: 13.0, circumference: 41.0 },
    { fingerSize: 15, diameter: 24.4, circumference: 76.8 },
    // Add more rows as needed
  ];

  return (
    <div>
      <div className="ring-sizes">
        <div className="ring-logo">
          <div className="logo-div">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={66}
              height={51}
              viewBox="0 0 66 51"
              fill="none"
            >
              <path
                d="M14.0784 27.1214L14.1346 27.0644L14.0784 27.0073L26.897 13.998L31.8717 19.0467L23.972 27.0644L31.8717 35.0834L26.897 40.1334L14.0784 27.1214ZM51.2 27.1211L51.1439 27.0641L51.2 27.007L30.8904 6.39512C23.3417 -1.26666 11.1008 -1.44157 3.33463 5.86395L4.64137 7.18981C9.66538 2.65771 17.4299 2.83276 22.2422 7.71595L41.3063 27.0641L25.2448 43.3689C20.258 48.4307 12.084 48.4344 7.09272 43.3689C2.10156 38.3031 2.10107 30.0119 7.09224 24.9456L11.5073 20.465L6.53237 15.4153L5.79078 16.1686C-1.93087 24.0103 -1.92976 36.8531 5.79109 44.6893C13.511 52.5242 26.1699 52.5304 33.893 44.6898L51.2 27.1211ZM32.639 34.8131C32.9508 32.9211 33.8232 30.9044 35.2139 29.7023C36.3984 28.2908 38.3855 27.4053 40.2497 27.089C38.3855 26.7729 36.3984 25.8871 35.2139 24.4756C33.8232 23.2735 32.9508 21.2568 32.639 19.3648C32.3275 21.2564 31.455 23.2738 30.0643 24.4756C28.8805 25.8871 26.8927 26.7725 25.0283 27.0888C26.8927 27.4053 28.8805 28.2908 30.0643 29.7019C31.455 30.9037 32.3275 32.9211 32.639 34.8131ZM33.4068 7.39091L34.388 6.39512C41.9366 -1.26634 54.1781 -1.44157 61.9437 5.86395L60.6373 7.19015C55.6135 2.65741 47.8486 2.83276 43.0362 7.71595L38.3817 12.4401L33.4068 7.39091ZM38.3817 41.6917L40.0339 43.3689C45.0207 48.4304 53.1948 48.4341 58.186 43.3689C63.1774 38.3031 63.1778 30.0119 58.1863 24.9456L53.7712 20.4646L58.7461 15.4153L59.4884 16.1686C67.2097 24.0103 67.2083 36.8534 59.4874 44.6893C52.4387 51.8431 41.273 52.4686 33.5059 46.5554C33.9011 46.2105 34.2866 45.8484 34.6608 45.4683L38.3817 41.6917Z"
                fill="url(#paint0_linear_336_6615)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_336_6615"
                  x1="32.6394"
                  y1="0.513672"
                  x2="32.6394"
                  y2="50.5681"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C99F86" />
                  <stop offset="0.485" stopColor="#FCCFB0" />
                  <stop offset={1} stopColor="#C99F86" />
                </linearGradient>
              </defs>
            </svg>

            <h1 style={{ fontSize: "28px", margin: "0" }}>Kanvica</h1>
          </div>
          <p className="logo-txt">Spark · Initiate · Arise</p>
        </div>
        <div
          className="logo-img"
          style={{
            display: "flex",
            alignItems: "center",
            width: "80%",
            margin: "0 auto",
            padding: "20px",
          }}
        >
          <img
            style={{ width: "100%" }}
            src="https://s3-alpha-sig.figma.com/img/1130/c0fe/38021abe4c92dcb1c943f0d0ce3a7012?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LutftD3-5uaQAWHb0gUb7fLVZFKXunfdw1vQ6GIcLCeQj9jPCHbKoIvl97l6nGVGmphRMxH5Zp1i9mLaHTKuGEp1PcCLecKQeOONTyE7xjSgrpQXpReUEsRi-trr41dSs6aLMGo~7NikW6lfBxzvF65lHQj1mi0IifgMYFaqr6Mz6WdUEAGXk1SBCxW6OcMudGJcbFV9Gmtte5vZSGAeaalksOFN7svaSgthy670zFb40Zwy3IR666tEoq5NrsjLHVG14-RnWPxFtDyorvyGVmEusjcUi8FhD9Q3oqO-hyqyVvULUtcBFlSir2OuJ9z9hIBCjEjYGPVSYSh~HICOpw__"
          />
        </div>
      </div>
      <div className="ring-size-container">
        {/* Left Section */}
        <div className="left-section">
          <table>
            <thead>
              <tr>
                <th>Finger Size</th>
                <th>Diameter (MM)</th>
                <th>Circumference (MM)</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.fingerSize}</td>
                  <td>{row.diameter}</td>
                  <td>{row.circumference}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2>Ring Size Guide</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            since the 1500s.
          </p>

          <h2>How To Use</h2>
          <ol>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text since the
              1500s.
            </li>
            <li>Add additional steps as necessary.</li>
          </ol>

          <h2>Note</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            since the 1500s.
          </p>

          <div className="footer-logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="288px"
              height="222px"
              viewBox="0 0 288 222"
              fill="none"
            >
              <path
                d="M62.1116 117.764L62.3598 117.512L62.1116 117.26L118.666 59.6809L140.613 82.0263L105.761 117.512L140.613 153.004L118.666 175.355L62.1116 117.764ZM225.887 117.763L225.639 117.511L225.887 117.258L136.284 26.031C102.98 -7.87968 48.9749 -8.65382 14.7119 23.6801L20.477 29.5482C42.6422 9.48942 76.8982 10.2642 98.1293 31.8769L182.237 117.511L111.376 189.675C89.3751 212.078 53.313 212.095 31.292 189.675C9.27177 167.254 9.26962 130.558 31.2899 108.135L50.7684 88.3034L28.8199 65.9538L25.548 69.288C-8.5187 103.995 -8.51379 160.837 25.5494 195.519C59.6085 230.196 115.458 230.223 149.531 195.521L225.887 117.763ZM143.999 151.807C145.374 143.434 149.223 134.508 155.359 129.187C160.584 122.94 169.351 119.021 177.576 117.621C169.351 116.222 160.584 112.301 155.359 106.054C149.223 100.734 145.374 91.8079 143.999 83.4341C142.624 91.8065 138.775 100.735 132.639 106.054C127.416 112.301 118.647 116.22 110.421 117.62C118.647 119.021 127.416 122.94 132.639 129.186C138.775 134.505 142.624 143.434 143.999 151.807ZM147.386 30.4383L151.715 26.031C185.018 -7.87825 239.026 -8.65382 273.286 23.6801L267.523 29.5498C245.358 9.48808 211.101 10.2642 189.869 31.8769L169.334 52.7859L147.386 30.4383ZM169.334 182.252L176.623 189.675C198.625 212.077 234.688 212.093 256.708 189.675C278.729 167.254 278.731 130.558 256.709 108.135L237.231 88.3018L259.179 65.9538L262.454 69.288C296.519 103.995 296.513 160.838 262.45 195.519C231.352 227.181 182.09 229.95 147.823 203.778C149.567 202.252 151.267 200.649 152.918 198.967L169.334 182.252Z"
                fill="url(#paint0_linear_336_6613)"
                fill-opacity="0.15"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_336_6613"
                  x1="144"
                  y1="0"
                  x2="144"
                  y2="221.538"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#C99F86" />
                  <stop offset="0.485" stop-color="#FCCFB0" />
                  <stop offset="1" stop-color="#C99F86" />
                </linearGradient>
              </defs>
            </svg>
            <a
              href="https://www.kanvica.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.Kanvica.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RingSize;
