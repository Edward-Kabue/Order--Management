import React from 'react';
import Split from '../Split';
import services4Data from '../../data/sections/values.json';

const Values = ({ withBG, withPadding, halfBG, withOutTitle }) => {
  return (
    <section
      className={`values ${withPadding ? 'section-padding' : ''} ${
        withBG ? 'sub-bg' : ''
      }`}
    >
      <div className='container'>
        {!withOutTitle && (
          <div className='sec-head custom-font text-center'>
            <h6 className='wow fadeIn' data-wow-delay='.5s'>
              Values act as a moral compass.
            </h6>
            <Split>
              <h3 className='wow words chars splitting' data-splitting>
                Here are ours.
              </h3>
            </Split>
            <span className='tbg'>Our values</span>
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
                <span className={`icon ${item.icon}`}></span>
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {halfBG && <div className='half-bg bottom'></div>}
    </section>
  );
};

export default Values;
