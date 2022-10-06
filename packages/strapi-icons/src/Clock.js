import * as React from 'react';

function SvgClock(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12C0 5.37 5.364 0 11.994 0S24 5.37 24 12s-5.376 12-12.006 12S0 18.63 0 12zm2.4 0c0 5.304 4.296 9.6 9.6 9.6 5.304 0 9.6-4.296 9.6-9.6 0-5.304-4.296-9.6-9.6-9.6A9.597 9.597 0 002.4 12zm8.4-6h1.8v6.3l5.4 3.204-.906 1.476L10.8 13.2V6z"
        fill="#212134"
      />
    </svg>
  );
}

export default SvgClock;
