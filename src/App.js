import './App.css';
import Hero from './components/hero/hero';
import NAVBAR from './components/navigation/NAVBAR';
import Slogon1 from './components/slogon1/Slogon1';
import Slogon2 from './components/slogon2/Slogon2';
import Slogon3 from './components/slogon3/Slogon3';
import Slogon4 from './components/slogon4/Slogon4';
import Slogon5 from './components/slogon5/Slogon5';
import Slogon6 from './components/slogon6/Slogon6';
import Slogon7 from './components/slogon7/Slogon7';
import Slogon8 from './components/slogon8/Slogon8';
import Slogon9 from './components/slogon9/Slogon9';

import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Circle from './Styled';
import { Container, Wrapper } from './components/slogon7/Slogon7.styled';

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
          <Hero />
          <Slogon1 />

          <Slogon2 isTabletOrMobile={isTabletOrMobile} />
          <Slogon3 />
          <Slogon4 />
          <Slogon5 />
          <Slogon6 />
          <Slogon7 />
          <Slogon8 />
          <Slogon9 />
        </>
      }
    </>
  );
}

export default App;
