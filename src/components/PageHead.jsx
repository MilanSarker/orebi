import React from 'react'

const PageHead = ({pageHead,className}) => {
  return (
    <h1
      className={`font-dm text-primaryColor uppercase text-5xl ${className} font-bold`}
    >
      {pageHead}
    </h1>
  );
}

export default PageHead