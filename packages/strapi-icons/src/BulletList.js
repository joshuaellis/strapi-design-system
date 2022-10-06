import * as React from 'react';

function SvgBulletList(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.585 8.77a1.385 1.385 0 110-2.77 1.385 1.385 0 010 2.77zm3.23-2.223h9v1.539h-9V6.547zM5.2 12a1.385 1.385 0 102.77 0 1.385 1.385 0 00-2.77 0zm1.385 6a1.385 1.385 0 110-2.77 1.385 1.385 0 010 2.77zm12.23-6.837h-9V12.7h9v-1.538zm-9 4.615h9v1.539h-9v-1.539z"
        fill="#32324D"
      />
    </svg>
  );
}

export default SvgBulletList;
