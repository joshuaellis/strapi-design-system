import * as React from 'react';

function SvgWrite(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.707.297A1 1 0 0023 .004h-2a13.907 13.907 0 00-5.38 1.077 1 1 0 00-.615.923V4.92a.035.035 0 01-.022.038l-2-1.47a1 1 0 00-1.265.052A14 14 0 007 14.004v1.585l-2.707 2.707a1 1 0 101.415 1.415l2.707-2.708H10a14.014 14.014 0 0014-14v-2a1 1 0 00-.293-.706zM18 23.999H3a3 3 0 01-3-3V6A3 3 0 013 3h3a1 1 0 110 2H3a1 1 0 00-1 1v15a1 1 0 001 1h15a1 1 0 001-1v-3a1 1 0 112 0v3a3 3 0 01-3 3z"
        fill="#212134"
      />
    </svg>
  );
}

export default SvgWrite;
