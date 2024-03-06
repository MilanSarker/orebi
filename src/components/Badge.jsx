import React from 'react'

const Badge = ({badgeText,className}) => {
  return (
    <button className={`py-3 px-8  bg-black text-white font-dm font-bold ${className}`}>{badgeText}</button>
  )
}

export default Badge