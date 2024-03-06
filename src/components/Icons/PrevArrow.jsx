import React from 'react'
import PrevIcon from './PrevIcon';

const PrevArrow = (props) => {
     const { className, onClick } = props;
    

  return (
    <div
      className={`inline-block absolute top-1/2 left-3 z-10 -translate-y-1/2 ${className}`}
      onClick={onClick}
    >
      <PrevIcon />
    </div>
  );
}

export default PrevArrow
