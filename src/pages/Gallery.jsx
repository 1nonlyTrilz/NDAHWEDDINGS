import React, { useEffect, useState } from 'react'
import { IntroSection, Footer,GallerySection } from '../containers/index.js'
import { NavBar } from '../components/index.js'
import Loading from '../containers/Loading.jsx';
const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const pageTitle ='Ndah weddings | Gallery'
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
                <GallerySection  modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
            </div>
        <Footer />
    </div>
    }
    
    </>
  )
}

export default Gallery