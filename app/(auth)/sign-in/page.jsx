import React from 'react'
import "../../../styles/globals.css"
import NavigationBar from '@/components/navBar'

const Page = () => {
    return (
        <div className='w-[90%] h-full m-auto pt-5 sign-in-container'>
            <div className='w-full flex flex-col items-center'>
                <div className='w-full flex items-end'>
                    <NavigationBar />
                </div>
                <div className='pt-10'>
                    <div className='bg-red-500 w-110 h-150 flex items-center rounded-xs'>
                        <div className='w-90 h-[90%] m-auto bg-blue-500 flex flex-col gap-4'>
                            <form action="#" method="post" className='w-full flex flex-col gap-8 sign-in-form'>
                                <div>
                                    <h1 className='text-4xl font-semibold'>Sign In</h1>
                                </div>
                                <div className='flex flex-col justify-center gap-4'>
                                    <div>
                                        <input type="email" name="email-field" className='w-full h-12 outline-none border-gray-500 border-1 rounded-xs'/>
                                    </div>
                                    <div>
                                        <input type="password" name="password-field" className='w-full h-12 outline-none border-gray-500 border-1 rounded-xs' />
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='w-full'>   
                                            <button type="submit" className='w-full h-10 hover:cursor-pointer bg-green-800 outline-none border-none rounded-xs'>
                                                Sign in
                                            </button>
                                        </div>
                                        <div>
                                            <h1>OR</h1>
                                        </div>
                                        <div className='w-full'>
                                            <button className='bg-green-900 w-full h-10 hover:cursor-pointer outline-none border-none rounded-xs'>
                                                Use a sign-in code
                                            </button>
                                        </div>
                                        <div>
                                            <a href="#">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2 hover:cursor-pointer'>
                                        <input type="checkbox" name="remember-log-in" className='w-6 h-5' />
                                        <label htmlFor="remember-log-in">Remember me</label>
                                    </div>
                                </div>
                            </form>
                            
                            <div className='flex flex-col gap-4'>
                                <span>New to Netflix?<a href='#' className='font-bold'>Sign up now.</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page