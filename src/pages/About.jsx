import React, { useEffect, useState } from 'react';
import { AboutUs, Footer, IntroSection } from '../containers';
import { NavBar } from '../components';
import Ourmisson from '../containers/Ourmisson';
import Loading from '../containers/Loading';


const About = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const pageTitle = 'Ndah weddings | About-us'
  useEffect(() => {
    document.title = pageTitle
    setTimeout(()=>{setIsLoaded(false)},1000)
  }, []);

  return (
    <>
      {isLoaded ? (
        <Loading/>
      ) : (
        <div>
          <IntroSection />
          <div>
            <NavBar />
            <AboutUs />
            <Ourmisson />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default About;
