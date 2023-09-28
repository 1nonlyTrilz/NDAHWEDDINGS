import { IntroSection, PortFolio, JourneySection, JourneySection2, AboutUs, Footer, FollowUs, Philosophy, OurStory, CTABlog } from '../containers/index.js'
import { NavBar } from '../components/index.js'
import { useEffect , useState } from 'react';
import Loading from '../containers/Loading.jsx';
function Home() {
  const pageTitle = 'Ndah weddings | Home'
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    document.title = pageTitle
    setTimeout(()=>{setIsLoaded(false)},1000)
  }, []);
  return (
    <>
    {isLoaded?<Loading/>:
    <>
    <IntroSection />
    <div>
      <NavBar/>
      <JourneySection/>
      <AboutUs />
      <OurStory />
      <PortFolio />
      <CTABlog />
      {/* <Philosophy /> */}
      <JourneySection2 />
      {/* <FollowUs /> */}
    </div>
    <Footer />
    </>
    }
    </>
  );
}

export default Home;
