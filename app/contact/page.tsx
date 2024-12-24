import React from "react";
import Image from "next/image";
import Header from '../components/Header/Header';
import Footer from "@/app/components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import './contact.css'
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Contact Us - Neelgai',
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
    canonical: 'https://www.neelgai.com/contact',
  },
  openGraph: {
    title: 'Contact Us - Neelgai',
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
    title: 'Contact Us - Neelgai',
    description: 'Learn about Neelgai and our software development services.',
    images: [
      'https://www.neelgai.com/static/media/neelgai-resource.33b90f763a3d91cf9f35.png',
    ],
  },
};

const page = () => {

   
  return (
    <div>
        <Header/>
        <section className="contactus mt-5 pt-5">
        <div className="container">
          <h1 className="text-start content-title py-4">Get started with Neelgai</h1>
          <div className="row">
            <div className="col-lg-6">
              <ContactForm />
            </div>
            <div className="col-lg-6 img-over">
            <div className="text-contact">
                <div>
                  <h3 className="text-start pt-md-5">Email:</h3>
                  <p className="text-start contact-email">
                    <a href="mailto:support@neelgai.com">support@neelgai.com</a>
                  </p>
                </div>
                <div className="d-xl-flex">
                  <div className="col-8 col-sm-6 col-xl-6">
                    <h3 className="text-start pt-3">US offices:</h3>
                    <p className="text-start contact-phone">
                      Arlington, VA (HQ) <br />
                      Austin, TX
                    </p>
                  </div>
                  <div className="col-8 col-sm-6 col-xl-9">
                    <h3 className="text-start pt-3">Nepal offices:</h3>
                    <p className="text-start contact-phone">
                      Budhanilkantha, Kathmandu <br />
                      Janakchowk, Janakpur
                    </p>
                  </div>
                </div>
              </div>
             <Image 
                                           src="/contacts1.png"
                                           alt="Contact image"
                                           width={800} 
                                           height={600} 
                                           className='img-fluid'
                                         />
            </div>
          </div>
        </div>
      </section>

        <Footer/>
       
      
    </div>
  )
}

export default page
