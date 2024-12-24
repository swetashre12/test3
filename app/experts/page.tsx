import Link from 'next/link';
import React from 'react'
import './experts.css'
import Header from '../components/Header/Header';
import Footer from "@/app/components/Footer/Footer";    
import { Metadata } from 'next';
import Faq from '../components/Faq/Faq';

export const metadata: Metadata = {
    title: 'Meet our Experts - Neelgai',
    description:
      'Learn about Neelgai, a software development company dedicated to providing fast and cost-effective tech services. Discover our mission, values, and the challenges we solve for businesses.',
    keywords: [
      'Neelgai',
      'software development',
      'about us',
      'tech services',
      'mission',
      'values',
    ],
    alternates: {
      canonical: 'https://www.neelgai.com/experts',
    },
    openGraph: {
      title: 'Meet our experts - Neelgai',
      description: "Discover Neelgai's mission and values in software development.",
      url: 'https://www.neelgai.com/contact',
      images: [
        {
          url: 'https://www.neelgai.com/static/media/neelgai-resource.33b90f763a3d91cf9f35.png',
          alt: 'Neelgai resource',
        },
      ],
      siteName: 'Neelgai',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Meet our experts - Neelgai',
      description: 'Learn about Neelgai and our software development services.',
      images: [
        'https://www.neelgai.com/static/media/neelgai-resource.33b90f763a3d91cf9f35.png',
      ],
    },
  };

const page = () => {

    const faq = [
        {
          id: 1,
          question: "How do FAANG Engineers work with you?",
          answer:
            "1. Knowledge of any one programming language (Python, Java, C++) or other languages <div> 2. Have completed Bachelors or equivalent</div> 3. Interested in learning Computer Science or Data Science ",
        },
        {
          id: 2,
          question: "Do you provide services not listed on this page?",
          answer:
            "This is a bootcamp led by Neelgai. Neelgai has a office in Janakpur. It will be held on 2nd floor (previously N.K Shopping Mall) at Janak Chowk, Janakpur -03. There is a banner there currently.",
        },
    
        
      ];
     
      const expert = [
        {
          id: 1,
          image: './dummy2.png',
          name: "Anish Adhikari",
          position: "Software Engineer at Google",
          desc: "Previously at Uber and now as a Software Engineer at Google, Anish will share insights on how to crack the Big Tech Coding Interviews.",
        },
        {
          id: 2,
          image: './dummy2.png',
          name: "Pratiksha Sharma",
          position: "Vice President, Goldman Sachs",
          desc: "A software engineer at Goldman Sachs, Pratiksha specializes in innovative tech solutions within dynamic financial environments, driven by precision and forward-thinking strategies.",
        },
        
      ];
      const speakers = [
        {
          id: 1,
          name: "Anish Adhikari",
          position: "Software Engineer, Google",
          image: './dummy2.png',
          logo: './google-logo.png',
          desc: "​Mr.Anish is a skilled software engineer currently at Google. He specializes in Google Cloud services. Previously at Uber, he is proficient at developing high-performance systems.",
          topic: "Best Practices in Python",
        },
        {
          id: 2,
          name: "Apoorva Lal",
          position: "Data Scientist, Netflix",
          image: './dummy2.png',
          logo: './netflix_logo.jpg',
          desc: "​Mr.Apoorva, a Data Scientist at Netflix leverages analytics to drive content recommendations and enhance viewer experience through data-driven insights and machine learning algorithms.",
          topic: "Experimentation and Causal Machine Learning",
        },
        {
          id: 3,
          name: "Bidit Sharma",
          position: "Production Engineer, Meta",
          image: './dummy2.png',
          logo: './facebook.png',
          desc: "​Mr.Bidit Sharma is a Senior Production Engineer at Meta specializing in ensuring seamless operations and scalability of infrastructure to support innovative technological advancements and user experiences.",
          topic: "Fires and Fixes in Hyperscale",
        },
        {
          id: 4,
          name: "Diwas Timilsina",
          position: "Senior Software Engineer, Airbnb",
          image: './dummy2.png',
          logo: './airbnd_logo.png',
          desc: "​Mr. Diwas Timilsina, a Senior Software Engineer at Airbnb, specializes in distributed systems, optimizing platform performance, and creating seamless user experiences with over 7+ years of industry experience.",
          topic: "Introduction to Distributed Systems",
        },
        {
          id: 5,
          name: "Shauharda Khadka",
          position: "Applied Data Scientist, Microsoft",
          image: './dummy2.png',
          logo: './microsoft.jpg',
          desc: "​Mr. Shauharda Khadka, a Senior Data & Applied Scientist at Microsoft, leverages machine learning and advanced analytics to drive innovation and data-driven decisions across various high-impact projects.",
          topic: "Reinforcement Learning",
        },
        {
          id: 6,
          name: "Suman Nepal",
          position: "Senior Software Engineer, Oracle",
          image: './dummy2.png',
          logo: 'oracle_logo.png',
          desc: "​Mr. Suman Nepal is a senior software engineer at Oracle working on developing data visualization software on the web, primarily with HTML, CSS, and JavaScript.",
          topic: "JavaScript Essentials: Exploring Overlooked Concepts",
        },
      ];
  return (
    <div>
        <Header/>
        <section className="bg-boot text-light p-5 p-lg-0 pt-lg-5 text-center">
        <div className="container">
          
          <div className="d-md-flex align-items-center justify-content-between">
            <div className="text-start pb-5">
              <h1 className="boot-head text-start">
                Meet Our Experts
              </h1>
              <p className="lead py-4 text-start">
              We come from diverse backgrounds, including FAANG companies, the Big Four, Ivy League, and regions spanning the US, Europe, Asia, and Australia. They contribute as managers, advisors, consultants, or architects.
              </p>
              <Link href='/contact'><button className="btn btn-start btn-lg text-start">
                Let&apos;s Meet
              </button></Link>
            </div>
            <img src='./team.png' className="img-fluid boot-free" />
          </div>
        </div>
      </section>
      <div className="svg-boot"></div>
      <section className="p-sm-5">
        <div className="container pt-5">
          <div className="row experts g-4">
            <div className="col-md">
              <div className="card ">
                <div className="card-body p-md-5">
                  <div className="row  bg-experts  ">
                    <div className="col-md-6 text-start">
                      <div>
                        <span className="feature py-1 px-2">
                          Featured Speakers
                        </span>
                      </div>
                      <h4 className="meet-experts pt-4 pt-md-3">
                        Meet the Panel Speakers
                      </h4>
                      <div className="learn-expert">
                        Learn from industry-leading experts in our upcoming zoom
                        session
                      </div>
                    </div>
                    <div className="col-md-6 text-start ">
                      {expert.map((elem, index) => (
                        <div className="row mt-5 mt-md-3" key={index}>
                          <div className="col-md-3  col-xl-2">
                            <img
                              src={elem.image}
                              className="img-fluid img-experts"
                            />
                          </div>
                          <div className="col-md-9 col-xl-10">
                            <div className="expert-name">{elem.name}</div>
                            <div className="expert-desc">{elem.position}</div>
                            <div className="expert-desc">{elem.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="py-4  text-start text-md-center">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-sm-5">
        <div className="container ">
          <div className="row experts g-4">
            <div className="col-md">
              <div className="card ">
                <div className="card-body px-0 px-md-5">
                  <div className="row  bg-experts  ">
                    <h4 className="meet-experts pt-4 pt-md-3 text-center">
                      Featured Big Tech Sessions
                    </h4>
                    <div className="learn-expert text-center">
                      Meet the speakers from Big Tech Companies who will be
                      sharing their insights at our special session via zoom
                    </div>
                  </div>

                  <div className="row mt-3  pb-5">
                    {speakers.map((elem, index) => (
                      <div
                        key={index}
                        className=" col-lg-4  px-0 mt-3  mt-md-5 "
                      >
                        <div className=" box-speakers m-3 pt-4 px-4 ">
                          <div className="row ">
                            <div className="col-3 px-0">
                              <img
                                src={elem.image}
                                className="img-fluid img-speakers"
                              />
                            </div>
                            <div className="col-7 text-start ">
                              <div className="speaker-name">{elem.name}</div>
                              <div className="speaker-pos">{elem.position}</div>
                            </div>
                            
                          </div>

                          <div className=" text-start pt-2 speaker-pos">
                            {elem.desc}
                          </div>
                          <div className="row speaker-align">
                            {/* <div className="  text-center speaker-name ">
                              Topic: {elem.topic}
                            </div> */}
                            <div className="text-center   pb-4 pt-2">
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="svg-bottom"></div>
      <Faq

          title=" FAQ"
          description="Simple answers to popular questions"
          faq={faq}
           />

      <Footer/>
      
    </div>
  )
}

export default page
