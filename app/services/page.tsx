import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Faq from '../components/Faq/Faq';
import { Metadata } from 'next';
import Image from "next/image";
import ServiceComponents from '../components/ServiceComponents/ServiceComponents';
import './services.css'


export const metadata:Metadata = {
  title: "Neelgai Services | Software Development, AI, Mobile Apps & Cybersecurity",
  description:
    "Learn about Neelgai, a software development company dedicated to providing fast and cost-effective tech services. Discover our mission, values, and the challenges we solve for businesses.",
  keywords: [
    "Neelgai",
    "software development",
    "about us",
    "tech services",
    "mission",
    "values",
  ],
  openGraph: {
    title: "Services - Neelgai",
    description: "Discover Neelgai's mission and values in software development.",
    url: "https://www.neelgai.com/services",
    images: [
      {
        url: "https://www.neelgai.com/static/media/neelgai-resource.33b90f763a3d91cf9f35.png",
        width: 1200,
        height: 630,
        alt: "Neelgai logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services - Neelgai",
    description: "Learn about Neelgai and our software development services.",
    images: [
      "https://www.neelgai.com/static/media/neelgai-resource.33b90f763a3d91cf9f35.png",
    ],
  },
  alternates: {
    canonical: "https://www.neelgai.com/services",
  },
};
const page = () => {

  const faq = [
    {
      id: 1,
      question: "What kind of services do you provide?",
      answer:
        "We cater to a wide spectrum of clients, from startups to large enterprises, delivering custom software development, AI/ML solutions, cloud services, cybersecurity, DevOps, strategic consulting, and ongoing tech support.",
    },
    {
      id: 2,
      question: "Do you provide services not listed on this page?",
      answer:
        "Yes, we offer additional specialized services beyond those listed on our website. Please contact us directly to discuss your specific requirements and how we can meet your unique needs.",
    },
    {
      id: 3,
      question: "What is your pricing model?",
      answer: `We offer highly competitive pricing, with costs varying by project. <a href="https://www.neelgai.com/contact" target="_blank">Contact us</a>  for more details.`,
    },
  ];
  return (
    <div>
        <Header />
       <h1 style={{ position: 'absolute', opacity: 0 }}>
       Sevices
      </h1>

      <section className="service-whole">
        <div className="service-section mt-5 mt-lg-0">
          <div className="container">
            <div className="row  mt-md-5 pt-md-5 pb-3">
              <div className=" col-lg-6 text-start mt-5 pt-5 pt-lg-0 my-lg-auto">
                <h1 className="about-title text-start   pb-4 ">
                  We’re action-oriented. Share your tech vision and we will
                  bring it to life
                </h1>

                <p className=" text-desc text-start  pb-5 ">
                  Our team is experienced in various programming languages,
                  frameworks, tools, and platforms. We offer services ranging
                  from building simple websites to advanced AI models,
                  prioritizing reliability and security.
                </p>
                <a className="talk-t " href="/contact">
                  <span className="request-btn ">Book a call</span>
                </a>
              </div>

              <div className="col-lg-6  mt-lg-5">
              <Image 
                  src="/service.png"
                  alt="Service image"
                  width={500} 
                  height={500} 
                  className='img-fluid'
                />
                
               
              </div>
            </div>
          </div>
        </div>
        <div className="svg-service"></div>
        
        <ServiceComponents/>
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
