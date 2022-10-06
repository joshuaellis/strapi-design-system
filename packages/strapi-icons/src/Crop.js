import * as React from 'react';

function SvgCrop(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20.571 21.429h-3.428V24h3.428v-2.571zM20.571 17.143V3.429H7.714v3.428h9.429v10.286H6.857V0H3.43v3.429H0v3.428h3.429v13.714H24v-3.428h-3.429z"
        fill="#212134"
      />
    </svg>
  );
}

export default SvgCrop;
