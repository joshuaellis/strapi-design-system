import * as React from 'react';

function SvgArrowDown(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.3 0c.11 0 .2.09.2.2v18.06l8.238-8.239a.2.2 0 01.283 0l1.837 1.838a.2.2 0 010 .282L12.141 23.86a.2.2 0 01-.283 0L.141 12.14a.2.2 0 010-.282l1.837-1.838a.2.2 0 01.283 0L10.5 18.26V.2c0-.11.09-.2.2-.2h2.6z"
        fill="#212134"
      />
    </svg>
  );
}

export default SvgArrowDown;
