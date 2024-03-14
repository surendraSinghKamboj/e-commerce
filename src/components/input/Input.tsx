

import React from 'react'

interface InputProps{
    type:string,
    placeholder:string,
    id:string,
    label:string,
    name:string
}

const Input:React.FC<InputProps> = ({type,placeholder,id,label,name}) => {
  return (
    <div className='w-full my-2 p-2 grid grid-cols-12'>
        <label htmlFor={id} className='col-span-4 mt-2'>{label} :</label>
        <input className='col-span-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id={id} type={type} placeholder={placeholder} name={name} />
    </div>
  )
}


export default Input