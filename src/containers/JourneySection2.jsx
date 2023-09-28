import React from 'react'
import small1 from './assets/journeysec1small.jpg'
import small2 from './assets/journeysec2small.jpg'
import bigImage from './assets/ctalandcape.jpg'
import WideBtn from '../components/wideBtn'
const JourneySection2 = () => {
    return (
        <>
        <div className='flex flex-col items-center gap-y-8 py-16 text-center cursor-default overflow-x-clip h-fit'>
                <div className='flex justify-between items-center flex-wrap h-fit'>
                    <div className='w-1/4 self-end order-first max-md:hidden'>
                        <img src={small1} alt="imageR" className='w-full h-full' data-aos='fade-right'/>
                    </div>
                    <div className='w-1/2 gap-y-16 flex px-16 flex-col max-md:h-fit  h-screen items-center max-sm:px-0 justify-center order-2 max-xl:order-first max-md:w-full'>
                        <div className=' flex flex-col gap-y-16 '>
                            <div className='flex justify-between md:hidden max-xl:h-96 '>
                                <div data-aos='fade-right' className=' max-md:w-[45%] max-md:h-[70%] overflow-hidden self-end flex items-center justify-center '>
                                    <img src={small1} alt="imageR" />
                                </div>
                                <div data-aos='fade-left' className='max-md:w-[45%] max-md:h-[70%] overflow-hidden self-start flex items-center justify-center'>
                                    <img src={small2} alt="imageL" />
                                </div>
                            </div>
                            <img src={bigImage} data-aos='fade-up' alt="wedding" className=' md:hidden' />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-y-16'>
                            <p className='max-sm:w-4/5 max-md:w-3/5 leading-snug text-4xl max-md:text-2xl font-light' data-aos='fade-up'>The <span className=' italic font-normal' data-aos='fade-up' data-aos-delay='100'>real</span> <span className=' font-normal' data-aos='fade-up' data-aos-delay='200'>MOMENTS</span> might fade away but you will <span className=' font-bold' data-aos='fade-up' data-aos-delay='300'>ALWAYS</span><br />  have the<span className='italic font-normal' data-aos='fade-up' data-aos-delay='400'> photographs</span>  to <span className=' font-bold' data-aos='fade-up' data-aos-delay='500'>REMIND you.</span></p>
                            <p className=' text-xs max-md:text-xs tracking-wider max-md:w-3/5 max-sm:4/5 leading-6' data-aos='fade-up'>We don’t just take pictures with a camera, we take it with our heart.</p>
                            <WideBtn text="LET'S WORK TOGETHER"/>
                        </div>
                    </div>
                    <div className=' w-1/4 self-start overflow-hidden order-last max-md:hidden'>
                        <img src={small2} alt="imageL" className='w-full h-full' data-aos='fade-left' />
                    </div>
                </div>
            </div>
        </>
        )
}

export default JourneySection2