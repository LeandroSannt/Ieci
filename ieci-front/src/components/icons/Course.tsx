import React from 'react';

const Course = ({ size = 2.3 }: { size?: number }) => (
<svg width={`${size}em`} height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.8 1.18667 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8133 0 21.3333 0ZM21.3333 21.3333H2.66667V5.33333H21.3333V21.3333ZM18.6667 12H5.33333V9.33333H18.6667V12ZM13.3333 17.3333H5.33333V14.6667H13.3333V17.3333Z" fill="#C69EEE"/>
</svg>

);

export default Course;


