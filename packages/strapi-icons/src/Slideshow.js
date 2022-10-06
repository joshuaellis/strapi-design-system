import * as React from 'react';

function SvgSlideshow(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M13 17v3h5v2H6v-2h5v-3H4a1 1 0 01-1-1V4H2V2h20v2h-1v12a1 1 0 01-1 1h-7zM10 6v7l5-3.5L10 6z"
        fill="#212134"
      />
    </svg>
  );
}

export default SvgSlideshow;
