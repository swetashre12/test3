import React from 'react'
import Image from "next/image";
import Header from '../components/Header/Header';
import MarketProblem from '../components/MarketProblem/MarketProblem';
import Footer from '../components/Footer/Footer';
import Faq from '../components/Faq/Faq';
import { Metadata } from 'next';
import './about.css'

export const metadata: Metadata = {
  title: "Neelgai | Software Development, AI, Mobile Apps & Cybersecurity",
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
    title: "About - Neelgai",
    description:
      "Discover Neelgai's mission and values in software development.",
    url: "https://www.neelgai.com/about",
    images: [
      {
        url: "https://www.neelgai.com/static/media/neelgai-resource.33b90f763a3d91cf9f35.png",
        alt: "Neelgai banner image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Neelgai",
    description: "Learn about Neelgai and our software development services.",
    images: [
      "https://www.neelgai.com/static/media/neelgai-resource.33b90f763a3d91cf9f35.png",
    ],
  },
  alternates: {
    canonical: "https://www.neelgai.com/about",
  },
  icons: {
    icon: "/favicon.png",
  },
};

const AboutPage = () => {

  const faq = [
    {
      id: 1,
      question: "How do we reach out to you?",
      answer: `You can either contact us via our <a href="https://www.neelgai.com/contact">contact-us</a>  form or send us an email to <a href="mailto:support@neelgai.com">support@neelgai.com</a>`,
    },
    {
      id: 2,
      question: "Where is the company located?",
      answer: `Currently, our operations span the United States and Nepal. Our development team is predominantly based in Nepal, leveraging local talent, while our executive team is distributed across various locations within the United States. This setup allows us to combine cost-efficiency with strategic leadership presence, ensuring effective project management and execution across both regions.`,
    },
    {
      id: 3,
      question: "What kind of developers would work on the project?",
      answer:
        "We have an expert in-house team comprising Frontend, Backend, Mobile App, AI/ML full-stack developers, as well as dedicated DevOps and Security specialists most of whom have 5+ years of professional work experiences.",
    },
    {
      id: 4,
      question: "What tools/tech stack is your team good at?",
      answer:
        "Our team excels in a diverse tech stack including Python, Java, React.js, AWS, TensorFlow, and cybersecurity tools. With expertise in web and mobile development, AI/ML frameworks, cloud platforms, and DevOps, we deliver innovative solutions tailored to client needs across various industries, ensuring robust and effective project outcomes.",
    },
    {
      id: 5,
      question: "What kind of projects do you generally work on?",
      answer:
        "Some of the projects that we have worked on include but not limited to: </br></br> <div> - Developing a new e-commerce platform for a major retail client.</div> <div> - Implementing a CRM system for a healthcare provider to improve patient management.</div><div> - Designing and deploying a cloud infrastructure solution for a financial services company.</div><div> - Launching a mobile app for a transportation company to enhance customer experience.</div><div> - Conducting a cybersecurity audit and implementing recommendations for a government agency.</div><div> - Applying AI and machine learning algorithms to optimize business processes for a tech startup.</div>",
    },
  ];

  const about = [
    {
      id: 1,
      image: '/communication.png',
      tittle: "Communication",
      description:
        " Communicate frequently to make quick decisions and prevent misunderstandings",
    },
    {
      id: 2,
      image: '/adaptability.png',
      tittle: "Adaptability",
      description:
        " Seamlessly evolving with user needs and technological advancements",
    },
    {
      id: 3,
      image: '/value.png',
      tittle: "Value centric",
      description:
        " Provide quality product and services at a lowest cost possible ",
    },
    {
      id: 4,
      image: '/collaboration.webp',
      tittle: "Collaboration",
      description:
        " Fostering a culture of collaboration, teamwork, and mutual respect",
    },
    {
      id: 5,
      image: '/hr.png',
      tittle: "Simplicity",
      description:
        " Simplify complex ideas to create solutions that are easier to understand.",
    },
  ];
  return (
  <div>
    
      <Header/>
      <h1 style={{ position: 'absolute', opacity: 0 }}>
        About us
      </h1>
      <section className="section-about">
          <div className="mission-section">
            <div className="container">
              <div className="row mt-md-5 pt-md-5 pb-3">
                <div className="col-lg-6 text-start mt-5 pt-5 pt-lg-0 my-lg-auto">
                  <h2 className="about-title text-start pb-4 ">
                    We’re on a mission to provide fast and cost-effective tech
                    services.
                  </h2>

                  <p className=" text-desc text-start  pb-4 ">
                    Struggling to initiate your product ideas due to limited
                    tech expertise, unproductive ad hoc works, and tight
                    deadlines? We are here to take away your tech burdens so
                    that you can focus on what truly matters to the business
                    without worrying about time and cost.
                  </p>
                  <a className="talk-t" href="/contact">
                    <span className="request-btn ">Book a call</span>
                  </a>
                </div>

                <div className="col-lg-5  mt-5">
               
                <Image 
                  src="/about-test.png"
                  alt="About image"
                  width={600} 
                  height={600} 
                  className='img-fluid'
                />
                  
                  
                </div>
              </div>
            </div>
          </div>
          <div className="svg-about"></div>

          
          <MarketProblem/>

          <div className="container pb-5 mb-5">
            <div className="text-center pt-5">
              <h1 className="explore-title py-5 my-5">
                We built Neelgai to solve these challenges
              </h1>
              <p className="pro-service pt-5">NEELGAI &apos;S</p>
              <div className="col-md-6 mx-auto">
                <h1 className="pro-description px-md-5">Guiding principles</h1>
                <p className="pt-2">
                  These values guide our decisions and actions, ensuring that we
                  create a positive and lasting impact on our clients.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              {about.map((elem, index) => (
                <div key={index} className=" col-lg-4  px-0 mt-3  mt-md-5 ">
                  <div className=" box-about m-3  ">
                    <div className="text-center icon-skill">
                      <img
                        src={elem.image}
                        alt="image-blog"
                        className="img-fluid "
                      />
                    </div>
                    <div className="text-center abt-topic py-2">
                      {elem.tittle}
                    </div>
                    <div className="text-center skill-more">
                      {elem.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          
          </div>
          <div className="svg-bottom "></div>
          <Faq

          title=" FAQ"
          description="Simple answers to popular questions"
          faq={faq}
           />
        </section>
            <Footer/>
      </div>
 
  
  )
}

export default AboutPage
