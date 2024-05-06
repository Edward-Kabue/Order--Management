import React from 'react';

import CallToAction from '../../components/Call-to-action';

import Navbar from '../../components/Navbar';

import LightTheme from '../../layouts/Light';
import appData from '../../data/app.json';
import Services2 from '../../components/Services2';
import ServiceHeader from '../../components/Service-header';

const About = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add('nav-scroll');
    } else {
      navbar.classList.remove('nav-scroll');
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll');
        logo.setAttribute('src', appData.Logo);
      } else {
        navbar.classList.remove('nav-scroll');
        logo.setAttribute('src', appData.lightLogo);
      }
    });
  }, [navbarRef]);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ServiceHeader sliderRef={fixedHeader} />
      <div className='main-content' ref={MainContent}></div>

      <Services2 />

      <CallToAction theme='light' subBG />
      {/* <Footer /> */}
    </LightTheme>
  );
};

export default About;
