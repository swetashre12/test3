import React from 'react';
import { Metadata } from 'next';
import Header from '../components/Header/Header';
import Image from "next/image";
import HiringDetails from '../components/HiringDetails/HiringDetails';
import './hiring.css';
import Footer from '../components/Footer/Footer';

export const metadata: Metadata = {
    title: 'Hiring - Neelgai',
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
      canonical: 'https://www.neelgai.com/hiring',
    },
    openGraph: {
      title: 'Hiring - Neelgai',
      description:
        'Discover Neelgai\'s mission and values in software development.',
      url: 'https://www.neelgai.com/hiring',
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
      title: 'Hiring - Neelgai',
      description: 'Learn about Neelgai and our software development services.',
      images: [
        'https://www.neelgai.com/static/media/neelgai-resource.33b90f763a3d91cf9f35.png',
      ],
    },
  };

export default function page() {
  return (
    <div className="hire">
      <Header/>
      <h1 style={{ position: 'absolute', opacity: 0 }}>
       Hiring
      </h1>
      <section className="bg-hire text-light pt-5 p-lg-0 pt-lg-5 text-center">
        <div className="container">
          {/* <div className="py-4 py-md-0 text-md-end">
            <button className="btn btn-learnt  text-start">
              <Link to="/bootcamp/details"> What You'll Learn</Link>
            </button>
          </div> */}
          <div className="d-md-flex align-items-center justify-content-between">
            <div className="text-start pb-5 col-md-6">
              <h2 className="boot-head text-start">
                Find the career of your dreams
              </h2>
              <p className="lead py-4 text-start">
                We know that finding a meaningful and rewarding job can be a
                long journey. Our goal is to make that process as easy as
                possible for you, and to create a work environment that's
                satisfying - one where you'll look forward to coming to every
                day. Start your journey with us by browsing available jobs.
              </p>
              
            </div>
            <Image 
                              src="/hiring_search.png"
                              alt="Service image"
                              width={400} 
                              height={400} 
                              className='img-fluid'
                            />
            
           
          </div>
        </div>
      </section>
      <div className="svg-hire"></div>
      <HiringDetails/>
      <Footer/>
      
    </div>
  )
}
