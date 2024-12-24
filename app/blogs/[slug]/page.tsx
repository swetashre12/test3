// import { PortableText, type SanityDocument } from "next-sanity";

// import Header from '@/app/components/Header/Header';
// import Footer from "@/app/components/Footer/Footer";
// import { client } from "../../constant/client";
// import './BlogDetails.css'
// import { Metadata } from "next";



// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//     const { slug } = await params;
//     const blog = await client.fetch<SanityDocument>(POST_QUERY, { slug }, options);
  
//     if (!blog) {
//       return {
//         title: 'Blog not found',
//         description: 'The requested blog post could not be found.',
//         openGraph: {
//           title: 'Blog not found',
//           description: 'The requested blog post could not be found.',
//         },
//         twitter: {
//           title: 'Blog not found',
//           description: 'The requested blog post could not be found.',
//         },
//       };
//     }
  
//     return {
//       title: blog.title,
//       description: blog?.tags?.join(', ') || 'Read more about this topic.',
//       keywords: blog?.tags || [],
//       alternates: {
//         canonical: `https://www.neelgai.com/blogs/${blog.slug.current}`,
//       },
//       openGraph: {
//         title: blog.title,
//         description: 'A detailed blog post from Neelgai.',
//         url: `https://www.neelgai.com/blogs/${blog.slug.current}`,
//         images: [
//           {
//             url: 'https://www.neelgai.com/static/media/default-blog-image.png',
//             alt: blog.title,
//           },
//         ],
//         siteName: 'Neelgai Blog',
//         type: 'article',
//       },
//       twitter: {
//         card: 'summary_large_image',
//         title: blog.title,
//         description: 'A detailed blog post from Neelgai.',
//         images: [
//           'https://www.neelgai.com/static/media/default-blog-image.png',
//         ],
//       },
//     };
//   }
// interface Blog {
//     _id: string;
//     title: string;
//     details: Array<{
//       _key: string;
//       children: Array<{ text: string }>;
//     }>;
//     tags: string[];
//     slug: { current: string };
//     date: string;
//     blog_image?: { asset: { url: string } };
//     image?: { asset: { url: string } };
//     postedBy?: Array<{
//       name: string;
//       image?: { asset: { url: string } };
//     }>; 
//   }

// const POST_QUERY = `*[_type == "blog" && slug.current == $slug][0] { _id, title,details,tags,slug,date,
// blog_image {
//   asset -> {
//     url
//   }
// },
//  image {
//   asset -> {
//     url
//   }
// }
//   ,postedBy[]->{
//           name,
//           image {
//   asset -> {
//     url
//   }
// }
//         } 
      
//  }
// `;




// const options = { next: { revalidate: 30 } };

// export default async function PostPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = await params;
//   const blog = await client.fetch<SanityDocument>(POST_QUERY, { slug }, options);

//   if (!blog) {
//     return (
//       <div>
//         <h1>Blog not found</h1>
//       </div>
//     );
//   }
 
 
    
    

//   return (
//     <>
//     <Header/>
//     <div className="container mt-5 pt-5 col-8">
//         <h1 className="blog-title text-start">{blog?.title}</h1>
//         <div className="blog-date text-start my-4">{new Date(blog?.date).toLocaleDateString()}</div>
//         <div className="row">
//                 {(blog?.postedBy as Blog["postedBy"])?.map((elem, index: number) => (
//                   <div key={index} className="col-xs-10 col-md-4">
//                     <div className="d-flex">
//                       <div>
//                         <img
//                           src={elem.image?.asset?.url}
//                           alt="image-blog"
//                           className="img-fluid img-experts me-3 mt-2 "
//                         />
                        
//                       </div>
//                       <div className="my-auto">{elem.name}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
        
//         {blog?.blog_image&& (<img src={blog?.blog_image?.asset?.url} alt="image-blog" className="img-fluid img-detail-blog my-3 mx-auto" />)}
        
//         <div
//           className="text-start skill-more py-4"
          
//         >{Array.isArray(blog.details) && <PortableText value={blog.details} />}</div>
        
        
//       </div>
//       <Footer/>
//       </>
//   );
// }