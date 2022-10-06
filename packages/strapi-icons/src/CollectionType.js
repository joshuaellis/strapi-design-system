import * as React from 'react';

function SvgCollectionType(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0.5} y={0.5} width={31} height={23} rx={2.5} fill="#4945FF" stroke="#4945FF" />
      <path
        d="M15.328 10.54h1.723c.012-.089.012-.165.012-.253 0-1.676-1.471-2.959-3.41-2.959-2.696 0-4.647 2.22-4.647 5.344 0 2.15 1.383 3.545 3.504 3.545 2.045 0 3.597-1.154 3.967-2.936h-1.752c-.276.826-1.102 1.371-2.063 1.371-1.137 0-1.846-.802-1.846-2.103 0-2.08 1.19-3.65 2.725-3.65 1.037 0 1.746.62 1.787 1.558v.082zM21.053 16l1.488-6.943h2.531l.31-1.512H18.54l-.31 1.512h2.53L19.272 16h1.782z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgCollectionType;
