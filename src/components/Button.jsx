import React from 'react'

const Button = ({ text, onClick, disabled = true }) => {
  return (
    <button onClick={onClick} disabled={disabled} className='bg-blue-500 p-2 font-bold rounded-lg text-white mt-2 disabled:bg-blue-500/20'>{text}</button>
  )
}

export default Button