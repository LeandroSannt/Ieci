import React from 'react';

const Cart = ({ size = 2.3 }: { size?: number }) => (
  <svg width={`${size}em`} height="28" viewBox="0 0 54 43" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M48 0H5.33333C2.37333 0 0.0266666 2.37333 0.0266666 5.33333L0 37.3333C0 40.2933 2.37333 42.6667 5.33333 42.6667H48C50.96 42.6667 53.3333 40.2933 53.3333 37.3333V5.33333C53.3333 2.37333 50.96 0 48 0ZM48 37.3333H5.33333V21.3333H48V37.3333ZM48 10.6667H5.33333V5.33333H48V10.6667Z" fill="currentColor"/>
  </svg>
);

export default Cart;


