import React, { useEffect, useState } from 'react'
import { IntroSection, Footer} from '../containers/index.js'
import { NavBar } from '../components/index.js'
import PeaceAndMisanGallery from '../containers/PeaceAndMisanGallery.jsx';
import Loading from '../containers/Loading.jsx';
const PeaceAndMissan = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const pageTitle = ' Ndah weddings | Peace &  Misan Wedding'
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    document.title = pageTitle
    setTimeout(()=>{setIsLoaded(false)},1000)
  }, []);
  return (
    <>
    {isLoaded?<Loading/>:
    
    <div >
        <IntroSection />
            <div>
                <NavBar/>
                <PeaceAndMisanGallery modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} selectedImage={selectedImage} setSelectedImage={setSelectedImage} path='./peaceandmisan'/>
            </div>
        <Footer />
    </div>
    
    }
    </>
  )
}

export default PeaceAndMissan