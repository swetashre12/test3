import React from 'react';
import Image from "next/image";
import "./Testimonials.css";

const Testimonials = () => {
    const client = [
        {
          id: 2,
          image: "/puru.jpeg",
          description:
            "We've been very pleased with our experience working with Neelgai. Their team was incredibly helpful in helping us find the perfect developer for our project. The work was stellar, the communication was excellent and we couldn't have been happier with the overall experience. We're excited to work with Neelgai for more projects in the future!.",
          client_name: "Puru Shah (Senior Engineer at Tesla)",
        },
        {
          id: 3,
          image:"/marlyn.jpg",
          description:
            "They are a dynamic force, consistently seeking and incorporating our feedback to ensure a stellar outcome. Their dedication is evident in helping us achieve an impressive 99.99% SLA, demonstrating a commitment to excellence and reliability. Neelgai's collaborative approach and responsiveness make them invaluable partners in achieving and surpassing service level objectives. Kudos to Neelgai's consultants for their unwavering commitment to our success!.",
          client_name: "Marlyne Hakizimana (Currently an SWE at Nvidia)",
        },
        {
          id: 4,
          image: "/ian.jpg",
          description:
            "Neelgai has been great to work with for finding Software Development Talent. From the beginning they worked with me to understand my needs, quickly sourced several potential candidates that met the criteria, facilitated interviews, and helped with the hiring onboarding process. The communication has always been quick and concise, and have helped me move quickly from the process of initial contact to hire, and on top of that charge an extremely minimal overhead cost. Will use them again and highly recommend to anyone looking to hire talent abroad.",
          client_name: "Ian Hammerstrom (Software Engineer at Amazon)",
        },
      ];
  return (
    <div className="pb-5">
      <h1 className="mt-5 pt-4 text-center">Testimonials</h1>
      <section className="section testimonials section-5">
        <div className="container  d-flex flex-column justify-content-center">
          <div className="row pb-5">
            <div className="col-12 d-flex justify-content-center">
              <h3 className="fs-1 fw-bold text-center text-primary pb-3"></h3>
            </div>
          </div>
          <div className="row pb-5 mb-3">
            <div className="col-12 col-xl-5 d-flex flex-column">
              {/* <img
                src={Images.testimonial_awards}
                className=" img-fluid w-0 "
                 alt="Testimonial awards"
              /> */}
               <Image 
                    src="/testimonials-awards.png"
                   
                    alt="Testimonial awards"
                    width={800} 
                    height={500} 
                   
                  
                    className="img-fluid w-0 "
                  />
            </div>
            <div className="col-12 col-xl-7">
              <div className="pb-4 text-start">
                {/* <img
                  src={Images.testimonial_left}
                  className=" img-fluid  "
                  width={63}  alt="Another icon"
                /> */}
                 <Image 
                    src="/testimonials-left-quote.png"
                   
                    alt="Testimonial awards"
                    width={63} 
                    height={63} 
                   
                  
                    className="img-fluid  "
                  />
              </div>
              <div className="card d-flex border-0 shadow p-5">
              {/* <img src={Images.ojaswi} className="img-fluid round-home me-4 mb-3" alt="Ojaswi photo" /> */}

              <Image 
                    src="/ojaswi.jpeg"
                   
                    alt="Ojaswi photo"
                    width={100} 
                    height={100} 
                   
                  
                    className="img-fluid round-home me-4 mb-3"
                  />
                <p className="card-text text-black-61 text-start">
                &quot;Deepak and Arbind worked wonders revamping our old website,
                  turning it into a modern infrastructure marvel. Their
                  expertise and attention to detail shine through, creating a
                  seamless, visually appealing experience. They not only met but
                  exceeded modern standards, showcasing a deep understanding of
                  the latest technologies. Neelgai&apos;s transformative touch has
                  elevated our online presence, making them strategic partners
                  dedicated to digital success. Kudos to Neelgai for breathing
                  new life into our web platform!.&quot;
                  <br />
                  <span className="fw-bold  text-wrap">
                    - Ojaswi Pandey (Data Scientist at Defense Health Agency)
                  </span>
                </p>
              </div>
              <div className="pt-4 text-end">
                

<Image 
                    src="/testimonials-right-quote.png"
                   
                    alt="Testimonial awards"
                    width={63} 
                    height={63} 
                   
                  
                    className="img-fluid  "
                  />
              </div>
            </div>
          </div>
          <div className="row">
            {client.map((elem, index) => (
              <div key={index} className="col-12 col-xl-4 mb-4">
                <div className="card border-0 shadow border-radius-34 p-4">
                  <div className="card-body">
                    <p className="card-text text-black-61">
                      <span className="fw-bold text-primary text-nowrap"></span>
                    </p>
                  </div>

                  <div className="card-body">
                    <div className="text-start">
                  <img src={elem.image} className="img-fluid round-home  mb-3 text-start"  alt={`${elem.client_name} `}/>
                  </div>
                    <p className="card-text text-black-61 text-start">
                    &quot;{elem.description}&quot;
                      <br />
                      <span className="fw-bold  text-wrap">
                        - {elem.client_name}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
