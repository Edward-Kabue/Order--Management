/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.css'

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = React.useState(false)
  React.useEffect(() => {
    console.clear()
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <section className="block-sec">
      <div
        className="background bg-img section-padding pb-0"
        style={{ backgroundImage: `url(/img/slid/1.png)` }}
        data-overlay-dark="8"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="vid-area">
                <div className="vid-icon">
                  {typeof window !== 'undefined' && (
                    <ModalVideo
                      channel="vimeo"
                      autoplay
                      isOpen={isOpen}
                      videoId="127203262"
                      onClose={() => setOpen(false)}
                    />
                  )}
                  <a
                    className="vid"
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen(true)
                    }}
                    href="#"
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div>

                <div className="cont">
                  <h3 className="wow" data-splitting>
                    Get to know us better
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    What makes us diffrent
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    Why us ?
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    <p>
                      We guide you through the online cosmos and accompany you
                      all through to your business goal. We help make you and
                      your business visible. We share our knowledge with our
                      customers without overburdening them. We communicate
                      reliably and always at eye level. Binary code is our daily
                      cup of tea. We help our customers to ensure that their
                      messages get where they are supposed to get in the digital
                      world. In the minds and hearts of people. There are many
                      ways to achieve authentic digital visibility - we will
                      guide you directly there! Talk to us today
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoWithTestimonials
