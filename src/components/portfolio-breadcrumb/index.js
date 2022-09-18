import React from 'react';

const PortfolioBreadcrumb = ({ sliderRef }) => {
  return (
    <header
      ref={sliderRef}
      className='works-header fixed-slider hfixd valign'
      style={{ backgroundImage: 'url(/img/slid/1.jpg)' }}
      data-overlay-dark='5'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='cont text-center'>
              <h1>Portfolio</h1>
              <div className='path'>
                <a href='#0'>Home</a>
                <span>/</span>
                <a href='#0' className='active'>
                  Portfilo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PortfolioBreadcrumb;
