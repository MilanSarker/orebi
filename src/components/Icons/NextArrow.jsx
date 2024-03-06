import React from "react";
import NextIcon from "./NextIcon";


const NextArrow = (props) => {
  const { className, onClick } = props;

  return (
    <div
      className={`inline-block absolute top-1/2 right-3 -translate-y-1/2 ${className}`}
      onClick={onClick}
    >
      <NextIcon />
    </div>
  );
};

export default NextArrow;
