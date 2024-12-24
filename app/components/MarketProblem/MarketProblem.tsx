"use client";
import React from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";

const MarketProblem = () => {
  return (
    <section className=" pt-5 container about-container mt-5">
            <h1 className="title-skill ">Current Market Problems</h1>

            <Tabs
              defaultActiveKey="build"
              id="justify-tab-example"
              className="mb-3"
              justify
            >
              <Tab
                eventKey="build"
                title={
                  <div className=" skill-tab">
                    <div>Problem</div>
                    <div>#1</div>
                  </div>
                }
              >
                <div className="row pt-5">
                  <div className="col-md-6 my-auto text-start">
                    <h3>Manage non-core functions</h3>
                    <p className="pt-3">
                      Companies find it challenging to manage non-core functions
                      efficiently while trying to focus on their primary areas
                      of expertise.
                    </p>
                  </div>
                  <div className="col-md-6">
                  <Image 
                  src="/target.png"
                  alt="Manage function"
                  width={600} 
                  height={600} 
                  className='img-fluid'
                />
                   
                    {/* <ImageComponent images={[{ url: `${Images.target}`}]}
                                         defaultImageUrl={`${Images.target}`}
                                         className="img-fluid img-problem "
                                         alt="Manage function"
                                         /> */}
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="technologies"
                title={
                  <div className="skill-tab">
                    <div>Problem</div>
                    <div>#2</div>
                  </div>
                }
              >
                <div className="row pt-5">
                  <div className="col-md-6 my-auto text-start">
                    <h3>Challenge to retain talents</h3>
                    <p className="pt-3">
                      They have hard time retaining specialized talent particularly for niche skills that are not generally available in the local talent pool.
                    </p>
                  </div>
                  <div className="col-md-6">
                   
                    {/* <ImageComponent images={[{ url: `${Images.quit}`}]}
                                         defaultImageUrl={`${Images.quit}`}
                                         className="img-fluid img-problem "
                                         alt="Challenges"
                                         /> */}

                <Image 
                  src="/quit.jpeg"
                  alt="Challenges"  
                  width={400} 
                  height={400} 
                  className='img-fluid'
                />
                  </div>
                </div>
              </Tab>
              <Tab
                eventKey="practices"
                title={
                  <div className="skill-tab">
                    <div>Problem</div>
                    <div>#3</div>
                  </div>
                }
              >
                <div className="row pt-5">
                  <div className="col-md-6 my-auto text-start">
                    <h3>Round the clock support</h3>
                    <p className="pt-3">
                      They struggle to provide round-the-clock support or maintain a global presence due to time zone differences.
                    </p>
                  </div>
                  <div className="col-md-6">
                   
                    {/* <ImageComponent images={[{ url: `${Images.people_probs}`}]}
                                         defaultImageUrl={`${Images.people_probs}`}
                                         className="img-fluid img-problem "
                                         alt="Round Clock"
                                         /> */}

                <Image 
                  src="/people-probs.jpeg"
                  alt="Round Clock"
                  width={400} 
                  height={400} 
                  className='img-fluid'
                />
                  </div>
                </div>
              </Tab>
              
            </Tabs>
          </section>
  )
}

export default MarketProblem
