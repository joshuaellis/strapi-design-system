import * as React from 'react';

function SvgDot(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={4} height={4} rx={2} fill="#A5A5BA" />
    </svg>
  );
}

export default SvgDot;
