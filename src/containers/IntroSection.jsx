import React from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import WideBtn from '../components/wideBtn'
import { Link } from 'react-router-dom'
const IntroSection = () => {
    return (
        <>
            <div className=" bg-image bg-cover min-h-screen bg-left max-lg:bg-right cursor-default overflow-x-clip">
                {/* <div className=' text-4xl'>
                    <RiArrowDownSLine /
                </div> */}
                <div className=' backdrop-brightness-50 min-h-screen justify-between items-center text-white flex text-center py-8 px-16 max-md:justify-center max-md:px-4'>
                    <div className='w-1/6 max-md:hidden'>
                    
                    </div>
                    <div className='w-1/2 flex flex-col items-center text-center justify-center max-md:w-full'>
                        <div className=' text-3xl flex pb-4 tracking-wider'>
                            <div>Ndah Studios</div>
                        </div>
                        <div className='flex flex-col py-16 items-center justify-center'>
                            <p className='text-xs tracking-wider'>PORTHARCOURT WEDDING PHOTOGRAPHY</p>
                            <p className='text-4xl py-8 w-2/4 max-sm:text-2xl max-md:w-2/4 leading-snug tracking-wider font-light'> <span className=' italic font-normal'>Preserving </span>life's most <span className=' font-normal'>IMPORTANT </span> days, one story at <span className=' font-bold'>A TIME.</span></p>
                        </div>
                        <Link to='/pricing'>
                            <WideBtn text="READY TO TELL YOURS"/>
                        </Link>
                    </div>
                    <div className='w-1/6 text-3xl text-light flex justify-end cursor-pointer max-md:hidden'>
                    </div>
                </div>
            </div >
        </>
    )
}

export default IntroSection