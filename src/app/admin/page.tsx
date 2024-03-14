"use client"

import { loginAction } from '@/actions/user'
import Input from '@/components/input/Input'
import React, { useState, ChangeEvent } from 'react'


const Page = () => {
  const [data, setData] = useState<{ [key: string]: string }>({}) 
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () =>{

  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-gradient-to-b from-secondary-300 to-secondary-500'>
      <form className='w-[80%] sm:w-1/2 max-w-[500px] flex flex-col' action={loginAction}>
        <Input type='email' placeholder='E-mail' id='email' label='E-mail' name='email' onChange={handleChange} />
        <Input type='password' placeholder='Password' id='password' label='Password' name='password' onChange={handleChange} />
        <button className="w-1/2 p-2 ml-2 rounded-lg bg-gradient-to-br from-primary-300 to-primary-500 hover:bg-gradient-to-tr hover:from-primary-500 hover:to-primary-300 hover:text-white dark:text-white transition-colors duration-300">Login now</button>
      </form>
    </div>
  )
}

export default Page
