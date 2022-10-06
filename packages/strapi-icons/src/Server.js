import * as React from 'react';

function SvgServer(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4 3h16a1 1 0 011 1v7H3V4a1 1 0 011-1zM3 13h18v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-7zm4 3v2h3v-2H7zM7 6v2h3V6H7z"
        fill="#212134"
      />
    </svg>
  );
}

export default SvgServer;
