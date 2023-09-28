import React from "react";
import logo from './assets/logo512.png'

const Loading = (props) => {
    return (
      <div className="loading-container">
        <div className="loader">
        <div className=' relative w-28 h-28 logo'>
          <img src={logo} alt="logo" className='w-full h-full filter grayscale brightness-0' />
          <p>{props.title}</p>
        </div>
        </div>
      </div>
    );
  };

export default Loading