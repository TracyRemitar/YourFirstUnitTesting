import React from 'react'

const Input = ({id, label, ...props}) => {
  return (
    <div className='flex flex-col'>
        <label label="Test Label" htmlFor={id} className='text-lg'>{label}</label>
        <input id={id} {...props} className='border text-lg p-1 rounded-lg' />
    </div>
  )
}

export default Input