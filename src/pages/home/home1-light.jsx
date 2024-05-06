import React from 'react'
import AboutUs1 from '../../components/About-us1'
import BlogsTwoColumnSlider from '../../components/Blogs-two-column-slider'
import CallToAction from '../../components/Call-to-action'
import Clients1 from '../../components/Clients1'
import Footer from '../../components/Footer'
import IntroWithSlider1 from '../../components/Intro-with-slider1'
import Navbar from '../../components/Navbar'
import IntroWithSlider3 from '../../components/Intro-with-slider3'
import PortfolioCustomColumn from '../../components/Portfolio-custom-column'

import LightTheme from '../../layouts/Light'
import appData from '../../data/app.json'
import Services4 from '../../components/Services4'

const Homepage1 = () => {
  const fixedSlider = React.useRef(null)
  const MainContent = React.useRef(null)
  const navbarRef = React.useRef(null)
  const logoRef = React.useRef(null)

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + 'px'
      }
    }, 1000)
    var navbar = navbarRef.current,
      logo = logoRef.current
    if (window.pageYOffset > 300) {
      navbar.classList.add('nav-scroll')
    } else {
      navbar.classList.remove('nav-scroll')
    }
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add('nav-scroll')
        logo.setAttribute('src', appData.Logo)
      } else {
        navbar.classList.remove('nav-scroll')
        logo.setAttribute('src', appData.lightLogo)
      }
    })
  }, [fixedSlider, MainContent, navbarRef])

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider1 />
      <div ref={MainContent} className="main-content">
        <AboutUs1 />
        <Services4 withPadding />

        <PortfolioCustomColumn column={3} filterPosition="center" />
        {/* <VideoWithTestimonials />
        <SkillsCircle theme='light' subBG /> */}
        <Clients1 theme="light" />
        <BlogsTwoColumnSlider />
        <CallToAction theme="light" />
        <Footer />
      </div>
    </LightTheme>
  )
}

export default Homepage1
