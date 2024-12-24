import React from 'react';
import Header from '../components/Header/Header';
import Image from "next/image";
import './resources.css'

import Footer from '../components/Footer/Footer';

const page = () => {
  return (
    <div>
        <Header/>
      <section className="section-about">
          <div className="mission-section">
            <div className="container">
              <div className="row mt-md-5 pt-md-5 pb-3">
                <div className="col-lg-8 col-xl-7 text-start mt-5 pt-5 pt-lg-0 my-lg-auto">
                  <h4 className="about-title text-start pb-4 ">
                  We are building great products at Neelgai and with great care.
                  </h4>

                  <div  className='d-md-flex justify-content-between pt-5'>
                    <div className='pb-5 '>
                  <a className="resource" href="https://docs.google.com/presentation/d/1CYZNJPyhvR0T7YPAq2X2NVMzpbt0W9zDhxVuRnLifPo/edit#slide=id.g2831e64a9aa_0_74" target="_blank">
                    Portfolios
                  </a>
                  </div>
                  <div  className='pb-5'>
                  <a className="resource" href="https://neelgai-tech.notion.site/Software-Quality-Assurance-SQA-Plan-11131ed40e7380d7b3accd8631d4a468" target="_blank">
                    Software Quality Assurance Plan
                  </a>
                  </div>
                  <div  className='pb-5'>
                  <a className="resource" href="https://docs.google.com/presentation/d/1L2Lk7pNAvLTFE4EdCe7LAazP0a2tsgyfD4kFx63w5DM/edit#slide=id.g2ee0f13559e_0_8t" target="_blank">
                    Pitch Deck
                  </a>
                  </div>
                  </div>
                </div>

                <div className="col-lg-4 col-xl-5  mt-5">
                  <img
                    src='./neelgai-resource.png'
                    alt="image-blog"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="svg-about"></div>

          <h4 className="compare-res text-center pt-5 mt-5 ">
          See how we compare with Deloitte
                  </h4>
          <div className="container py-5 ">
          <img
                    src='./neelgaivsdeloitte.png'
                    alt="image-blog"
                    className="img-fluid py-5"
                  />
           
            
          
          </div>
         
         
        </section>
        <Footer/>
    </div>
  )
}

export default page
