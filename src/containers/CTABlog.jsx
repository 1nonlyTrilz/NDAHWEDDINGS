import React from 'react'
import landscape from './assets/ctalandcape.jpg'
import portrait from './assets/ctapotrait.jpg'
import WideBtn from '../components/wideBtn'
const CTABlog = () => {
    return (
        <>
            <div className='flex justify-between py-16 flex-wrap max-lg:flex-col gap-y-16 cursor-default overflow-x-clip'>
                <div className='w-1/2 flex flex-col justify-center items-center gap-y-8 max-lg:w-full'>
                    <div className='w-3/4 max-lg:w-full'>
                        <img src={portrait} alt=""  data-aos={window.innerWidth > 1024 ? `fade-right`:`fade-up`} />
                    </div>
                    <div className='w-3/4 text-center flex flex-col gap-y-2 tracking-wider'>
                        <p data-aos={window.innerWidth > 1024 ? `fade-right`:`fade-up`}>GET INSPIRED</p>
                        <h1 data-aos={window.innerWidth > 1024 ? `fade-right`:`fade-up`} className='text-4xl max-lg:text-2xl'>The Ndah Studio Blog</h1>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col justify-end items-center gap-y-8 max-lg:w-full '>
                    <div className='w-3/4 max-lg:w-full '>
                        <img src={landscape } alt="wedding box"   data-aos={window.innerWidth > 1024 ? 'fade-left':`fade-up`}/>
                    </div>
                    <div className='w-3/5 max-sm:w-3/4 text-center flex flex-col gap-y-8 tracking-wider'>
                        <p  data-aos={window.innerWidth > 1024 ? 'fade-left':`fade-up`}>BROWSE OUR BLOG</p>
                        <h1   data-aos={window.innerWidth > 1024 ? 'fade-left':`fade-up`} className='text-4xl max-lg:text-2xl'>The Memory Box</h1>
                        <p   data-aos={window.innerWidth > 1024 ? 'fade-left':`fade-up`} className=' text-xs leading-5'>Your wedding is one of the most special and amazing days of your life… you finally get to celebrate spending forever ever after with your best friend, surrounded by your loving family and amazing friends!</p>
                    </div>
                    <WideBtn text="READ OUR BLOG"/>
                </div>
            </div>
        </>
    )
}

export default CTABlog