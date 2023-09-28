import React, { useEffect ,useState} from 'react'
import {Footer, IntroSection } from '../containers'
import { NavBar } from '../components'
import Form from '../containers/Form'
import Loading from '../containers/Loading'

const Pricing = () => {
  const pageTitle = 'Ndah weddings | Contact us'
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
              <Form/>
          </div>
      <Footer />
      </div>   
     }
    </>

  )
}

export default Pricing