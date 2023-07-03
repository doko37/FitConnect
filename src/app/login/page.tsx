'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import './page.css'

export default function Login() {
  const [forgotPassword, setForgotPassword] = useState(false)

  return (
    <div className='text-md max-ty:text-sm'>
    <main id="default" className={"w-[400px] max-sm:w-auto max-sm:mx-2 h-fit rounded bg-black/25 p-1 px-3 gap-1 transition ease-in-out delay-150 mx-auto " + (forgotPassword ? 'hidden' : 'block')}>
      <form className="grid grid-cols-[3fr_1fr] gap-1">
        <div>
          <label>Username: <input type="text" name="username"/></label>
          <label>Password: <input type="password" name="password"/></label>
        </div>
        <button className='bg-black/10 hover:bg-black/20 m-2 mr-0 rounded-md'>Login</button>
      </form>
      <div className='text-end'>
        <p className='text-sm my-1 no-underline hover:underline'>
          <button onClick={() => setForgotPassword(true)} className='no-underline hover:underline max-sm:text-sm'>Forgot your password?</button>
        </p>
        <p className='text-sm my-1 no-underline hover:underline'>
          <Link href="/">Back to home page</Link>
        </p>
      </div>
    </main>
    <main id="forgotPassword" className={"w-[400px] max-sm:w-auto h-fit m-auto max-sm:mx-2 rounded bg-black/25 p-2 px-3 gap-1 " + (forgotPassword ? 'block' : 'hidden')}>
      <h4 className='text-start text-sm py-[4px]'>Forgot your password? Please enter your email below and we'll send you a recovery code:</h4>
      <form className="flex justify-between items-center ml-0">
        <div>
          <label>Email: <input type="email" name="username"/></label>
        </div>
        <button className='bg-black/10 hover:bg-black/20 px-6 py-[2px] rounded-md'>Send</button>
      </form>
      <div className='text-end'>
        <p className='text-sm my-1 no-underline hover:underline'>
          <button onClick={() => setForgotPassword(false)} className='no-underline hover:underline'>Back</button>
        </p>
      </div>
    </main>
    </div>
  )
}
