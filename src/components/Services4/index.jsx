import React from 'react';
import Split from '../Split';
import services4Data from '../../data/sections/services4.json';
import Link from 'next/link';

const Services4 = ({ withBG, withPadding, halfBG, withOutTitle }) => {
  return (
    <section
      className={`services ${withPadding ? 'section-padding' : ''} ${
        withBG ? 'sub-bg' : ''
      }`}
    >
      <div className='container'>
        {!withOutTitle && (
          <div className='sec-head custom-font text-center'>
            <h6 className='wow fadeIn' data-wow-delay='.5s'>
              We are good at what we do
            </h6>
            <Split>
              <h3 className='wow words chars splitting' data-splitting>
                Services.
              </h3>
            </Split>
            <span className='tbg'>Services</span>
          </div>
        )}
        <div className='row'>
          {services4Data.map((item, index) => (
            <div className='col-lg-4' key={item.id}>
              <div
                className={`item ${
                  index != services4Data.length - 1 ? 'md-mb50' : ''
                } wow fadeInUp`}
                data-wow-delay={
                  item.id == 1 ? '.5s' : item.id == 2 ? '.3s' : '.8s'
                }
              >
                <h6>{item.title}</h6>

                <img src={item.icon} />
                <p>{item.content}</p>

                <Link href={item.Link}>
                  <a
                    className={`btn-curve btn-blc curve
                     wow fadeInUp`}
                    data-wow-delay='.5s'
                  >
                    <span>Learn more</span>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {halfBG && <div className='half-bg bottom'></div>}
    </section>
  );
};

export default Services4;
