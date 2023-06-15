import React from 'react';

const ChipCard = ({ size = 2.3 }: { size?: number }) => (
  
  <svg width={`${size}em`} height="28" viewBox="0 0 80 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.2253 32.5713L19.7183 40.5713L27.6056 51.9999H45.6338L51.2676 41.7141L45.6338 32.5713H77.1831" stroke="#965FC1"/>
<rect width="80" height="72" rx="16" fill="#EAEAEA"/>
<rect x="25.2888" y="30.2139" width="28.2958" height="25.2857" rx="3.5" stroke="#965FC1"/>
<line x1="24.7888" y1="33.6426" x2="8.58307e-05" y2="33.6426" stroke="#965FC1"/>
<line x1="78.8733" y1="33.6426" x2="54.0846" y2="33.6426" stroke="#965FC1"/>
<line y1="-0.5" x2="16.0002" y2="-0.5" transform="matrix(0.00863756 -0.999963 0.999961 0.00888595 41.6902 72)" stroke="#965FC1"/>
<path d="M79.4365 55.4287L0.56328 55.4287" stroke="#965FC1"/>
</svg>

);

export default ChipCard;


