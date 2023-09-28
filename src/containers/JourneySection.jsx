import React from 'react'
import bigImage from './assets/journeysectionbig.jpg'
import smallImage1 from './assets/smallimage1.jpg'
import smallImage2 from './assets/smallImage2.jpg'
import WideBtn from '../components/wideBtn'
import butterfly from './assets/wedding-cake-svgrepo-com.svg'
import { Link } from 'react-router-dom'

const JourneySection = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-y-8 py-16 text-center cursor-default overflow-x-clip text-black '>
                <div className='text-xs tracking-widest gap-y-8 flex flex-col max-md:mx-16' >
                    <p data-aos='fade-up'>WEDDING PHOTOGRAPHY TEAM</p>
                    <p data-aos='fade-up' className='text-4xl w-full mx-auto max-md:text-2xl leading-snug font-light tracking-wider'>Capturing the <span data-aos='fade-up'data-aos-delay='400' className=' italic font-normal'>moments</span><br />
                        that <span data-aos='fade-up' data-aos-delay='500' className='italic font-normal'>really </span><span data-aos-delay='600' data-aos='fade-up' className='font-bold'>MATTER.</span></p>
                </div>
                <div className='flex justify-between flex-wrap'>
                    <div data-aos="fade-right" className='w-1/5 self-end order-first max-xl:order-2 max-xl:w-1/2 max-xl:hidden'>
                        
                        <img src={smallImage1} alt="imageR" />
                    </div>
                    <div className='w-1/2 gap-y-8 flex flex-col order-2 max-xl:order-first max-xl:w-full'>
                        <div className=' flex flex-col gap-y-8 max-xl:px-32 max-md:w-3/5 max-sm:w-3/4 max-md:px-0 mx-auto'>
                            <div className='bg-light-button-color h-[1px] max-xl:w-1/4 max-sm:w-1/2 w-1/4 mx-auto' data-aos='fade-up'></div>
                            <p data-aos='fade-up' className=' text-xs leading-6 tracking-wider'>Our approach to documenting life’s greatest memories is authentic and intentional. We believe that best photos are created the way you fall in love – naturally. Let us take you on this journey and guide you through every step of the way.</p>
                        </div>
                        <div className='pb-8 flex flex-col gap-y-16'>
                            <div className='flex justify-between xl:hidden max-xl:h-fit'>
                                <div data-aos="fade-right" className=' max-xl:w-[45%] max-xl:h-[70%] overflow-hidden self-end flex items-center justify-center '>
                                    <img src={smallImage1} alt="imageR" />
                                </div>
                                <div data-aos="fade-left" className='max-xl:w-[45%] max-xl:h-[70%] overflow-hidden self-start flex items-center justify-center'>
                                    <img src={smallImage2} alt="imageL" />
                                </div>
                            </div>
                            <img data-aos='fade-up' src={bigImage} alt="wedding" />
                        </div>
                        <div  className='flex-row gap-y-2 max-xl:flex-col flex justify-between items-center w-full'>
                            <div className='text-left flex flex-col gap-y-2'>
                                <h1 data-aos="fade-up" className='text-2xl font-light'>Featured Work</h1>
                                <p data-aos="fade-up" className='text-xs tracking-wide'>Some of our favourite love stories</p>
                            </div>
                            <Link to='/gallery'>
                                <WideBtn text="VIEW PORTFOLIO"/>
                            </Link>
                        </div>
                    </div>
                    <div data-aos="fade-left" className=' w-1/5 self-start order-last max-xl:order-last max-xl:hidden'>
                        <img src={smallImage2} alt="imageL"  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default JourneySection