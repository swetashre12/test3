import Image from "next/image";
import Header from "./components/Header/Header";
import AnimateText from "./components/AnimateText/AnimateText";
import Services from "./components/services/Services";


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
  icons: {
    icon: "/favicon.png",
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
              <span className="talk-btn">lets talk</span>
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


      
      

    </div>
  );
}
