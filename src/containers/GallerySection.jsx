import React from 'react'
import thumb1 from './thumbs/PeaceMisanThumb.jpg'
import thumb2 from './thumbs/JessicaBrightThumb.jpg'
import thumb3 from './thumbs/ChiomaMazuriThumb.jpg'
import { Link } from 'react-router-dom'

const thumbnails = [
  {thumbnail:thumb1,title:'Church Wedding at the Word Assembly Church',couple:'Peace & Misan',path:'/gallery/peace-missan-wedding'},
  {thumbnail:thumb2,title:'White Wedding at Trans Amadi',couple:'Jessica & Bright',path:'/gallery/jessica-bright-wedding'},
  {thumbnail:thumb3,title:'Pre-wedding Photos of the Lovely Couple',couple:'Chioma & Mazuri',path:'/gallery/chioma-marizu-wedding'}
]

const Thumbcard = ({title,couple,source,path}) => {
  return (
    <Link to={path} className='max-sm:w-full w-64 h-fit py-8 flex items-center flex-col gap-y-4 cursor-pointer md:hover:-translate-y-4 duration-200 ease-in-out group'>
                        <div className='w-full h-96 overflow-hidden'>
                            <img src={source} alt="Peace and Missan" className='w-full h-full object-cover group-hover:scale-110 duration-200 ease-in-out' />
                        </div>
                        <div className='text-center text-lg  tracking-wider font-light flex-col flex gap-y-1 '>
                            <p>{title}</p>
                            <p className=''>{couple}</p>
                        </div>
                    </Link>
  )
}
const GallerySection = () => {
  return (
    <>
        <div className=' h-fit py-12'>
            <div className='sm:mx-16 px-4 sm:px-16 lg:px-16'>
                <div className='flex justify-center gap-16 flex-wrap'>
                  {
                    thumbnails.map((thumb)=>{
                      return (
                        <Thumbcard source={thumb.thumbnail} title={thumb.title} couple={thumb.couple} path={thumb.path}/>
                      )
                    })
                  }
                </div>
            </div>
        </div>
    </>
  )
}

export default GallerySection