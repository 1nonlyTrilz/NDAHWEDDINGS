import React from 'react'

const OurStory = () => {
    return (
        <>
            <div className='bg-image-story bg-cover bg-right-top h-fit cursor-default tracking-wider overflow-x-clip'>
                <div className=' flex max-xl:flex-col justify-end items-center max-md:h-1/2 h-screen backdrop-brightness-50 tracking-wider  text-white'>
                    <div className='w-1/2 max-md:w-full max-xl:w-2/4 max-md:hidden' >
                    </div>
                    <div className='w-1/2 max-md:w-full max-xl:w-2/4 flex justify-center py-16'>
                        <div className='flex flex-col items-center gap-y-8 text-center w-1/2 max-sm:w-3/4'>
                            <div>
                                <p className='text-sm'>MEET THE TEAM</p>
                            </div>
                            <div>
                                <p className=' text-4xl max-md:text-2xl'>OUR STORY</p>
                            </div>
                            <div className='bg-light-button-color h-[1px] max-xl:w-1/4  w-1/4 mx-auto'></div>
                            <div>
                                <p className=' text-xs leading-6 tracking-wider'>
                                    For the last decade, we’ve had a privilege of documenting unique love stories all over the world and it has been the most meaningful work we could have ever dreamt of.
                                </p>
                            </div>
                            <div>
                                <p>READ MORE</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OurStory