import React from 'react'
import Services from '../components/Services'
import birthday from './assets/Birthday.jpg'
import wedding from './assets/wedding.jpg'
import portrait from './assets/portrait.jpg'
import cinematography from './assets/Cinematography.jpg'
import engagement from './assets/Engagement.jpg'
import Responsivetext from '../components/responsivetext'
const Ourmisson = () => {
    const servicesText = [
        {
          "source":wedding,
          "title": "Wedding Photography",
          "content": "We specialize in capturing the essence and beauty of your wedding day, ensuring every detail is preserved for you to cherish forever."
        },
        {
          "source":cinematography,
          "title": "Cinematography",
          "content": "Our talented team also offers cinematic videography services, allowing you to relive the emotions and highlights of your special day through captivating motion pictures."
        },
        {
          "source":engagement,
          "title": "Engagement Shoots",
          "content": "Let us capture your love story in stunning photographs during a personalized engagement shoot that reflects your unique journey."
        },
        {
          "source":birthday,
          "title": "Event Photography",
          "content": "From corporate events to private celebrations, we have the expertise to document any occasion with professionalism and creativity."
        },
        {
          "source":portrait,
          "title": "Portrait Sessions",
          "content": "Our skilled photographers can create captivating portraits that showcase your personality and style."
        }
      ]
      
  return (
    <>
        <div className='p-16 max-sm:px-0 sm:p-16 lg:p-16 h-fit text-white bg-stone-900'>
            <div className='flex flex-col gap-16 justify-center items-center '>
                <div>
                    <p className=' border-b w-fit pb-2 text-4xl font-light tracking-wider' data-aos='fade-up'>What we offer:</p>
                </div>
                <div className='flex flex-wrap gap-8  justify-center'>
                    {
                        servicesText.map((item,index)=>{
                            return(
                                <div data-aos='fade-up' data-aos-delay={window.innerWidth > 782?`${400 + 200*index }`:''}>
                                    <Services title={item.title} content={item.content} source={item.source} />
                                </div>
                            )})
                    }
                </div>
                <div className='flex flex-col gap-y-8 items-center text-center xl:w-1/2 mx-auto overflow-x-clip'>
                    <Responsivetext text='With our comprehensive photography and cinematography services, Ndah Weddings is committed to delivering a seamless and unforgettable visual storytelling experience for your most cherished moments. '/>
                </div>
                <div className='flex flex-col gap-y-8 items-center text-center xl:w-1/2 mx-auto overflow-x-clip'>
                    <div className='flex flex-col gap-y-4'>
                    <p className=' text-2xl' data-aos='fade-left'>Vision</p>
                    <Responsivetext text='At Ndah Weddings, our vision is to become the leading provider of wedding and event photography services, renowned for our artistic approach and exceptional customer experience.'/>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                    <p className=' text-2xl' data-aos='fade-left'>Mission</p>
                    <Responsivetext text='Our mission is to capture the essence of love, joy, and celebration through our lens, ensuring that every client receives a personalized and memorable photography experience. '/>
                    </div>
                </div>
                <div className='flex flex-col gap-y-8 items-center text-center xl:w-1/2 mx-auto h-fit overflow-x-clip'>
                    <div className='text-4xl' data-aos='fade-up'>Core Values</div>
                    <div className='flex flex-col gap-y-4'>
                    <p className=' text-2xl' data-aos='fade-left'>Creativity</p>
                    <Responsivetext text="We believe in pushing the boundaries of creativity to deliver unique and captivating photographs that exceed our clients' expectations."/>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                    <p className=' text-2xl' data-aos='fade-left'>Integrity</p>
                    <Responsivetext text='Honesty, transparency, and respect guide our interactions with clients and each other, fostering strong and lasting relationships.'/>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                    <p className=' text-2xl' data-aos='fade-left'>Excellence</p>
                    <Responsivetext text='We strive for excellence in every aspect of our work, from the initial consultation to the final product delivery, ensuring unmatched quality'/>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                    <p className=' text-2xl' data-aos='fade-left'>Passion</p>
                    <Responsivetext text="Our team is driven by a deep passion for photography and a genuine love for capturing life's most precious moments."/>
                    </div>
                </div>
                <div className='flex flex-col gap-y-8 items-center text-center xl:w-1/2 mx-auto h-fit overflow-x-clip'>
                    <div className='text-4xl' data-aos='fade-up'>How We Operate</div>
                    <div className='flex flex-col gap-y-4'>
                    <p className=' text-2xl' data-aos='fade-left'>Consultation</p>
                    <Responsivetext text="We begin by understanding your vision and preferences, tailoring our services to meet your specific needs"/>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                    <p className=' text-2xl' data-aos='fade-left'>Professionalism</p>
                    <Responsivetext text='Our photographers maintain a high level of professionalism during every shoot, respecting your privacy and delivering on time.'/>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                    <p className=' text-2xl' data-aos='fade-left'>Personalization</p>
                    <Responsivetext text='We believe in customizing each photography session to reflect your style and personality, ensuring a truly unique experience'/>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                    <p className=' text-2xl' data-aos='fade-left'>Post-Production</p>
                    <Responsivetext text="Our skilled editors carefully enhance and retouch the images, ensuring a polished and flawless final product."/>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                    <p className=' text-2xl' data-aos='fade-left'>Delivery</p>
                    <Responsivetext text="We deliver the final photographs in a timely manner, providing you with beautifully preserved memories to cherish for a lifetime."/>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                    <Responsivetext text="With Ndah Weddings, you can expect nothing less than exceptional photography services that capture the magic of your special moments, creating cherished memories that will last a lifetime"/>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </>
  )
}

export default Ourmisson