import Image from "next/image";
import Header from "./components/Header/Header";
import AnimateText from "./components/AnimateText/AnimateText";
import Services from "./components/services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

import './Homepage.css';
import { Metadata } from "next";

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
    title: "Home - Neelgai",
    description:
      "Discover Neelgai's mission and values in software development.",
    url: "https://www.neelgai.com",
    images: [
      {
        url: "https://www.neelgai.com/static/media/neelgai-resource.33b90f763a3d91cf9f35.png",
        alt: "Neelgai banner image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home - Neelgai",
    description: "Learn about Neelgai and our software development services.",
    images: [
      "https://www.neelgai.com/static/media/neelgai-resource.33b90f763a3d91cf9f35.png",
    ],
  },
  alternates: {
    canonical: "https://www.neelgai.com",
  },
 
};



export default function Home() {
  return (
   
    <div>
       
      <Header/>
      <h1 style={{ position: 'absolute', opacity: 0 }}>
      Neelgai
      </h1>
      <section className="section-home pt-5 mt-3">
        <div className="container">
          <div className=" row mt-5 pt-3 justify-content-center">
            <div className="col-sm-10  col-xl-6 ">
              {/* <div className="web-text">
                <span className="app-text">web app</span>
              </div> */}
              <div style={{ position: "relative", overflow: "hidden" }}>
                <div
                  className="web-text"
                  style={{
                    lineHeight: "100px",
                  }}
                >
                 <AnimateText 
                texts={["Web app", "Security", "Infrastructure", "AI"]} 
                animationDuration={0.3} 
                className="app-text"
              />
                </div>
              </div>
              <div className="web-text">for your business</div>
              <div className="text-desc mt-4">
                We build software, AI models, web and mobile applications, and
                manage cloud infrastructure and cybersecurity at a low cost.
                With a global presence, we operate 24/7 to meet tight deadlines.
                We adopt latest technologies to stay relevant with the current
                tech landscape.
              </div>
            </div>
            <a className="talk-t my-5 text-center" href="/contact">
              <span className="talk-btn">let&apos;s talk</span>
            </a>

            <Image 
                    src="/default.png"
                   
                    alt="Neelgai Banner"
                    width={2000} 
                    height={100} 
                    priority={true}
                  
                    className="img-fluid "
                  />


              
            <div className="is-centered pt-5">
              <h1 className="Tittle-partner text-center">
                Trusted by enterprises, scale-ups and startups.
              </h1>
              <div className=" col-md-6 d-flex justify-content-around my-auto text-center mx-auto mt-3">
                <div>
                <Image 
                    src="/aasha.png"
                    alt="Aasha logo"
                    width={80} 
                    height={80} 
                    className="img-fluid"
                  />
                </div>
                <div className="my-auto">
                <Image 
                    src="/danfe.png"
                    alt="Danfe logo"
                    width={80} 
                    height={80} 
                    className="img-fluid"
                  />
                </div>
                <div className="my-auto">
                <Image 
                    src="/vc.png"
                    alt="VC logo"
                    width={80} 
                    height={80} 
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="svg-text"></div>
      <Services/>
      <Testimonials/>

      <section className=" start-connect pt-5 mt-5">
        <div className="svg-bottom"></div>
        <div className="text-center start-call pt-3">
          <span>Get started with Neelgai</span>
          <br></br>
          <span>in three easy steps</span>
        </div>
        <div className="book-content pt-5">
          <div className=" container-fluid pt-4 ">
            <div className="row">
              <div className="col-lg-7 schedule-contents pt-5 my-3">
                <div className="d-flex gp-bet ">
                  <div className="num-circle ">1</div>
                  <div className="book-text ">Schedule a call</div>
                </div>
                <div className="call-desc my-3">
                  <div className="call-more">
                    <p className="text-start para-call">
                      Book a meeting with our experts to discuss your tech needs
                      and goals.
                    </p>
                  </div>
                </div>

                <div className="d-flex gp-bet">
                  <div className="num-circle ">2</div>
                  <div className="book-text ">Define project scope</div>
                </div>
                <div className="call-desc my-3">
                  <div className="call-more">
                    <p className="text-start para-call">
                      We'll outline the project roadmap, create a detailed
                      design, provide an accurate cost and timeline estimation.
                    </p>
                  </div>
                </div>
                <div className="d-flex gp-bet">
                  <div className="num-circle ">3</div>
                  <div className="book-text ">Project execution</div>
                </div>
                <div className="call-desc mt-3">
                  <div className="call-more">
                    <p className="text-start para-call pb-2">
                      Once you are satisfied with the project scope, we onboard
                      a dedicated team of engineers and project managers to
                      promptly execute the project.
                    </p>

                    <a className="talk-t " href="/contact">
                      <span className="talk-btn2  float-start">
                        Get started
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 px-0">
              {/* <Image 
                    src="/booking.png"
                    alt="Booking logo"
                    width={900} 
                    height={100} 
                    className="img-fluid"
                  /> */}
                  <img
                src="/booking.png"
                  className=" img-fluid book-img "
                  alt="Booking logo"
                />
                
                

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>


      
      

    </div>
  );
}
