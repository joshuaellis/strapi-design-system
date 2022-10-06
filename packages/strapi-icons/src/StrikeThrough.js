import * as React from 'react';

function SvgStrikeThrough(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.41 6.655c.38.054.654.109.817.218.218.109.328.218.437.327.109.164.163.436.218.655l.436 1.963h1.091V6H6.827L6.5 9.818h.982l.545-2.182c.055-.218.164-.436.218-.545.11-.11.273-.218.491-.327.219-.055.491-.164.873-.164.327 0 .764-.055 1.31-.055v4.91H6.554v1.09h4.363v4.146c0 .109.055.164-.054.218-.11.055-.219.11-.491.11l-1.146.217-.054.764h5.563l-.054-.764-1.146-.163c-.272 0-.381-.055-.436-.11-.11-.054-.054-.108-.054-.218v-4.2h4.363v-1.09h-4.363v-4.91c.545 0 1.036.055 1.363.11z"
        fill="#32324D"
      />
    </svg>
  );
}

export default SvgStrikeThrough;
