import React from 'react'
import { Link } from 'react-router-dom'

const List = ({menuName,className}) => {
  return (
  
    <li className={`font-dm text-sm text-menuColor hover:text-primaryColor hover:font-bold ${className}`}>{menuName}</li>
  
  )
}

export default List