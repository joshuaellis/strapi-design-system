import * as React from 'react';

function SvgExpand(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.371 1.371h2.743V0H0v4.114h1.371V1.371zM7.886 1.371h2.743v2.743H12V0H7.886v1.371zM0 12h4.114v-1.372H1.371V7.885H0v4.114zM10.629 10.628H7.886v1.371H12V7.885h-1.371v2.743z"
        fill="#32324D"
      />
    </svg>
  );
}

export default SvgExpand;
