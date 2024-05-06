import React from 'react';
import LightTheme from '../../layouts/Light';
import Navbar from '../../components/Navbar';
import WorksThreeColumnWithFilter from '../../components/Works-three-column-with-filter';
import SmallFooter from '../../components/Small-footer';
import addParlx from '../../common/addParlx';
import PortfolioBreadcrumb from '../../components/portfolio-breadcrumb';

const Works2Light = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    document.querySelector('body').classList.add('menubarblack');
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx();
    }
  }, [pageLoaded]);
  React.useEffect(() => {
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
  }, [fixedHeader, MainContent, navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme='themeL' />
      <PortfolioBreadcrumb sliderRef={fixedHeader} />
      <div ref={MainContent} className='main-content'>
        <WorksThreeColumnWithFilter filterPosition='right' />
        <SmallFooter />
      </div>
    </LightTheme>
  );
};

export default Works2Light;
