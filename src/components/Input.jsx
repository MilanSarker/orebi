import React from 'react'

const Input = ({inputType, className, placeHolder}) => {
  return (
   <input type={inputType} placeholder={placeHolder} className={`${className}`}/>
  )
}

export default Input