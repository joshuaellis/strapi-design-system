import * as React from 'react';

function SvgInformationSquare(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z" fill="#4945FF" />
      <path
        d="M15.733 8c.343 0 .678.108.963.31.285.202.507.49.639.826.13.337.165.707.098 1.064a1.879 1.879 0 01-.474.942 1.705 1.705 0 01-.887.504 1.64 1.64 0 01-1.002-.105 1.76 1.76 0 01-.778-.678A1.924 1.924 0 0114 9.841a1.9 1.9 0 01.508-1.302c.325-.345.766-.539 1.225-.539zM20 24h-8v-2.265h2.933v-6.23H12.8v-2.266h4.267v8.495H20V24z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgInformationSquare;
