import * as React from 'react';

function SvgScissors(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 14.121l-2.317 2.317a4 4 0 11-2.12-2.121L9.88 12 4.21 6.333a2 2 0 010-2.829l.708-.707L12 9.88l7.081-7.082.708.707a1.999 1.999 0 010 2.829L14.12 12l2.317 2.317a4 4 0 11-2.12 2.121L12 14.12v.001zM6 20a2 2 0 100-4 2 2 0 000 4zm12 0a2 2 0 100-4 2 2 0 000 4z"
        fill="#212134"
      />
    </svg>
  );
}

export default SvgScissors;
