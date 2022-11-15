import React from "react";
const iconTypes = {
  instagram: (styles) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      style={{ fill: "currentcolor" }}
      className={styles}
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  ),
  github: (styles) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      style={{ fill: "currentcolor" }}
      className={styles}
    >
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  ),
  linkedin: (styles) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      style={{ fill: "currentcolor" }}
      className={styles}
    >
      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
    </svg>
  ),
  bolt: (styles) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      style={{ fill: "currentcolor" }}
      className={styles}
    >
      <path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z" />
    </svg>
  ),
  home: (styles) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      style={{ fill: "currentcolor" }}
      className={styles}
    >
      <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
    </svg>
  ),
  mail: (styles) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ fill: "currentcolor" }}
      className={styles}
    >
      <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
    </svg>
  ),
  profile: (styles) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      style={{ fill: "currentcolor" }}
      className={styles}
    >
      <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
    </svg>
  ),
  html: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="48"
      height="48"
      viewBox="0 0 172 172"
      style={{ fill: "#000000" }}
    >
      <defs>
        <linearGradient
          x1="65.24533"
          y1="8.64658"
          x2="122.40308"
          y2="165.679"
          gradientUnits="userSpaceOnUse"
          id="color-1_v8RpPQUwv0N8_gr1"
        >
          <stop offset="0" stopColor="#f09701"></stop>
          <stop offset="1" stopColor="#e36001"></stop>
        </linearGradient>
      </defs>
      <g
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M0,172v-172h172v172z" fill="none"></path>
        <g>
          <path
            d="M25.77133,25.714l9.41342,106.67583c0.39058,4.43258 3.47583,8.17 7.75433,9.39192l38.13742,10.89692c3.21783,0.92092 6.62558,0.92092 9.84342,0l38.13742,-10.89692c4.2785,-1.22192 7.36375,-4.95575 7.75433,-9.39192l9.41342,-106.67583c0.37267,-4.1925 -2.92758,-7.79733 -7.13442,-7.79733h-106.18133c-4.20683,0 -7.50708,3.60483 -7.138,7.79733z"
            fill="url(#color-1_v8RpPQUwv0N8_gr1)"
          ></path>
          <path
            d="M86,28.66667v114.30833l35.389,-10.11217c2.85592,-0.817 4.91275,-3.311 5.17075,-6.26725l8.1915,-94.03383c0.18275,-2.09625 -1.46558,-3.89508 -3.569,-3.89508z"
            fill="#f09601"
          ></path>
          <path
            d="M86,89.58333v-14.33333h30.81667l-2.50833,41.20833l-28.30833,9.31667v-15.05l14.69167,-5.01667l1.075,-16.125zM117.89167,60.91667l1.075,-14.33333h-32.96667v14.33333z"
            fill="#ffffff"
          ></path>
          <path
            d="M86,110.725v15.05l-28.30833,-9.31667l-1.43333,-19.70833h14.33333l0.71667,8.95833zM68.44167,60.91667h17.55833v-14.33333h-32.60833l2.50833,43h30.1v-14.33333h-16.48333z"
            fill="#d6e0e9"
          ></path>
          <path
            d="M118.96667,46.58333l-1.075,14.33333h-31.89167h-17.55833l1.075,14.33333h16.48333h30.81667l-2.50833,41.20833l-28.30833,9.31667l-28.30833,-9.31667l-1.43333,-19.70833h14.33333l0.71667,8.95833l14.69167,5.01667l14.69167,-5.01667l1.075,-16.125h-15.76667h-30.1l-2.50833,-43h32.60833h32.96667M122.8295,43h-3.86283h-32.96667h-32.60833h-3.79833l0.22217,3.79117l2.50833,43l0.19708,3.3755h-0.11467l0.2795,3.84492l1.43333,19.70833l0.17558,2.39367l2.279,0.74892l28.30833,9.31667l1.118,0.36908l1.12158,-0.36908l28.30833,-9.31667l2.30767,-0.75967l0.14692,-2.42592l2.50833,-41.20833l0.23292,-3.80192h-3.80908h-30.81667h-13.158l-0.5375,-7.16667h13.6955h31.89167h3.32533l0.24725,-3.31458l1.075,-14.33333l0.29025,-3.85208zM73.89908,93.16667h12.10092h11.93608l-0.66292,9.92225l-11.27317,3.8485l-11.309,-3.85925l-0.53033,-6.61483l-0.26158,-3.29667z"
            fill="#000000"
            opacity="0.05"
          ></path>
          <path
            d="M118.96667,46.58333l-1.075,14.33333h-31.89167h-17.55833l1.075,14.33333h16.48333h30.81667l-2.50833,41.20833l-28.30833,9.31667l-28.30833,-9.31667l-1.43333,-19.70833h14.33333l0.71667,8.95833l14.69167,5.01667l14.69167,-5.01667l1.075,-16.125h-15.76667h-30.1l-2.50833,-43h32.60833h32.96667M120.89808,44.79167h-1.93142h-32.96667h-32.60833h-1.89917l0.11108,1.89558l2.50833,43l0.09675,1.68775h1.69133h30.1h13.85317l-0.86717,13.02183l-12.986,4.43617l-13.00033,-4.43975l-0.6235,-7.78658l-0.13258,-1.64833h-1.65192h-14.33333h-1.92783l0.13975,1.92067l1.43333,19.70833l0.086,1.19683l1.1395,0.37625l28.30833,9.31667l0.56258,0.18275l0.559,-0.18275l28.30833,-9.31667l1.15383,-0.37983l0.07525,-1.21475l2.50833,-41.20833l0.11467,-1.89917h-1.90275h-30.81667h-14.82067l-0.80625,-10.75h15.62692h31.89167h1.66267l0.12542,-1.65908l1.075,-14.33333l0.14333,-1.92425z"
            fill="#000000"
            opacity="0.07"
          ></path>
        </g>
      </g>
    </svg>
  ),
  css: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      x="0"
      y="0"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id="TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1"
        x1="16.33"
        x2="32.293"
        y1="-2.748"
        y2="41.109"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#2aa4f4"></stop>
        <stop offset="1" stopColor="#007ad9"></stop>
      </linearGradient>
      <path
        fill="url(#TQDriqswrKwPOniLrPT12a_7gdY5qNXaKC0_gr1)"
        d="M7.192 7.176l2.627 29.77a3 3 0 002.164 2.621l10.643 3.041a4.99 4.99 0 002.747 0l10.643-3.041a3 3 0 002.164-2.621l2.627-29.77A1.998 1.998 0 0038.816 5H9.184a2 2 0 00-1.992 2.176z"
      ></path>
      <path
        fill="#35c1f1"
        d="M24 8v31.9l9.876-2.822a2 2 0 001.443-1.749l2.286-26.242A1 1 0 0036.609 8H24z"
      ></path>
      <path
        fill="#fff"
        d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5.5-8z"
      ></path>
      <path
        fill="#d6e0e9"
        d="M24 13v4h-8.9l-.3-4H24zm-4.6 8l.2 4H24v-4h-4.6zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4-.1-2.5z"
      ></path>
      <path
        d="M33.1 13l-.5 8-.7 11.5-7.9 2.6-7.9-2.6-.3-5.5h4l.1 2.5 4.1 1.4 4.1-1.4.3-4.5h-8.8l-.2-4h9.2l.3-4H15.1l-.3-4H33.1m1.064-1H13.722l.081 1.075.3 4 .069.925H27.822l-.15 2h-9.323l.052 1.05.2 4 .048.95H14.744l.058 1.054.3 5.5.037.682.649.214 7.9 2.6.312.103.313-.103 7.9-2.6.644-.212.041-.677.7-11.5.5-7.998.066-1.063zM20.761 26h6.57l-.185 2.769L24 29.843l-3.128-1.068-.073-1.815-.038-.96z"
        opacity="0.05"
      ></path>
      <path
        d="M33.1 13l-.5 8-.7 11.5-7.9 2.6-7.9-2.6-.3-5.5h4l.1 2.5 4.1 1.4 4.1-1.4.3-4.5h-8.8l-.2-4h9.2l.3-4H15.1l-.3-4H33.1m.532-.5H14.261l.04.537.3 4 .035.463H28.361l-.225 3h-9.262l.026.525.2 4 .024.475h8.742l-.242 3.634L24 30.372l-3.614-1.234-.086-2.158-.02-.48H15.272l.029.527.3 5.5.019.341.324.107 7.9 2.6.156.051.156-.051 7.9-2.6.322-.106.021-.339.7-11.5.5-7.999.033-.531z"
        opacity="0.07"
      ></path>
    </svg>
  ),
  react: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      preserveAspectRatio="xMidYMid"
      viewBox="0 -14 256 256"
    >
      <path
        fill="#00D8FF"
        d="M210.483 73.824a171.49 171.49 0 00-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 00-6.375 5.848 155.866 155.866 0 00-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 001.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 006.921 2.165 167.467 167.467 0 00-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 005.342-4.923 168.064 168.064 0 006.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 00-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 01-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193zM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 011.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 01-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94zM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 01-6.318-1.979zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 013.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 01-1.76-7.887zm110.427 27.268a347.8 347.8 0 00-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 00-7.365-13.322zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 00-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18zM82.802 87.83a323.167 323.167 0 00-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 00-7.848 12.897zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 007.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 007.859-13.026 347.403 347.403 0 007.425-13.565zm-16.898 8.101a358.557 358.557 0 01-12.281 19.815 329.4 329.4 0 01-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 01-12.513-19.846h.001a307.41 307.41 0 01-10.923-20.627 310.278 310.278 0 0110.89-20.637l-.001.001a307.318 307.318 0 0112.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0112.335 19.695 358.489 358.489 0 0111.036 20.54 329.472 329.472 0 01-11 20.722zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 015.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3zM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86z"
      ></path>
    </svg>
  ),
  javascript: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      x="0"
      y="0"
      viewBox="0 0 48 48"
    >
      <path fill="#ffd600" d="M6 42V6h36v36H6z"></path>
      <path
        fill="#000001"
        d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368l2.538-1.685zm-11.586.082c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368l2.619-1.603z"
      ></path>
    </svg>
  ),
  tailwind: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      x="0"
      y="0"
      viewBox="0 0 48 42"
    >
      <linearGradient
        id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1"
        x1="21.861"
        x2="25.703"
        y1="8.237"
        y2="36.552"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#00c1e0"></stop>
        <stop offset="1" stopColor="#009bb8"></stop>
      </linearGradient>
      <path
        fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)"
        d="M24 9.604c-5.589 0-9.347 2.439-11.276 7.318-.2.505.417.92.816.551 2.035-1.882 4.322-2.505 6.86-1.871 1.826.456 3.131 1.781 4.576 3.247C27.328 21.236 30.051 24 36 24c5.589 0 9.348-2.44 11.276-7.319.2-.505-.417-.92-.816-.551-2.035 1.882-4.322 2.506-6.86 1.872-1.825-.456-3.13-1.781-4.575-3.247C32.672 12.367 29.948 9.604 24 9.604zM12 24C6.411 24 2.652 26.44.724 31.319c-.2.505.417.92.816.551 2.035-1.882 4.322-2.506 6.86-1.871 1.825.457 3.13 1.781 4.575 3.246 2.353 2.388 5.077 5.152 11.025 5.152 5.589 0 9.348-2.44 11.276-7.319.2-.505-.417-.92-.816-.551-2.035 1.882-4.322 2.506-6.86 1.871-1.826-.456-3.131-1.781-4.576-3.246C20.672 26.764 17.949 24 12 24z"
      ></path>
    </svg>
  ),
  vite: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      preserveAspectRatio="xMidYMid"
      viewBox="-0.5 0 257 257"
    >
      <defs>
        <linearGradient
          id="linearGradient-1"
          x1="-.828%"
          x2="57.636%"
          y1="7.652%"
          y2="78.411%"
        >
          <stop offset="0%" stopColor="#41D1FF"></stop>
          <stop offset="100%" stopColor="#BD34FE"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient-2"
          x1="43.376%"
          x2="50.316%"
          y1="2.242%"
          y2="89.03%"
        >
          <stop offset="0%" stopColor="#FFEA83"></stop>
          <stop offset="8.333%" stopColor="#FFDD35"></stop>
          <stop offset="100%" stopColor="#FFA800"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#linearGradient-1)"
        d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 002.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62z"
      ></path>
      <path
        fill="url(#linearGradient-2)"
        d="M185.432.063L96.44 17.501a3.268 3.268 0 00-2.634 3.014l-5.474 92.456a3.268 3.268 0 003.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113z"
      ></path>
    </svg>
  ),
  git: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      x="0"
      y="0"
      viewBox="0 0 48 48"
    >
      <path
        fill="#F4511E"
        d="M42.2 22.1L25.9 5.8c-.5-.5-1.2-.8-1.9-.8s-1.4.3-1.9.8l-3.5 3.5 4.1 4.1c.4-.2.8-.3 1.3-.3 1.7 0 3 1.3 3 3 0 .5-.1.9-.3 1.3l4 4c.4-.2.8-.3 1.3-.3 1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3c0-.5.1-.9.3-1.3l-4-4c-.1 0-.2.1-.3.1v10.4c1.2.4 2 1.5 2 2.8 0 1.7-1.3 3-3 3s-3-1.3-3-3c0-1.3.8-2.4 2-2.8V18.8c-1.2-.4-2-1.5-2-2.8 0-.5.1-.9.3-1.3l-4.1-4.1L5.8 22.1c-.5.5-.8 1.2-.8 1.9s.3 1.4.8 1.9l16.3 16.3c.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8l16.3-16.3c.5-.5.8-1.2.8-1.9s-.3-1.4-.8-1.9z"
      ></path>
    </svg>
  ),
  externalLink: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5 ml-1.5 inline-block align-text-top"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  ),
  arrowLeft: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-4 h-4 inline-block text-[#21396c] mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  ),
};

function Icon({ type, sidebarMedia, contactMedia, navMenu, isCurrentSection }) {
  if (navMenu) {
    return iconTypes[type](
      `w-6 aspect-square transition-colors duration-100 ${
        isCurrentSection && "text-terciary"
      }`
    );
  }

  if (sidebarMedia) {
    return (
      <span className="w-10 bg-[#ccc2] aspect-square flex justify-center items-center rounded-full transition-transform transition-100 hover:scale-105">
        {iconTypes[type]("w-6 aspect-square text-gray-100")}
      </span>
    );
  }

  if (contactMedia) {
    return (
      <span className="w-11 bg-[#ccf4] aspect-square flex justify-center items-center rounded-full">
        {iconTypes[type]("w-6 aspect-square text-secondary")}
      </span>
    );
  }

  return iconTypes[type];
}

export { Icon };
