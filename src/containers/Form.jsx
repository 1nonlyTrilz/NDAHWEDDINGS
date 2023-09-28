import React, { useEffect, useState } from 'react'
import WideBtn from '../components/wideBtn'
import axios from 'axios';

const Form = () => {
    const [fullname ,setFullName] = useState('')
    const [date ,setDate] = useState('')
    const [email ,setEmail] = useState('')
    const [phone ,setPhone] = useState('')
    const [ceremony ,setCeremony] = useState('')
    const [hearabout ,setHearAbout] = useState('')
    const [excited ,setExcited] = useState('')
    const [adInfo ,setAdInfo] = useState('')
    const [message,setMessage] = useState('')
    const [formValid, setFormValid] = useState(false);
    const messageTemplate = `
    Fullname:${fullname}
    Date:${date}
    Customer Email: ${email}
    Customer phone number: ${phone}
    Ceremoney or Event type: ${ceremony}
    Where did the Customer hear from: ${hearabout}
    Excited: ${excited}
    Additional Information: ${adInfo}
`
    useEffect(()=>{setFormValid(fullname && date && email && phone && ceremony)},[fullname,date,email,phone,ceremony])
    const handleFullNameChange = (event)=>{
        setFullName(event.target.value)
    }
    const handleDateChange = (event)=>{
        setDate(event.target.value)
    }
    const handleEmailChange = (event)=>{
        setEmail(event.target.value)
    }
    const handlePhoneChange = (event)=>{
        setPhone(event.target.value)
    }
    const handleCeremonyChange = (event)=>{
        setCeremony(event.target.value)
    }
    const handleHearAboutChange = (event)=>{
        setHearAbout(event.target.value)
    }
    const handleExcitedChange = (event)=>{
        setExcited(event.target.value)
    }
    const handleAdInfoChange = (event)=>{
        setAdInfo(event.target.value)
    }
    const setMessagetemplates = () => {
        setMessage(messageTemplate);
    }
    const handleSubmit = async (event) => {
      setMessagetemplates()
      event.preventDefault()
        try {
          const response = await axios.post('/api/send-email', {
            fullname,
            date,
            email,
            phone,
            ceremony,
            hearabout,
            excited,
            adInfo,
          }); // Adjust the URL as needed
          console.log(response.data.message);
          setMessage('Email sent successfully');
        } catch (error) {
          console.error(error);
          setMessage('Email sending failed');
        }
      };
    

  return (
    <div className='bg-image bg-cover text-white my-16'>
        <div className='flex flex-wrap justify-between py-16 sm:px-16 items-center backdrop-brightness-50'>
            <div className='flex-1 flex justify-center items-center  max-sm:px-8 basis-96 h-screen text-center '>
                <p className=' leading-10 font-light tracking-wider px-4 text-xl'>At NDah Studio, we're passionate about photography and committed to providing you with an exceptional experience. If you're looking for portraits that go beyond the ordinary and truly showcase your personality and style, we're here to make that happen. Our team of skilled photographers is excited to collaborate with you, capturing moments that resonate and memories that last a lifetime.</p>
            </div>
            <div className='max-sm:px-8 flex-1 basis-96 h-fit flex flex-col gap-y-8'>

                <div className='flex justify-center items-center'>
                    <p className=' text-2xl font-light tracking-wider' data-aos='fade-up'>CONTACT US</p>
                </div>
                <form action="" onSubmit={handleSubmit} className='flex flex-col text-sm text-black'>
                        <p className='text-white'>Fill in the required fields*</p>
                        <input data-aos='fade-up' onChange={handleFullNameChange} value={fullname} className=' w-full tracking-wider p-4 border-b border-t border-t-black border-light placeholder:text-light' type="text" placeholder='YOUR FULL NAME*' required />
                    
                    
                        <input data-aos='fade-up' onChange={handleDateChange} value={date} className=' w-full tracking-wider p-4 border-b border-light placeholder:text-light' type="date" required />
                    
                    
                        <input data-aos='fade-up' onChange={handleEmailChange} value={email} className=' w-full tracking-wider p-4 border-b border-light placeholder:text-light' type="email" placeholder='YOUR EMAIL ADDRESS*' required/>
                    
                    
                        <input data-aos='fade-up' onChange={handlePhoneChange} value={phone} className=' w-full tracking-wider p-4 border-b border-light placeholder:text-light' type="number" placeholder='YOUR PHONE NUMBER*' required/>
                    
                    
                        <input data-aos='fade-up' onChange={handleCeremonyChange} value={ceremony} className=' w-full tracking-wider p-4 border-b border-light placeholder:text-light' type="text" name="" id="" placeholder='CEREMONEY & RECEPTION VENUE*' required/>
                    
                    
                        <input data-aos='fade-up' onChange={handleHearAboutChange} value={hearabout} className=' w-full tracking-wider p-4 border-b border-light placeholder:text-light' type="text" name="" id="" placeholder='HOW DID YOU HEAR ABOUT US?'/>
                    
                    
                        <input data-aos='fade-up' onChange={handleExcitedChange} value={excited} className=' w-full tracking-wider p-4 border-b border-light placeholder:text-light' type="text" name="" id="" placeholder='WHAT ARE YOU EXCITED ABOUT FOR YOUR EVENT?' />
                    
                    
                        <input data-aos='fade-up' onChange={handleAdInfoChange} value={adInfo} className=' w-full tracking-wider p-4 border-b border-light placeholder:text-light' type="text" name="" id="" placeholder='IS THERE ANYTHING ELSE YOU WOULD LIKE US TO KNOW' />                 
                        <button
                        type='submit'
                        className={`text-sm text-light-button-color border py-4 px-16 text-center tracking-widest duration-300 ease-in-out ${
                            formValid
                              ? 'border-light-button-color active:bg-light-button-color active:text-white'
                              : 'border-gray-400 cursor-not-allowed opacity-50'
                          }`}
                        disabled={!formValid} // Disable the button if form is not valid
                        >
                            <p>SUBMIT AND SEND MAIL</p>
                        </button>
                </form>
                <p>
                   status: {message}
                </p>
            </div>
        </div>
    </div>
    )
}

export default Form