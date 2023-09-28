import React from 'react'
import { RiFacebookFill, RiInstagramFill, RiPinterestFill, RiTwitterFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
            <>
            <div className='flex cursor-default py-16 bg-neutral-50 text-light-button-color justify-between px-16 flex-wrap gap-y-16 text-sm leading-6 gap-x-16'>
                <div className='flex flex-col justify-start gap-y-4 '>
                    <div className='flex tracking-wider gap-x-8'>
                        <Link to='/'>HOME</Link>
                        <Link to='/gallery'>GALLERY</Link>
                        <Link to='/our-team'>OUR TEAM</Link>
                        <Link to='/about'>ABOUT</Link>
                        <Link to='/#'>BLOG</Link>
                    </div>
                    <div className='flex text-2xl gap-x-8'>
                        <RiFacebookFill/>
                        <RiInstagramFill/>
                        <RiPinterestFill/>
                        <RiTwitterFill/>
                    </div>
                </div>
                <div className='flex flex-col  items-start' >
                    <p>@2023 Ndah Studios</p>
                    <p>Suite 17, 1st Floor, Hilltop Plaza, By Elitor Junction,<br /> Trans Woji Elelenwo Road, Port Harcourt, Rivers, Nigeria,</p>
                </div>
            </div>
            </>
        )
}

export default Footer