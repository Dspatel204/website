const Home = () => {
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
    </div>
  );
};

export default Home;
