import React, { useEffect, useState } from 'react'
import { IntroSection, Footer} from '../containers/index.js'
import { NavBar } from '../components/index.js'
import ChiomaAndMarizuGallery from '../containers/ChiomaAndMarizuGallery.jsx';
import Loading from '../containers/Loading.jsx';

const ChiomaAndMarizu = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);
    const pageTitle = 'Ndah weddings | Peace &  Misan Wedding'
  useEffect(() => {
    document.title = pageTitle
    setTimeout(()=>{setIsLoaded(false)},1000)
  }, []);


  return (

    <>
      {isLoaded?<Loading/>:
      <div>
        <IntroSection />
            <div>
                <NavBar/>
                <ChiomaAndMarizuGallery modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} selectedImage={selectedImage} setSelectedImage={setSelectedImage} path='./peaceandmisan'/>
            </div>
        <Footer />
    </div>
      }
    
    </>
    
  )
}

export default ChiomaAndMarizu