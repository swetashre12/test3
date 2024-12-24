import Link from "next/link";
import Header from '../components/Header/Header';
import Footer from "@/app/components/Footer/Footer";
import { client } from "../constant/client";
import {  Key } from "react";
import './blogs.css'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Join Neelgai | Careers in Software Development, AI, Mobile Apps & Cybersecurity',
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
      canonical: 'https://www.neelgai.com/blogs',
    },
    openGraph: {
      title: 'Blogs - Neelgai',
      description: 'Discover Neelgai\'s mission and values in software development.',
      url: 'https://www.neelgai.com/blogs',
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
      title: 'Blogs - Neelgai',
      description: 'Learn about Neelgai and our software development services.',
      images: [
        'https://www.neelgai.com/static/media/neelgai-resource.33b90f763a3d91cf9f35.png',
      ],
    },
  };
  
interface Blog {
    _id: string;
    title: string;
    details: Array<{
      _key: string;
      children: Array<{ text: string }>;
    }>;
    tags: string[];
    slug: { current: string };
    date: string;
    blog_image?: { asset: { url: string } };
    image?: { asset: { url: string } };
    postedBy?: Array<{
      name: string;
      image?: { asset: { url: string } };
    }>;
  }

const POSTS_QUERY =  `*[_type == "blog"]  | order(date desc){ _id, title,details,tags,slug,date,
blog_image {
  asset -> {
    url
  }
},
 image {
  asset -> {
    url
  }
}
  ,postedBy[]->{
          name,
          image {
  asset -> {
    url
  }
}
        } 
      
 }`;

const options = { next: { revalidate: 30 } };

export default async function IndexPage() {
    const truncateText = (text = "", length:number) => {
        if (!text || text.length <= length) return text;
        return text.substring(0, length) + "...";
      };
      const blogs = await client.fetch<Blog[]>(POSTS_QUERY, {}, options);

  return (
    <>
    <Header/>
    
    <div className="container mb-5">
        <div className="row mt-lg-5   text-start mx-0 blog">
       
          {blogs?.map((blog, index) => (
            <div key={index} className="col-lg-6 px-0 mt-5 pt-5 blog-box">
              
           
              <Link href={`/blogs/${blog.slug.current}`} title="Blog">
                <h1 className="blog-title me-lg-3">{blog.title}</h1>
              </Link>

              {/* <img
                    src={blog.image.url}
                    alt=""
                    className="img-fluid"
                  /> */}
              <div className="blog-date"> {new Date(blog.date).toLocaleDateString()}</div>
              <div className="col-sm-10 text-start pt-2">
                
                {blog.details &&
                  blog.details.slice(0, 1).map((block) => (
                    <p key={block._key}>
                      {truncateText(
                        block.children?.map((child) => child.text).join(" ") || "",
                        250 
                      )}
                    </p>
                  ))}
              </div>
              <div className="row mx-0 my-3">
                {blog?.tags?.map((elem: string , index: Key ) => (
                  <div
                    key={index}
                    
                    className="col-5 col-md-3 tag-text me-2 text-center mt-2"
                  >
                    <div className="tag-title">{elem}</div>
                  </div>
                ))}
              </div>
              <div className="row">
                {blog?.postedBy?.map((elem , index) => (
                  <div key={index} className="col-xs-10 col-md-6">
                    <div className="d-flex">
                      <div>
                        <img
                          src={elem?.image?.asset.url}
                          alt="image-blog"
                          className="img-fluid img-experts me-3 mt-2"
                        />
                      </div>
                      <div className="my-auto">{elem.name}</div>
                    </div>
                  </div>
                ))}




              </div>
              {/* <div className="m-2">
                {blog.image && (
                  <img
                    src={blog.image.asset.url}
                    alt="image-blog"
                    className="img-fluid"
                  />
                )}
                
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <Footer/>
      </>
  );
}