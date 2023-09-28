import React from 'react'

const WideBtn = (props) => {
  return (
    <div>
        <button data-aos="fade-up" className=' text-sm border border-light-button-color py-4 px-16 text-center tracking-widest active:bg-light-button-color active:text-white duration-300 ease-in-out'>
            
            <p>{props.text}</p>
        </button>
    </div>
  )
}

export default WideBtn