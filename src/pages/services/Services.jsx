import React from 'react'
import ServiceHeader from '../../components/Service-header'
import Services5 from '../../components/Services5/index'
import Navbar from '../../components/Navbar'
import LightTheme from '../../layouts/Light'
import ServicesBreadcrumb from '../../components/Services-breadcrumb'
import MinimalArea from '../../components/Minimal-area'
import CallToAction from '../../components/Call-to-action'
import Footer from '../../components/Footer'
import MinimalArea1 from '../../components/Minimal-area1'
import MinimalArea2 from '../../components/Minimal-area2'

const Services = () => {
  const fixedHeader = React.useRef(null)
  const MainContent = React.useRef(null)
  const navbarRef = React.useRef(null)
  React.useEffect(() => {
    document.querySelector('body').classList.add('menubarblack')
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + 'px'
      }
    }, 1000)
    var navbar = navbarRef.current
    if (window.pageYOffset > 300) {
      navbar.classList.add('nav-scroll')
    } else {
      navbar.classList.remove('nav-scroll')
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll')
      } else {
        navbar.classList.remove('nav-scroll')
      }
    })
  }, [])
  return (
    <LightTheme>
      <Navbar nr={navbarRef} theme="themeL" />
      <ServicesBreadcrumb sliderRef={fixedHeader} />
      <div className="main-content" ref={MainContent}>
        <MinimalArea />
        <MinimalArea1 />
        <MinimalArea2 />
        <CallToAction theme="light" subBG />
        <Footer />
      </div>
    </LightTheme>
  )
}

export default Services
