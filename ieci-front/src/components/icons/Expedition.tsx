import React from 'react';

const Expedition = ({ size = 2.3 }: { size?: number }) => (

  <svg width={`${size}em`} height="28" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 0C1.355 0 0 1.355 0 3V17C0 18.645 1.355 20 3 20H25C26.645 20 28 18.645 28 17V3C28 1.355 26.645 0 25 0H3ZM3 2H25C25.566 2 26 2.434 26 3V17C26 17.566 25.566 18 25 18H3C2.434 18 2 17.566 2 17V3C2 2.434 2.434 2 3 2ZM5 5V7H24V5H5ZM5 9V11H24V9H5ZM5 13V15H21V13H5Z" fill="currentColor"/>
  </svg>

);

export default Expedition;


