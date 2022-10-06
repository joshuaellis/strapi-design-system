import * as React from 'react';

function SvgPassword(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M.5 3A2.5 2.5 0 013 .5h26A2.5 2.5 0 0131.5 3v18a2.5 2.5 0 01-2.5 2.5H3A2.5 2.5 0 01.5 21V3z"
        fill="#FDF4DC"
        stroke="#FAE7B9"
      />
      <path
        d="M20.158 11.995c0-.591-.463-1.073-1.045-1.11H13.53V9.245a2.05 2.05 0 012.046-2.049c1.13 0 2.048.784 2.049 1.913 0 .24.194.433.433.433h.33a.433.433 0 00.433-.433C18.82 7.32 17.365 5.999 15.577 6a3.246 3.246 0 00-3.241 3.244v1.642h-.223c-.615 0-1.113.499-1.113 1.114v4.887c.001.615.5 1.113 1.115 1.113l6.93-.003c.616 0 1.114-.5 1.114-1.115l-.001-4.887z"
        fill="#D9822F"
      />
    </svg>
  );
}

export default SvgPassword;
