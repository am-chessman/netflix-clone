import React from 'react'
import "../styles/globals.css"

const Footer = () => {
    return (
        <div className='w-full bg-[rgb(22,22,22)]'>
            <div className='m-auto sm:ml-38 pt-20 pb-20'>
                <div>
                    <div className='text-[#b6b6b6]'>Frågor? Ring 0201 604 327 (avgiftsfritt)</div>
                    <div className='grid grid-cols-4 justify-between gap-y-4 pt-5'>
                        <div>
                            <a href="#" className='underline text-[15px] text-[#b6b6b6]'>Vanliga frågor</a>
                        </div>
                        <div>
                            <a href="#" className='underline text-[15px] text-[#b6b6b6]'>Hjälpcenter</a>
                        </div>
                        <div>
                            <a href="#" className='underline text-[15px] text-[#b6b6b6] '>Användarvillkor</a>
                        </div>
                        <div>
                            <a href="#" className='underline text-[15px] text-[#b6b6b6]'>Sekretess</a>
                        </div>
                        <div>
                            <a href="#" className='underline text-[15px] text-[#b6b6b6]'>Cookie-inställningar</a>
                        </div>
                        <div>
                            <a href="#" className='underline text-[15px] text-[#b6b6b6]'>Företagsinformation</a>
                        </div>
                        <div>
                            <a href="#" className='underline text-[15px] text-[#b6b6b6]'>Reklaminställningar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer