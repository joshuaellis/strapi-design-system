import * as React from 'react';

function SvgCrossCircle(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={12} cy={12} r={12} fill="#212134" />
      <path
        d="M16 8.806L15.194 8 12 11.194 8.806 8 8 8.806 11.194 12 8 15.194l.806.806L12 12.806 15.194 16l.806-.806L12.806 12 16 8.806z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgCrossCircle;
