import * as React from 'react';

function SvgUnderline(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 15.2a4.358 4.358 0 002.992-1.172A3.892 3.892 0 0016.23 11.2V6h-1.693v5.2c0 .636-.267 1.247-.743 1.697A2.615 2.615 0 0112 13.6a2.615 2.615 0 01-1.795-.703 2.336 2.336 0 01-.743-1.697V6H7.769v5.2c0 1.06.446 2.078 1.24 2.828A4.358 4.358 0 0012 15.2zM17.5 16.4h-11V18h11v-1.6z"
        fill="#32324D"
      />
    </svg>
  );
}

export default SvgUnderline;
