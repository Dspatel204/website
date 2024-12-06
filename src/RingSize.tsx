const RingSize = () => {
  return (
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
      <div className="logo-img"
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
  );
};
export default RingSize;