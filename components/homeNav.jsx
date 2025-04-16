import React from 'react'

const HomeNav = () => {
    return (
        <div className="mt-5 flex justify-between items-center movie-overlay">
            <div className='absolute right-[40px] top-[200px] w-[556px]'>
                <div>
                    <h1 className='uppercase m-0 text-6xl movie-name'>A quiet place: day one</h1>
                </div>

                <div>
                    <article className='pt-5'>
                        Sam återvänder till New York blir hennes resa till en mardröm när mystiska varelser som jagar genom ljud anfaller. Med sin katt och en oväntad allierad måste hon ge sig ut på en farlig resa där den enda regeln är att vara tyst för att överleva.
                    </article>
                </div>
                <div className='pt-4'>
                    <div>
                        <p className='text-[17px]'>2024 / Skräck-Sci-Fi / 1h40m</p>
                    </div>
                </div>
                <div className='pt-4 flex items-center gap-3 text-lg'>
                    <button className='hover:cursor-pointer'>
                        <i class="bi bi-play-circle-fill text-5xl text-red-600"></i>
                    </button>
                    <p>Watch</p>
                </div>
            </div>
            <div>
                <img src="netflux.png" className='w-40' alt="" />
            </div>
            <div className='flex justify-between items-center gap-8'>
                <div>
                    <a href='#' className=''>Home</a>
                </div>  
                <div>
                    <a href='#' className=''>Movies</a>
                </div>
                <div>
                    <a href='#' className=''>Series</a>
                </div>  
                <div>
                    <a href='#' className=''>Cartoons</a>
                </div>          
                <div>
                    Search Icon
                    {/* <form action="#" method="get">
                        <input type="text" name="" id="" />
                    </form>     */}
                </div>          
                <div>
                    Account Image
                </div>          
            </div>
        </div>
    )
}

export default HomeNav