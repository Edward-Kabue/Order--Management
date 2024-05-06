import React from 'react';
import Split from '../Split';

import addParlx from '../../common/addParlx';

const AboutHeader = ({ sliderRef }) => {
  return (
    <header ref={sliderRef} className='works-header fixed-slider hfixd valign'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-9 col-md-11 static'>
            <div className='capt mt-50'>
              <h2 className='custom-font'>
                <span>Let&apos;s</span>Talk About Your project.
              </h2>
              <p>
                Feel free to ask me any question or let&apos;s do to talk about
                our future collaboration.
              </p>

              <div className='bactxt custom-font valign'>
                <span className='full-width'>About us</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
