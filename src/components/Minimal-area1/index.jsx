/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import featuresEffect from '../../common/featuresEffect'
import { thumparallaxDown } from '../../common/thumparallax'
import Split from '../Split'

const MinimalArea1 = () => {
  React.useEffect(() => {
    featuresEffect()
    setTimeout(() => {
      thumparallaxDown()
    }, 1000)
  }, [])
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row-services " style={{ flexDirection: 'row-reverse' }}>
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/serv/conent.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  Content, and creative design
                </h4>
              </Split>

              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Content creation and management
                  </h6>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Videography
                  </h6>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span>Graphics
                  </h6>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>4</span> Animations
                  </h6>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>5</span> Live streaming
                  </h6>
                </li>
              </ul>
              <Link href="#">
                <a
                  className={`btn-curve btn-blc curve
                     wow fadeInUp`}
                  data-wow-delay=".5s"
                >
                  <span>Learn more</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MinimalArea1
