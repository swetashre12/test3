import React from 'react'

import Header from '../components/Header/Header';
import { Metadata } from 'next';

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
  return (
  <div>
    
      <Header/>
      <h1 style={{ position: 'absolute', opacity: 0 }}>
      Neelgai
      </h1>
      <div>this is about us</div>
  </div>
  
  )
}

export default AboutPage
