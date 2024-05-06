import React from 'react';
import Split from '../Split';

const AboutIntro = () => {
  return (
    <section className='intro-section section-padding pb-0'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-4'>
            <div className='htit sm-mb30'>
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className='col-lg-8 offset-lg-1 col-md-8'>
            <div className='text'>
              <Split>
                <p className='wow txt words chars splitting' data-splitting>
                  Dimetech Group is a full-service digital and media content
                  service provider based in Kenya. We combine creativity,
                  technological trends, and strategic planning to help
                  businesses flourish in this fast-paced digital era. With
                  technological expertise and analytical know-how, our team of
                  curious, creative, and technical experts provide support to
                  help businesses in the digital transformation of their
                  business models. We are driven by passion to sustainably
                  improve digital experiences in all business areas. We
                  implement digital projects, harness innovation, and bring
                  efficiency to business processes and system landscapes.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
