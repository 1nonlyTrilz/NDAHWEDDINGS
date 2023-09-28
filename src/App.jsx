import { IntroSection, PortFolio, JourneySection, JourneySection2, AboutUs, Footer, FollowUs, Philosophy, OurStory, CTABlog } from './containers/index.js'
import { NavBar } from './components/index.js'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()
function App() {
  return (
    <>
      <IntroSection />
      <div>
        <NavBar/>
        <JourneySection/>
        <AboutUs />
        <OurStory />
        {/* <PortFolio /> */}
        <CTABlog />
        {/* <Philosophy /> */}
        <JourneySection2 />
        {/* <FollowUs /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
