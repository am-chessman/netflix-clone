import React from 'react'
import ScrollWrapper from '@/components/scrollWrapper'
import HomeNav from '@/components/homeNav'

const BrowseUI = () => {
    return (
        <div className='ml-10 mr-10'>
            <div className='h-[600px]'>
                <HomeNav/>
            </div>
            <div className='mb-6'>
                <div className='mb-2 mt-2 font-bold text-2xl'>
                    <p>Trending Now</p>
                </div>
                <ScrollWrapper/>
            </div>
            <div className='mb-6'>
                <div className='mb-2 mt-2 font-bold text-2xl'>
                    <p>Action</p>
                </div>
                <ScrollWrapper/>
            </div>
            <div className='mb-6'>
                <div className='mb-2 mt-2 font-bold text-2xl'>
                    <p>Tv-series</p>
                </div>
                <ScrollWrapper/>
            </div>
            <div className='mb-6'>
                <div className='mb-2 mt-2 font-bold text-2xl'>
                    <p>Thrillers</p>
                </div>
                <ScrollWrapper/>
            </div>
            <div>
                <div>
                    <p>Continue Watching</p>
                </div>
                <div>

                </div>
            </div>
            <div>
                <div>
                    <p>New Releases</p>
                </div>
                <div>

                </div>
            </div>
            <div>
                <div>
                    <p>Sci-Fi Movies</p>
                </div>
                <div>

                </div>
            </div>
            <div>
                <div>
                    <p>Action and Adventure</p>
                </div>
                <div>

                </div>
            </div>
            <div>
                <div>
                    <p></p>
                </div>
                <div>

                </div>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default BrowseUI