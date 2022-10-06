import * as React from 'react';

function SvgBrush(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13.289 6.216l4.939-3.841a1 1 0 011.32.082l2.995 2.994a1 1 0 01.082 1.321l-3.84 4.938a7.504 7.504 0 01-7.283 9.292C8 21.002 3.5 19.5 1 18c3.98-3 3.047-4.81 3.5-6.5 1.058-3.95 4.842-6.257 8.789-5.284zm3.413 1.879c.065.063.13.128.193.194l1.135 1.134 2.475-3.182-1.746-1.746-3.182 2.475 1.125 1.125z"
        fill="#212134"
      />
    </svg>
  );
}

export default SvgBrush;
