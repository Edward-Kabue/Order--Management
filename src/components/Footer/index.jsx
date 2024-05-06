/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Formik, Form, Field } from 'formik'
import appData from '../../data/app.json'

const Footer = () => {
  function validateEmail(value) {
    let error
    if (!value) {
      error = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address'
    }
    return error
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms))
  return (
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 ">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <p className="footer-text">
                  Dimetech Group is a full-service digital and media content
                  service provider based in Kenya. We combine creativity,
                  technological trends, and strategic planning to help
                  businesses flourish in this fast-paced digital era
                </p>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a href="#0" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="cont">
              <div className="footer-title">
                <h6>Where to find us</h6>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> contact@dimetechgroup.com
                  </li>
                  <li>
                    <span>Address : </span> Banda Lane 92, Karen Nairobi, Kenya
                  </li>
                  <li>
                    <span>Phone : </span> 020 2008807 / 0714254750
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a href="#0" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
            <p>© 2016-2022, Dimetech group. All rights reserved.</p>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
