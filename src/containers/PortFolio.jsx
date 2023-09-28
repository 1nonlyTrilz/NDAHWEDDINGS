import React from 'react'
import ImageCarousel from '../components/ImageSlider'
import { Link } from 'react-router-dom'
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./portfolioslider', false, /\.(png|jpe?g|svg)$/));

const PortFolio = () => {
    return (
        <>
            <div className='flex flex-col tracking-wider py-16 cursor-default overflow-x-clip '>
                <div className=' self-center text-center flex flex-col gap-y-4 font-light'>
                    <p>SIGNATURE WORK</p>
                    <p className='text-4xl max-md:text-2xl'>OUR PORTFOLIO</p>
                </div>
                <ImageCarousel images={images} />
                <div className='self-center text-center'>
                    <Link className='sm:active:bg-light-button-color p-2 active:bg-light-button-color sm:hover:bg-neutral-200 active:text-white cursor-pointer hover:duration-200 hover:ease-in-out' to='/gallery'>VIEW PORTFOLIO</Link>
                </div>
            </div>
        </>
    )
}

export default PortFolio