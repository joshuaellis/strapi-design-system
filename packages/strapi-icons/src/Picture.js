import * as React from 'react';

function SvgPicture(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.094 16.62V7.308h11.812v9.312H6.094zM5 6.42a.22.22 0 01.219-.22H18.78c.121 0 .219.098.219.22v11.087a.22.22 0 01-.219.222H5.22A.22.22 0 015 17.507V6.42zm9.426 5.105a1.22 1.22 0 100-2.442 1.22 1.22 0 000 2.442zm-6.599 3.789h8.135a.349.349 0 00.29-.554l-1.122-1.524a.348.348 0 00-.525-.045l-1.153 1.098-2.676-3.634a.349.349 0 00-.573.016l-2.676 4.106a.348.348 0 00.3.537z"
        fill="#32324D"
      />
    </svg>
  );
}

export default SvgPicture;
