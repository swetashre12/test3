"use client";
import React, { useState, useEffect, useRef } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";

const ServiceComponents = () => {

    const [activeService, setActiveService] = useState("elem-1");
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "We develop web apps tailored to your needs",
      color: "#FEF0D8",
      tab_decs: [
        {
          id: 1,
          title: "Design with React",
          tab_child: [
            {
              id: 1,
              color: "#FEF0D8",
              title:
                "Design web and mobile apps with Modern Frontend Framework",
              description:
                "We create applications for websites, smartphones, and tablets, ensuring your business stays visible in the digital world. Additionally, we handle SEO for quicker search results and address any security vulnerabilities associated with your web presence.",
              image: '/web.jfif',
            },
          ],
        },
        {
          id: 2,
          title: "Build ApIs",
          tab_child: [
            {
              id: 1,
              title:
                "Facilitate seamless communication between different software systems with our API development services.",
              description:
                "Our team ensures the API services are robust and efficient, enhancing connectivity within your software ecosystem.",
              image: '/api.jfif',
            },
          ],
        },
        {
          id: 3,
          title: "DB Optimization",
          tab_child: [
            {
              id: 1,
              title:
                "Efficiently organize and manage your data with our database development expertise.",
              description:
                "We build secure and scalable databases, ensuring the seamless storage and retrieval of information to empower your business with data-driven insights..",
              image: '/db.jfif',
            },
          ],
        },
        {
          id: 4,
          title: "Mobile App",
          tab_child: [
            {
              id: 1,
              title: "Design mobile apps ",
              description:
                "We create mobile applications designed to enhance user experience and meet specific business needs, ensuring seamless functionality and intuitive design.",
              image: '/static-website.png',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Cloud Infrastructure",
      description: "Effectively manage Infrastructure-as-a-service",
      color: "#EFFFC3",
      tab_decs: [
        {
          id: 1,
          title: "Terraform",
          tab_child: [
            {
              id: 1,
              title: "Infrastructure as a Service with Terraform",
              description:
                "Terraform Transformation offers your organization a pathway to a world-class Terraform setup. As experts in the field, we've seen it all. Our service embeds a Neelgai team member into your team to elevate your Infrastructure as Code practices.",
              image: '/terraform.jfif',
            },
          ],
        },
        {
          id: 2,
          title: "AWS Services",
          tab_child: [
            {
              id: 1,
              title: "Deploy your software or AI models to AWS",
              description:
                "We are AWS certified professionals with extensive expertise in most AWS resources. Our cloud architecture is designed to minimize service costs while maintaining software performance and scalability.",
              image:'/aws.jfif',
            },
          ],
        },
        // {
        //   id: 3,
        //   title: "On Prem to Cloud",
        //   tab_child: [
        //     {
        //       id: 1,
        //       title: "Design websites with Modern React Framework",
        //       description:
        //         "Forget customs issues and missing computer equipment. We handle all shipping logistics and ensure tracked deliveries with no delays.",
        //       image: Images.Keller,
        //     },
        //   ],
        // },
      ],
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      description: "Artificial Intelligence",
      color: "#BECCF1",
      tab_decs: [
        {
          id: 1,
          title: "Build an AI",
          tab_child: [
            {
              id: 1,
              title: "Let Neelgai make you AI Unicorn",
              description:
                "With deep expertise across machine learning, neural networks, NLP, and more, we provide innovative solutions to elevate your AI capabilities.",
              image: '/ai.png',
            },
          ],
        },
        {
          id: 2,
          title: "Deploy AI",
          tab_child: [
            {
              id: 1,
              title: "Deploy AI Models",
              description:
                "We, at Neelgai, have real-world experiences with smooth and efficient AI model deployment process. ",
              image: '/deploy-ai.png',
            },
          ],
        },
        {
          id: 3,
          title: "Generative AI",
          tab_child: [
            {
              id: 1,
              title: "Generative the Impossible",
              description:
                "Generative AI represents a powerful tool for creating new and innovative content, pushing the boundaries of what machines can produce, and opening up new possibilities across various fields.",
              image: '/generative-ai.jfif',
            },
          ],
        },
        {
          id: 4,
          title: "Custom Models",
          tab_child: [
            {
              id: 1,
              title: "Customized AI Models",
              description:
                "We tailor models with extensive context, applying feature engineering and appropriate algorithms to train them, ensuring they are reliable and accessible for end-users in specific domains.",
              image: '/custom-model.jfif',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Cyber Security",
      description: "Cyber Security",
      color: "#BDE4E7",
      tab_decs: [
        {
          id: 1,
          title: "Network Security",
          tab_child: [
            {
              id: 1,
              title:
                "Implemente firewalls, intrusion detection systems, and secure network protocols",
              description:
                "We verify that your infrastructure is secured from DDoS using AWS WAF, Shield, Cloudflare, Fastly. We encourage using firewalls to block unauthorized access and VPNs to secure remote connections.",
              image: '/network.JPG',
            },
          ],
        },
        {
          id: 2,
          title: "Incident Response",
          tab_child: [
            {
              id: 1,
              title:
                "Prepare a strategy to address and mitigate security breaches or attacks",
              description:
                "We use Splunk, Sumo Logic, and AlienVault to monitor any incidents or breaches and develop an incident response plan to quickly and effectively handle any security incidents.",
              image: '/incident.JPG',
            },
          ],
        },
        {
          id: 3,
          title: "Compliance",
          tab_child: [
            {
              id: 1,
              title:
                "Conduct regular security audits and ensure compliance with relevant regulations and standards",
              description:
                "We use compliance management tools and frameworks to track and report on compliance status. Some of the tools are NIST Cybersecurity Framework, ISO/IEC 27001, Compliance Management Platforms like Vanta.",
              image: '/compliance.png',
            },
          ],
        },
        {
          id: 4,
          title: "Vulnerabilities Test",
          tab_child: [
            {
              id: 1,
              title:
                "Regularly scan systems and networks for vulnerabilities to identify and address potential weaknesses",
              description:
                "We use automated tools such as Nessus, OpenVAS, and QualysGuard to scan for vulnerabilities and prioritize remediation efforts based on severity.",
              image: '/vurnelabilities.JPG',
            },
          ],
        },
      ],
    },
  ];

  

  const scrollToSection = (id:any) => {
    setActiveService(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveService(entry.target.id);
        }
      });
    }, options);

    serviceRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      if (serviceRefs.current) {
        serviceRefs.current.forEach((section) => {
          if (section) {
            observer.unobserve(section);
          }
        });
      }
    };
  }, []);
  return (
    <div>
        <section className="service-more text-center">
          <div className="row px-0 mx-0 service justify-content-around">
            <div className="col-md-4 col-lg-3 col-xl-2 service-list mx-0 pb-2 pb-md-5 ps-2">
              <div className="line-service"></div>

              {services.map((elem, index) => (
                <div key={index}>
                  <div className="line-service  mb-1"></div>
                  <div
                    key={elem.id}
                    className={`text-md-start contains ps-2 ps-md-5 mb-2 ${
                      activeService === `elem-${elem.id}`
                        ? "active-service"
                        : ""
                    }`}
                    onClick={() => scrollToSection(`elem-${elem.id}`)}
                    style={{
                        "--service-color": elem.color,
                      } as  Record<string, string>}
                  >
                    <span className="ser-til">{elem.title}</span>
                    <input
                      type="checkbox"
                      checked={activeService === `elem-${elem.id}`}
                      onChange={() => scrollToSection(`elem-${elem.id}`)}
                    />
                    {/* <label></label> */}
                    <span className="checkmark"></span>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-8 col-lg-9 col-xl-9 service-right pb-5">
              {services.map((elem, index) => (
                <div
                  className="section-service mt-5"
                  key={index}
                  id={`elem-${elem.id}`}
                  ref={(el) => {
                    serviceRefs.current[index] = el; 
                  }}
                >
                  <div className="d-flex justify-content-center mb-5">
                    <h1 className="text-ser mt-3 col-lg-6">
                      {elem.description}
                    </h1>
                  </div>
                  <Tabs
                    defaultActiveKey="1"
                    id="justify-tab-example"
                    className="mb-3 mt-4"
                    justify
                  >
                    {elem.tab_decs.map((tabElem, index) => (
                      <Tab
                        eventKey={tabElem.id.toString()}
                        title={<div className="skill-tab">{tabElem.title}</div>}
                        key={index}
                      >
                        {tabElem.tab_child.map((childElem, index) => (
                          <div
                            key={index}
                            className="row pt-5 justify-content-evenly service-tab"
                          >
                            <div
                              className=" col-md-8 col-xl-4 my-auto p-5 text-start tab-cont"
                              style={{ backgroundColor: elem.color }}
                            >
                              <h3 className="serv-text  pt-3">
                                {childElem.title}
                              </h3>
                              <p className="py-4">{childElem.description}</p>
                              <a className="get-start" href="/contact">
                                <span className="request-start">
                                  Get Started
                                </span>
                              </a>
                            </div>
                            <div className="col-md-8  col-xl-6 mt-5 mt-xl-0 px-0">
                                 <Image 
                                                    src={childElem.image}
                                                    alt={childElem.title}
                                                    width={600} 
                                                    height={500} 
                                                    className="img-fluid img-serv"
                                                  />
                              
                              {/* <ImageComponent images={[{ url: `${childElem.image}`}]}
                                         defaultImageUrl={`${childElem.image}`}
                                         className="img-fluid img-serv "
                                         alt={childElem.title}
                                         /> */}
                            </div>
                          </div>
                        ))}
                      </Tab>
                    ))}
                  </Tabs>
                </div>
              ))}
            </div>
          </div>
        </section>
      
    </div>
  )
}

export default ServiceComponents
