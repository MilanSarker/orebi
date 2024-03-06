import React from 'react'

const Color = ({ className }) => {
  return (
    <ul>
      <li
        className={`w-[50px] h-[50px] rounded-full hover:w-[60px] hover:h-[60px] transition-all ${className}`}
      ></li>
    </ul>
  );
};

export default Color