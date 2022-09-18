// import React from 'react';
// import ServiceHeader from '../../components/Service-header';
// import Navbar from '../../components/Navbar';
// import LightTheme from '../../layouts/Light';
// import TechServicesLanding from '../../components/Services3/ServicesLanding';

// const Contact = () => {
//   const fixedHeader = React.useRef(null);
//   const MainContent = React.useRef(null);
//   const navbarRef = React.useRef(null);

//   React.useEffect(() => {
//     document.querySelector('body').classList.add('menubarblack');
//     setInterval(() => {
//       if (fixedHeader.current) {
//         var slidHeight = fixedHeader.current.offsetHeight;
//       }
//       if (MainContent.current) {
//         MainContent.current.style.marginTop = slidHeight + 'px';
//       }
//     }, 1000);
//     var navbar = navbarRef.current;
//     if (window.pageYOffset > 300) {
//       navbar.classList.add('nav-scroll');
//     } else {
//       navbar.classList.remove('nav-scroll');
//     }
//     window.addEventListener('scroll', () => {
//       if (window.pageYOffset > 300) {
//         navbar.classList.add('nav-scroll');
//       } else {
//         navbar.classList.remove('nav-scroll');
//       }
//     });
//   }, []);
//   return (
//     <LightTheme>
//       <Navbar nr={navbarRef} theme='themeL' />
//       <ServiceHeader sliderRef={fixedHeader} />
//       <div className='main-content' ref={MainContent}>
//         <TechServicesLanding />
//       </div>
//     </LightTheme>
//   );
// };

// export default Contact;