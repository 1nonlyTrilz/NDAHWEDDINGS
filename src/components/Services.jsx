import React from 'react'

const Services = (props) => {
  return (
    <>
      <div className='tracking-wider max-sm:w-5/5 flex flex-col items-start justify-center h-fit w-96 gap-4'>
        <img src={props.source} alt="Imagesss" className='h-64' />
        <div className='flex flex-col pb-8 '>
          <p className='  text-2xl pb-2 border-b w-fit font-light'  >{props.title}</p>
          <p className=' text-xs leading-6 pt-2 '>{props.content}</p>
        </div>
      </div>
    </>
  )
}

export default Services