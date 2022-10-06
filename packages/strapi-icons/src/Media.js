import * as React from 'react';

function SvgMedia(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0.5} y={0.5} width={31} height={23} rx={2.5} fill="#F6ECFC" stroke="#E0C1F4" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 8.759a2 2 0 00-2-2h-8c-1.105 0-2 .902-2 2.006v6.068a2 2 0 00.985 1.724l3.66-3.74 3.31 3.381 1.471-1.502 1.731 1.769c.51-.363.843-.958.843-1.632V8.76zM18.5 9c-.84 0-1.5.66-1.5 1.5s.66 1.5 1.5 1.5 1.5-.66 1.5-1.5S19.34 9 18.5 9z"
        fill="#9736E8"
      />
    </svg>
  );
}

export default SvgMedia;
