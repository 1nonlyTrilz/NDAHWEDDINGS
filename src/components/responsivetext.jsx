import React from 'react'

const Responsivetext = (props) => {
    return (
        <>
            <div data-aos="fade-left" className=' flex flex-col max-xl:px-16 max-md:w-1/2 max-sm:w-3/4 max-md:px-0 mx-auto'>
                <p className=' leading-6 text-xs tracking-wider'>{props.text}</p>
            </div>
        </>
    )
}

export default Responsivetext