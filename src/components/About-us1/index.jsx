/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Split from '../Split';
import AboutUs1Date from '../../data/sections/about-us1.json';

const AboutUs1 = () => {
  return (
    <div className='about section-padding'>
      <div className='container'>
        <div className='sec-head custom-font text-center'>
          <h6 className='wow fadeIn' data-wow-delay='.5s'>
            Who we are and what we do
          </h6>
          <Split>
            <h3 className='wow words chars splitting' data-splitting>
              About us
            </h3>
          </Split>
          <span className='tbg'>About us</span>
        </div>
        <div className='row'>
          <div className='col-lg-5 offset-lg-1 valign'>
            <div className='content'>
              <Split>
                <h3
                  className='words chars splitting main-title wow'
                  data-splitting
                >
                  {AboutUs1Date.title.first} <br /> {AboutUs1Date.title.second}
                </h3>
              </Split>
              <Split>
                <p className='words chars splitting wow txt' data-splitting>
                  {AboutUs1Date.content}
                </p>
              </Split>
              <Split>
                <h6 className='words chars splitting wow txt' data-splitting>
                  {AboutUs1Date.method}
                </h6>
              </Split>
              <div className='ftbox mt-30'>
                <ul>
                  {AboutUs1Date.features.map((feature) => (
                    <li
                      key={feature.id}
                      className={`wow fadeIn ${feature.id == 2 ? 'space' : ''}`}
                      data-wow-delay={feature.wowDelay}
                    >
                      <span
                        className={`icon color-font pe-7s-${feature.icon}`}
                      ></span>
                      <h6 className='custom-font'>
                        {feature.name.first} <br /> {feature.name.second}
                      </h6>
                      <div className='dots'>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='img-mons'>
              <div className='row'>
                <div className='col-md-5 cmd-padding valign'>
                  <div className='img1 wow imago' data-wow-delay='.5s'>
                    <img src={AboutUs1Date.image1} alt='' />
                  </div>
                </div>
                <div className='col-md-7 cmd-padding'>
                  <div className='img2 wow imago' data-wow-delay='.3s'>
                    <img src={AboutUs1Date.image2} alt='' />
                  </div>
                  <div className='img3 wow imago' data-wow-delay='.8s'>
                    <img src={AboutUs1Date.image3} alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs1;
