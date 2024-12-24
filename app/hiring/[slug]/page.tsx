import { Metadata } from 'next';
import parse from "html-react-parser";
import Link from "next/link";
import Header from '../../components/Header/Header';
import Footer from "@/app/components/Footer/Footer";
import { job } from '@/app/constant/job';
import './hiringDetail.css';


import { MdKeyboardArrowRight } from "react-icons/md";

import { notFound } from "next/navigation";


export async  function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await Promise.resolve(params);
  const jobDetail = job.find((j) => j.slug === slug);

  if (!jobDetail) {
    return {
      title: 'Job not found - Neelgai',
      description: 'The job you are looking for could not be found.',
    };
  }

  return {
    title: `${jobDetail.job_title} - Hiring at Neelgai`,
    description: `Join our team as a ${jobDetail.job_title} in ${jobDetail.city}, ${jobDetail.country}. ${jobDetail.job_desc.substring(0, 150)}...`,
    keywords: [
      'Neelgai',
      'software development',
      'careers',
      'job openings',
      jobDetail.job_title,
      jobDetail.city,
      jobDetail.country,
    ],
    alternates: {
      canonical: `https://www.neelgai.com/hiring/${slug}`,
    },
    openGraph: {
      title: `${jobDetail.job_title} - Hiring at Neelgai`,
      description: `Join our team as a ${jobDetail.job_title} in ${jobDetail.city}, ${jobDetail.country}`,
      url: `https://www.neelgai.com/hiring/${slug}`,
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
      title: `${jobDetail.job_title} - Hiring at Neelgai`,
      description: `Join our team as a ${jobDetail.job_title} in ${jobDetail.city}, ${jobDetail.country}`,
      images: [
        'https://www.neelgai.com/static/media/neelgai-resource.33b90f763a3d91cf9f35.png',
      ],
    },
  };
}
  
  
 
  export async function generateStaticParams() {
    return job.map((j) => ({
      slug: j.slug,
    }));
  }
  
  export default async function HiringDetail({ params }: { params: { slug: string } }) {
    const { slug } = await Promise.resolve(params);
    const jobDetail = job.find((j) => j.slug === slug);
  
    if (!jobDetail) {
      notFound(); 
    }
    

    return (
        <div className="hire-detail">
          
          <Header />
          <div className="bg-detail container">
            <h4 className="pt-5 text-center">Neelgai</h4>
            <h1 className="text-center">{jobDetail.job_title}</h1>
            <p className="text-center">
              {jobDetail.city}, posted on {jobDetail.post_date}
            </p>
    
            {jobDetail.application_closed === "yes" ? (
              <div className="application-closed-tag text-center">
                <span className="closed">Application Closed</span>
              </div>
            ) : (
              <div className="more-hire text">
                <Link href="https://neelgai.zohorecruit.com/forms/283fb6777ff26df872dc7bc7cf285a9e982f42f521079726f426f3e20822f8b7">
                  <button className="btn btn-success btn-more">I'm interested</button>
                </Link>
              </div>
            )}
    
            <div className="d-flex justify-content-center">
              <div className="col-md-10 text-start jb-list">
                <Link href="/hiring">
                  <span className="mb-2">Job listing</span>
                </Link>
                <span className="jb-detail">
                  <MdKeyboardArrowRight size={24} />
                  Job details
                </span>
                <div className="bor-hire mt-2"></div>
                <div className="row pt-2">
                  <div className="col-md-9">
                    <h5 className="job-dest">Job Description</h5>
                   
                     <div className="job-child">{parse(jobDetail?.job_desc || "")}</div>

                    <h5 className="jb-req py-4">Responsibilities</h5>
                    {(jobDetail.responsibilities || []).map((elem, index) => (
                      <div key={index}>
                        <ul>
                          <li>{elem.name}</li>
                        </ul>
                      </div>
                    ))}
                    {jobDetail.requirements && jobDetail.requirements.length > 0 && (
                      <>
                        <h5 className="job-require py-4">Requirements</h5>
                        {jobDetail.requirements.map((elem, index) => (
                          <div key={index}>
                            <ul>
                              <li>{elem.name}</li>
                            </ul>
                          </div>
                        ))}
                      </>
                    )}
                    {jobDetail.qualification && jobDetail.qualification.length > 0 && (
                      <>
                        <h5 className="py-4">Preferred Qualifications</h5>
                        {jobDetail.qualification.map((elem, index) => (
                          <div key={index}>
                            <ul>
                              <li>{elem.name}</li>
                            </ul>
                          </div>
                        ))}
                      </>
                    )}
                    {jobDetail.not_required && jobDetail.not_required.length > 0 && (
                      <>
                        <h6 className="py-5">Not Required but Great to have</h6>
                        {jobDetail.not_required.map((elem, index) => (
                          <div key={index}>
                            <ul>
                              <li>{elem.name}</li>
                            </ul>
                          </div>
                        ))}
                      </>
                    )}
    
                    <h5 className="py-4 job-require">Benefits</h5>
                    {(jobDetail.benefits || []).map((elem, index) => (
                      <div key={index}>
                        <ul>
                          <li>{elem.name}</li>
                        </ul>
                      </div>
                    ))}
    
                    {jobDetail.duration && jobDetail.duration.length > 0 && (
                      <>
                        <span className="py-4 job-require">Duration</span>: {jobDetail.duration}
                      </>
                    )}
                    <div className="more-hire text-start py-4">
                      <Link href="https://neelgai.zohorecruit.com/forms/283fb6777ff26df872dc7bc7cf285a9e982f42f521079726f426f3e20822f8b7">
                        <button className="btn btn-success btn-more">I'm interested</button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-3 bor-left">
                    <h5 className="job-dest">Job Information</h5>
                    <div className="jb-ind pt-2">Industry</div>
                    <div className="jb-small">{jobDetail.industry}</div>
                    <div className="jb-ind pt-3">Work Experience</div>
                    <div className="jb-small">{jobDetail.Experience}</div>
                    <div className="jb-ind pt-3">City</div>
                    <div className="jb-small">{jobDetail.city}</div>
                    <div className="jb-ind pt-3">Country</div>
                    <div className="jb-small">{jobDetail.country}</div>
                    {jobDetail.start_date && jobDetail.start_date.length > 0 && (
                      <>
                        <div className="jb-ind pt-3">Start Date</div>
                        <div className="jb-small">{jobDetail.start_date}</div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <Footer />
        </div>
      );
    }