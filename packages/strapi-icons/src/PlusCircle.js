import * as React from 'react';

function SvgPlusCircle(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={12} cy={12} r={12} fill="#212134" />
      <path
        d="M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 01-.226-.225v-3.981H7.226A.225.225 0 017 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138z"
        fill="#F6F6F9"
      />
    </svg>
  );
}

export default SvgPlusCircle;
