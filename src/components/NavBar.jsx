import React, { useEffect, useState } from 'react'
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri'
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from './assets/logo512.png'

const NavBar = () => {
    const [isSidebarShown,setisSidebarShown] = useState(false)
    useEffect(()=>{setisSidebarShown(false)},[])
    const bodyElement = document.body
    isSidebarShown === true ? bodyElement.style.overflow = 'hidden' : bodyElement.style.overflowY = 'scroll'
    const SideBar = () => {
        return(
                    <motion.div className=' h-screen w-full flex '
                    // key={111}
                    >
                        <motion.div className=' backdrop-blur-sm backdrop-brightness-50 flex w-full h-full' 
                          initial={{opacity:'0'}} 
                          animate={{opacity:'100%'}}
                          exit={{ opacity: '0' }}      
                        transition={{ ease: 'easeOut', duration: 0.3 }}
                        >
                            <button className='w-1/2 h-full max-md:w-1/4 cursor-pointer' onClick={()=>{setisSidebarShown(!isSidebarShown)}}>

                            </button>
                            <motion.div className=' w-1/2 max-md:w-3/4 h-full bg-neutral-50 text-light-button-color'
                            initial={{x:'100%'}} 
                            animate={{x:'0'}}
                            exit={{ x: '100%' }} // Animate off the screen // Animate off the screen
                            transition={{ ease: 'easeOut', duration: 0.3 }}
                            >
                                <div className=' text-sm flex flex-col items-center h-4/5 justify-between '>
                                    <div className='w-4/5'>
                                    <Link to='/' ><p className='sm:active:bg-light-button-color active:bg-light-button-color sm:hover:bg-neutral-200 active:text-white cursor-pointer hover:duration-200 hover:ease-in-out py-4 px-8 border-b '>HOME</p></Link> 
                                    <Link to='/gallery' ><p className='sm:active:bg-light-button-color active:bg-light-button-color sm:hover:bg-neutral-200 active:text-white cursor-pointer hover:duration-200 hover:ease-in-out py-4 px-8 border-b '>GALLERY</p></Link>
                                    <Link to='/our-team' ><p className='sm:active:bg-light-button-color active:bg-light-button-color sm:hover:bg-neutral-200 active:text-white cursor-pointer hover:duration-200 hover:ease-in-out py-4 px-8 border-b '>OUR TEAM</p></Link>
                                    <Link to='/about' ><p className='sm:active:bg-light-button-color active:bg-light-button-color sm:hover:bg-neutral-200 active:text-white cursor-pointer hover:duration-200 hover:ease-in-out py-4 px-8 border-b '>ABOUT</p></Link>
                                    <Link to='/contact' ><p className='sm:active:bg-light-button-color active:bg-light-button-color sm:hover:bg-neutral-200 active:text-white cursor-pointer hover:duration-200 hover:ease-in-out py-4 px-8 border-b '>CONTACT</p></Link>
                                    </div>
                                    <div className='w-4/5 text-sm'>
                                        <p>@2023 Ndah Studios</p>
                                        <p>Suite 17, 1st Floor, Hilltop Plaza, By Elitor Junction,<br /> Trans Woji Elelenwo Road, Port Harcourt, Rivers, Nigeria,</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>       
                    </motion.div>
        )
    }
    return (
        <>
        <div className='sticky top-0 z-10'>
            <div className='px-16 top-0 z-10 bg-white max items-center flex justify-between h-24 max-md:px-8 max-md:justify-between max-lg:justify-between gap-x-8'>
                <div className='flex items-center gap-x-8 '>
                    <div className=''>
                        <img src={logo} alt="logo" className='filter grayscale brightness-0 w-24 h-24 max-sm:w-16 max-sm:h-16' />
                    </div>
                    <div className='flex tracking-wider gap-x-8 max-md:text-sm max-md:hidden max-lg:hidden'>
                        <Link className='sm:active:bg-light-button-color p-2 active:bg-light-button-color sm:hover:bg-neutral-200 active:text-white cursor-pointer hover:duration-200 hover:ease-in-out' to='/'>HOME</Link>
                        <Link className='sm:active:bg-light-button-color p-2 active:bg-light-button-color sm:hover:bg-neutral-200 active:text-white cursor-pointer hover:duration-200 hover:ease-in-out' to='/gallery'>GALLERY</Link>
                        <Link className='sm:active:bg-light-button-color p-2 active:bg-light-button-color sm:hover:bg-neutral-200 active:text-white cursor-pointer hover:duration-200 hover:ease-in-out' to='/our-team'>OUR TEAM</Link>
                        <Link className='sm:active:bg-light-button-color p-2 active:bg-light-button-color sm:hover:bg-neutral-200 active:text-white cursor-pointer hover:duration-200 hover:ease-in-out' to='/about'>ABOUT</Link>
                        <Link className='sm:active:bg-light-button-color p-2 active:bg-light-button-color sm:hover:bg-neutral-200 active:text-white cursor-pointer hover:duration-200 hover:ease-in-out' to='/contact'>CONTACT</Link>
                    </div>
                </div>
                {
                    isSidebarShown === false? <button className='sm:active:bg-light-button-color p-2 active:bg-light-button-color sm:hover:bg-neutral-200 active:text-white text-3xl text-light cursor-pointer hover:duration-200 hover:ease-in-out' onClick={()=>{setisSidebarShown((previsSideBarShown)=>true)}}>
                    <RiMenu3Fill className='' />
                </button>:<button className='sm:active:bg-white p-2 active:bg-white bg-light-button-color text-white  active:text-light hover:text-light sm:hover:bg-neutral-300 text-3xl  cursor-pointer hover:duration-200 hover:ease-in-out' onClick={()=>{setisSidebarShown((previsSideBarShown)=>false)}}>
                    <RiCloseFill/>
                </button>
                }
                
            </div>
            <div className='h-[1px] w-full'>
                <AnimatePresence>
                    {isSidebarShown && <SideBar/>}
                </AnimatePresence>
            </div>
        </div>
        </>
    )
}

export default NavBar