import * as React from 'react';

function SvgStrapi(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.498 0H7.68v8.035h7.783c.278 0 .503.224.503.502v7.783H24V.502A.502.502 0 0023.498 0z"
        fill="#8E75FF"
      />
      <path
        opacity={0.405}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.68 0v8.035H.252a.25.25 0 01-.178-.429L7.68 0zm8.715 23.926a.251.251 0 01-.43-.177V16.32H24l-7.605 7.606zm-.68-15.891H7.68v7.783c0 .278.225.502.503.502h7.783V8.286a.251.251 0 00-.252-.251z"
        fill="#8E75FF"
      />
    </svg>
  );
}

export default SvgStrapi;
