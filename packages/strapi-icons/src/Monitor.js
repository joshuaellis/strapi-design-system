import * as React from 'react';

function SvgMonitor(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13 18v2h4v2H7v-2h4v-2H2.992A1 1 0 012 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z"
        fill="#212134"
      />
    </svg>
  );
}

export default SvgMonitor;
