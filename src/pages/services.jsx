import React from 'react';

import CallToAction from '../components/Call-to-action';

import Navbar from '../components/Navbar';
import Services4 from '../components/Services4';

import LightTheme from '../layouts/Light';
import appData from '../data/app.json';

const About = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);
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

      <Services4 withPadding withOutTitle />

      <CallToAction theme='light' subBG />
      {/* <Footer /> */}
    </LightTheme>
  );
};

export default About;
