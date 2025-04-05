import React from "react"
import "../../../styles/globals.css"
import NavigationBar from '@/components/nav'
import Footer from '@/components/footer'

const Page = () => {
    return (
        <>
            <div className='w-full flex items-end ml-38 pt-5 relative z-10'>
                <NavigationBar />
            </div>
            <div className="cover-bg-wrapper scale-150 before:block before:bg-black before:h-full before:opacity-40 absolute">
            </div>
                <div className="w-[95%] m-auto relative">
                    <div className='w-full flex flex-col items-center'>
                        <div className='bg-none w-110 h-150 relative pt-5 rounded-xs z-0 before:block before:absolute before:h-full before:bg-black before:w-full before:opacity-75 before:-z-10'>
                            <div className='w-80 h-[90%] m-auto flex flex-col gap-4 pt-10'>
                                <form action="#" method="post" className='w-full flex flex-col gap-8 sign-in-form'>
                                    <div>
                                        <h1 className='text-3xl font-bold font-sans'>Logga in</h1>
                                    </div>
                                    <div className='flex flex-col justify-center gap-4'>
                                        <div>
                                            <input type="email" name="email-field" className='w-full h-13 outline-none border-gray-500 border-1 rounded-sm pl-3 pr-3' placeholder='E-post eller mobilnummer'/>
                                        </div>
                                        <div>
                                            <input type="password" name="password-field" className='w-full h-13 outline-none border-gray-500 border-1 rounded-sm pl-3 pr-3' placeholder='Lösenord'/>
                                        </div>
                                        <div className='flex flex-col items-center gap-4'>
                                            <div className='w-full'>   
                                                <button type="submit" className='font-semibold w-full h-10 hover:cursor-pointer bg-[rgb(299,9,20,1)] outline-none border-none rounded-sm'>
                                                    Logga in
                                                </button>
                                            </div>
                                            <div>
                                                <h1 className='uppercase text-[#cdcdcd]'>Eller</h1>
                                            </div>
                                            <div className='w-full'>
                                                <button className='bg-[#80808066] font-semibold w-full h-10 hover:cursor-pointer outline-none border-none rounded-xs'>
                                                    Använd en inloggningskod
                                                </button>
                                            </div>
                                            <div>
                                                <a href="#" className='forgotten-pass'>Glömt lösenordet?</a>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-2 hover:cursor-pointer'>
                                            <input type="checkbox" name="remember-log-in" className='w-6 h-5' />
                                            <label htmlFor="remember-log-in">Kom ihåg mig</label>
                                        </div>
                                    </div>
                                </form>
                                
                                <div>
                                    <span className='text-[#cdcdcd]'>Ny på Netflix?</span><a href='#' className='font-bold'>Registrera dig nu.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="relative z-10 mt-20">
                <Footer />
            </div>
        </>
    )
}

export default Page