import React from 'react';
import addParlx from '../../common/addParlx';

const ServiceHeader = ({ sliderRef }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx();
    }
  }, [pageLoaded]);
  return (
    <header ref={sliderRef} className='works-header fixed-slider hfixd valign'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-9 col-md-11 static'>
            <div className='capt mt-50'>
              <div className='parlx'>
                <h2 className='custom-font'>
                  <span>Let&apos;s</span>Talk About Your project.
                </h2>
                <p>
                  We&apos;re glad to discuss your organization&apos;s situation.
                  Please contact us via the form below
                </p>
              </div>

              <div className='bactxt custom-font valign'>
                <span className='full-width'>SERVICES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ServiceHeader;