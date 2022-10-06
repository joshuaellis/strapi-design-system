import * as React from 'react';

function SvgPlaySquare(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z" fill="#66B7F1" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10.921a.5.5 0 01.773-.419l8.582 5.579a.5.5 0 010 .838l-8.582 5.579a.5.5 0 01-.773-.42V10.922z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgPlaySquare;
