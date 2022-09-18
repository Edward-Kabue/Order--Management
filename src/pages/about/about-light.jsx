import React from 'react';
import AboutHeader from '../../components/About-header';
import AboutIntro from '../../components/About-intro';
import CallToAction from '../../components/Call-to-action';
import Clients1 from '../../components/Clients1';
import Footer from '../../components/Footer';
import MinimalArea from '../../components/Minimal-area';
import Navbar from '../../components/Navbar';

import VideoWithTestimonials from '../../components/Video-with-testimonials';
import SkillsCircle from '../../components/Skills-circle';
import LightTheme from '../../layouts/Light';
import appData from '../../data/app.json';
import Values from '../../components/values';
import AboutBreadcrumb from '../../components/About-breadcrumb';

const About = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    document.querySelector('body').classList.add('menubarblack');
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + 'px';
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add('nav-scroll');
    } else {
      navbar.classList.remove('nav-scroll');
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll');
      } else {
        navbar.classList.remove('nav-scroll');
      }
    });
  }, []);
  return (
    <LightTheme>
      <Navbar nr={navbarRef} theme='themeL' />
      <AboutBreadcrumb sliderRef={fixedHeader} />
      <div className='main-content' ref={MainContent}>
        <AboutIntro />
        {/* <Services4 withPadding withOutTitle /> */}
        <VideoWithTestimonials />
        <Values />
        <SkillsCircle subBG theme='light' />
        {/* <Team1 /> */}
        {/* <MinimalArea /> */}
        <Clients1 theme='light' />
        <CallToAction theme='light' subBG />
        {/* <Footer /> */}
      </div>
    </LightTheme>
  );
};

export default About;
