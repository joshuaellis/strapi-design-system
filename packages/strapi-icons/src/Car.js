import * as React from 'react';

function SvgCar(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19 20H5v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-9l2.513-6.702A2 2 0 016.386 4h11.228a2 2 0 011.873 1.298L22 12v9a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1zM4.136 12h15.728l-2.25-6H6.386l-2.25 6zM6.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill="#212134"
      />
    </svg>
  );
}

export default SvgCar;
