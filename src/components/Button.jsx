import React from 'react'

const Button = ({btnText, className}) => {
  return (
   <button className={`py-5 px-20 bg-black text-white font-dm ${className}`}>{btnText}</button>
  )
}

export default Button