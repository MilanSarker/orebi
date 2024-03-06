import React from 'react'

const Subheading = ({className,pText}) => {
  return (
   <p className={`font-dm font-normal text-base ${className}`}>{pText}</p>
  )
}

export default Subheading