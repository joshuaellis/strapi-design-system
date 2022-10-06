import * as React from 'react';

function SvgLightbulb(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11 18H7.941c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1112.49.002c-.55.685-1.888 1.726-2.185 2.998H13v-5h-2v5zm5 2v1a2 2 0 01-2 2h-4a2 2 0 01-2-2v-1h8z"
        fill="#212134"
      />
    </svg>
  );
}

export default SvgLightbulb;
