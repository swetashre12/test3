import { TypedObject } from "@portabletext/types";
import { PortableText } from "next-sanity";
import { Metadata } from "next";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import { client } from "../../constant/client";
import "./BlogDetails.css";

interface Author {
  name: string;
  image?: {
    asset: {
      url: string;
    };
  };
}

interface BlogPost {
  _id: string;
  title: string;
  details: TypedObject | TypedObject[];
  tags: string[];
  slug: { current: string };
  date: string;
  blog_image?: {
    asset: {
      url: string;
    };
  };
  postedBy?: Author[];
}

interface PageProps {
  params: Awaited<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const blog = await fetchBlog(params.slug);
  if (!blog) return getNotFoundMetadata();

  return {
    title: blog.title,
    description: blog.tags?.join(", ") || "Read more about this topic.",
    keywords: blog.tags,
    alternates: {
      canonical: `https://www.neelgai.com/blogs/${blog.slug.current}`,
    },
    openGraph: {
      title: blog.title,
      description: "A detailed blog post from Neelgai.",
      url: `https://www.neelgai.com/blogs/${blog.slug.current}`,
      images: [
        {
          url: "https://www.neelgai.com/static/media/default-blog-image.png",
          alt: blog.title,
        },
      ],
      siteName: "Neelgai Blog",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: "A detailed blog post from Neelgai.",
      images: ["https://www.neelgai.com/static/media/default-blog-image.png"],
    },
  };
}

async function fetchBlog(slug: string): Promise<BlogPost | null> {
  try {
    return await client.fetch<BlogPost>(
      POST_QUERY,
      { slug },
      { next: { revalidate: 30 } }
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
}

function getNotFoundMetadata(): Metadata {
  return {
    title: "Blog not found",
    description: "The requested blog post could not be found.",
    openGraph: {
      title: "Blog not found",
      description: "The requested blog post could not be found.",
    },
    twitter: {
      title: "Blog not found",
      description: "The requested blog post could not be found.",
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const blog = await fetchBlog(params.slug);

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <>
      <Header />
      <main className="container mt-5 pt-5 col-8">
        <h1 className="blog-title text-start">{blog.title}</h1>
        <div className="blog-date text-start my-4">
          {new Date(blog.date).toLocaleDateString()}
        </div>

        <div className="row">
          {blog.postedBy?.map((author, index) => (
            <div key={index} className="col-xs-10 col-md-4">
              <div className="d-flex">
                {author.image && (
                  <img
                    src={author.image.asset.url}
                    alt={`${author.name}'s profile`}
                    className="img-fluid img-experts me-3 mt-2"
                  />
                )}
                <div className="my-auto">{author.name}</div>
              </div>
            </div>
          ))}
        </div>

        {blog.blog_image && (
          <img
            src={blog.blog_image.asset.url}
            alt={blog.title}
            className="img-fluid img-detail-blog my-3 mx-auto"
          />
        )}

        <div className="text-start skill-more py-4">
          <PortableText value={blog.details} />
        </div>
      </main>
      <Footer />
    </>
  );
}

const POST_QUERY = `*[_type == "blog" && slug.current == $slug][0] {
  _id,
  title,
  details,
  tags,
  slug,
  date,
  blog_image {
    asset-> {
      url
    }
  },
  postedBy[]-> {
    name,
    image {
      asset-> {
        url
      }
    }
  }
}`;
