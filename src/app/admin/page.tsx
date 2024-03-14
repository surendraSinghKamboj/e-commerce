

import Input from '@/components/input/Input'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-b from-secondary-300 to-secondary-500'>
        <div className='w-[80%] sm:w-1/2 max-w-[500px] flex flex-col'>
               <Input type='email' placeholder='E-mail' id='email' label='E-mail' name='email' />
               <Input type='password' placeholder='Password' id='password' label='Password' name='password' />
               <button className="w-1/2 p-2 ml-2 rounded-lg bg-gradient-to-br from-primary-300 to-primary-500 hover:bg-gradient-to-tr hover:from-primary-500 hover:to-primary-300 hover:text-white dark:text-white transition-colors duration-300">Login now</button>
        </div>
    </div>
  )
}

export default page