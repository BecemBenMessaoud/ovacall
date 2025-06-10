
import NAVBAR from './components/navigation/NAVBAR';
import Solutions from './components/solutions/Solutions';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Services from './components/services/Services';
import Process from './components/process/Process';
import Chat from './components/chat/Chat';
import Aboutus from './components/aboutus/Aboutus';
import OnBoarding from './components/onboarding/Onboarding';
import Contactus from './components/contactus/Contactus';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import Homesection from './components/homesection/Homesection';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {
        <>
          <NAVBAR isDesktopOrLaptop isBigScreen isTabletOrMobile />
          <Homesection />
          <Solutions />
          <Services isTabletOrMobile={isTabletOrMobile} />
          <Process/>
          <Chat />
          <Aboutus />
          <OnBoarding />
          <Contactus/>
          <Blog />
          <Footer  />
        </>
      }
    </>
  );
}

export default App;
