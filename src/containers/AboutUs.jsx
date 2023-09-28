import React from 'react'
import Responsivetext from '../components/responsivetext'
import { useState } from 'react'


const RemainingText = () => {
    return (
        <>
            <Responsivetext text={`At Ndah Weddings, we don't just capture photographs; we encapsulate the essence of your special occasions with an unwavering commitment to creativity and passion. Our team of experienced photographers, each a visionary artist in their own right, is dedicated to bringing your dreams to life through the lens. From the radiant smiles exchanged on a wedding day to the tender moments shared at family gatherings, we understand the significance of every glance, every touch, and every fleeting second that defines your event.`} />
            <Responsivetext text={`What sets Ndah Weddings apart is our steadfast dedication to excellence. We believe that your memories deserve nothing less than the utmost care and attention to detail. Our photographers blend technical expertise with artistic intuition, ensuring that each photograph resonates with the emotions that made that moment special. The result? Timeless works of art that not only freeze time but also evoke the same feelings of love and happiness whenever you revisit them.`} />
            <Responsivetext text={`We understand that every love story and event is unique, and that's why we approach each project with fresh eyes and an open heart. Our team takes the time to get to know you, to understand your vision, and to weave your personal narrative into every frame. Whether it's the glimmer of anticipation in a bride's eyes, the laughter shared among friends, or the quiet intimacy of stolen glances, our photographers have a knack for preserving these nuances that make your story uniquely yours.`}/>
            <Responsivetext text={`Joining hands with Ndah Weddings means immersing yourself in an experience that goes beyond photography. It's about collaborating with passionate storytellers who genuinely care about preserving your most cherished moments. From the initial consultation to the final delivery, we are committed to ensuring that your journey with us is seamless, enjoyable, and fulfilling.`}/>
            <Responsivetext text={`In a world where time moves swiftly and memories can fade, Ndah Weddings is your steadfast companion in holding onto the magic of the past. Let us be part of your celebration, and together, let's transform your fleeting moments into lasting legacies that will be cherished for generations to come. Your story is our inspiration, and we can't wait to capture it in all its splendor.`}/>
            {/* <Responsivetext text={``}/> */}
        </>
    )
}
const AboutUs = () => {
    const [isShown, setisShown] = useState(false)
    return (
        <div className=' bg-stone-100 '>
            <div className='flex flex-col items-center gap-y-8 py-16 text-center xl:w-1/2 mx-auto overflow-x-clip'>
                <div className=' text-4xl font-light max-xl:text-2xl'data-aos="fade-up">
                    <p>ABOUT US</p>
                </div>
                <div className='bg-light-button-color h-[1px] max-xl:w-1/6 w-1/4 mx-auto' data-aos="fade-up"></div>
                <div className='flex flex-col gap-y-4'>
                    <Responsivetext text={`Ndah Weddings is a premier wedding and event photography company committed to capturing your special moments with creativity and passion. With a team of talented photographers and a dedication to excellence, we aim to turn your cherished memories into timeless works of art. `} />
                    <Responsivetext text={`Step into the enchanting world of Ndah Weddings, where the art of photography meets the profound emotions of life's most cherished moments. With a legacy steeped in capturing stories of love, joy, and connection, we invite you to embark on a journey with us that transcends the ordinary and embraces the extraordinary.`} />
                    {isShown && <RemainingText />}
                </div>
                <div onClick={() => { setisShown(!isShown) }} className=' text-lg tracking-wider cursor-pointer'>
                    <p data-aos='fade-up'>
                        {isShown === true ? `READ LESS` : 'READ MORE'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs