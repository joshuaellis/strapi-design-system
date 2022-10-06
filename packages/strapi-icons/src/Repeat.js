import * as React from 'react';

function SvgRepeat(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6 4h15a1 1 0 011 1v7h-2V6H6v3L1 5l5-4v3zm12 16H3a1 1 0 01-1-1v-7h2v6h14v-3l5 4-5 4v-3z"
        fill="#212134"
      />
    </svg>
  );
}

export default SvgRepeat;
