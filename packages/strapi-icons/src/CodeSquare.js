import * as React from 'react';

function SvgCodeSquare(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 4a4 4 0 014-4h24a4 4 0 014 4v24a4 4 0 01-4 4H4a4 4 0 01-4-4V4z" fill="#D9822F" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.143 18.659v2.912l6.856-3.878v-2.815L17.143 11v2.906l4.16 2.38-4.16 2.373zm-2.287 0l-4.16-2.374 4.16-2.38V11L8 14.877v2.816l6.856 3.878v-2.912z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgCodeSquare;
