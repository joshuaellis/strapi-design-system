import * as React from 'react';

function SvgChartBubble(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16 16a3 3 0 110 6 3 3 0 010-6zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm8.5-10a5.5 5.5 0 110 11 5.5 5.5 0 010-11z"
        fill="#212134"
      />
    </svg>
  );
}

export default SvgChartBubble;
