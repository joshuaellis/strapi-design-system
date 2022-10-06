import * as React from 'react';

function SvgRichText(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x={0.5} y={0.5} width={31} height={23} rx={2.5} fill="#EAF5FF" stroke="#B8E1FF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.286 9.286v-.857a.397.397 0 00-.138-.302A.465.465 0 0018.82 8h-8.357a.465.465 0 00-.326.127.397.397 0 00-.138.302v.857c0 .116.046.216.138.301.092.085.2.127.326.127h8.357a.465.465 0 00.327-.127.397.397 0 00.138-.301zm2.785 2.713v.857a.397.397 0 01-.137.301.465.465 0 01-.327.128H10.464a.465.465 0 01-.326-.128.397.397 0 01-.138-.301v-.857c0-.116.046-.217.138-.302a.465.465 0 01.326-.127h11.143c.126 0 .235.043.327.127a.397.397 0 01.137.302zm-1.857 3.574v.857a.397.397 0 01-.137.302.465.465 0 01-.327.127h-9.286a.465.465 0 01-.326-.127.397.397 0 01-.138-.302v-.857c0-.116.046-.216.138-.301a.465.465 0 01.326-.127h9.286c.126 0 .235.042.326.127a.397.397 0 01.138.301z"
        fill="#0C75AF"
      />
    </svg>
  );
}

export default SvgRichText;
