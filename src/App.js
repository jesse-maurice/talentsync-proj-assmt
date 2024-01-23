import './App.css';

import FAQs from './Components/FAQs';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Reason from './Components/Reason';
import Shopify from './Components/Shopify';
import SocialLinks from './Components/SocialLinks';
import Socials from './Components/Socials';
import VideoRecord from './Components/VideoRecord';

function App() {
  return (
    <div className="w-full 2xl:w-[1440px] 2xl:mx-auto overflow-hidden ">
      <Hero />
      <Socials />
      <Reason />
      <Shopify />
      <FAQs />
      <VideoRecord />
      <Footer />
      <SocialLinks/>
    </div>
  );
}

export default App;
