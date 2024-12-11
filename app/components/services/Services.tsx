"use client";
import React from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { MdMiscellaneousServices } from "react-icons/md";
import { TbBrandSpeedtest } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { MdMilitaryTech } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { HiDocumentText } from "react-icons/hi";
import { BsFileCode } from "react-icons/bs";
import { PiInfinity } from "react-icons/pi";
import { IoListOutline } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { IoHardwareChip } from "react-icons/io5";
import { MdAppSettingsAlt } from "react-icons/md";
import { IoCloudSharp } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";

const Services = () => {


    const build = [
        {
          id: 1,
          icon: <FaGitAlt />,
          tittle: "Software Development",
          description:
            " At Neelgai, we're experts in software development. Our focus is on creating scalable and efficient software products that can adapt to your business needs.",
        },
        {
          id: 2,
          icon: <FaRobot />,
          tittle: "Artificial Intelligence",
          description:
            "With expertise across machine learning, neural networks, NLP, RAG, and more, we provide innovative solutions to make you an AI unicorn.",
        },
        {
          id: 3,
          icon: <IoCloudSharp />,
          tittle: "Infrastructure & DevOps",
          description:
            "With a deep understanding of infrastructure management, the team at Neelgai offers a fully automated AWS platform following our best practices and thought processes for high-growth, cloud-native organizations.",
        },
        {
          id: 4,
          icon: <MdAppSettingsAlt />,
          tittle: "Web and Mobile Application",
          description:
            "We create applications for websites and smartphones, ensuring your business stays visible in the digital world. We also handle SEO for quicker search results and address any security vulnerabilities associated with your app.",
        },
        {
          id: 5,
          image: './machine.png',
          tittle: "Machine Learning",
          description:
            "Neelgai specializes in machine learning solutions, leveraging tools like scikit-learn, Keras, TensorFlow, and PyTorch to deliver predictive analytics and intelligent automation for your business.",
        },
        {
          id: 6,
        //   image: Images.lock,
          tittle: "Cyber Security",
          description:
            "Our certified professionals employ the latest tools to identify vulnerabilities, implement security measures, and mitigate risks. From pen testing to security audits, the company ensures the highest level of protection against cyber threats.",
        },
      ];
    
      const technologies = [
        {
          id: 1,
        //   image: Images.program,
          tittle: "Programming Languages",
          tech_used: [
            // { id: 1, image: Images.go },
            // { id: 2, image: Images.python },
            // { id: 3, image: Images.javascript },
            // { id: 4, image: Images.sql },
          ],
        },
        {
          id: 2,
          image: './machine.png',
          tittle: "AI/ML tools",
          tech_used: [
            // { id: 1, image: Images.redis },
            // { id: 2, image: Images.kaggle },
            // { id: 3, image: Images.numpy },
            // { id: 4, image: Images.pandas },
          ],
        },
        {
          id: 3,
          icon: <IoCloudSharp />,
          tittle: "Infrastructure",
          tech_used: [
            // { id: 1, image: Images.terraform },
            // { id: 2, image: Images.kubernetes },
            // { id: 3, image: Images.docker },
            // { id: 4, image: Images.amazon },
          ],
        },
        {
          id: 4,
          icon: <BsFileCode />,
          tittle: "Frameworks",
          tech_used: [
            // { id: 1, image: Images.django },
            // { id: 2, image: Images.nextjs },
            // { id: 3, image: Images.react },
            // { id: 4, image: Images.postgresql },
          ],
        },
        {
          id: 5,
          icon: <MdOutlineSecurity />,
          tittle: "Security",
          tech_used: [
            // { id: 1, image: Images.transantiago },
            // { id: 2, image: Images.rsa },
            // { id: 3, image: Images.cisco },
            // { id: 4, image: Images.okta },
          ],
        },
        {
          id: 6,
          icon: <PiInfinity />,
          tittle: "And many more...",
          tech_used: [
            // { id: 1, image: Images.graphql },
            // { id: 2, image: Images.jenkins },
            // { id: 3, image: Images.unity },
          ],
        },
      ];
      const practices = [
        {
          id: 1,
          icon: <HiDocumentText />,
          tittle: "Good Documentation",
          description:
            " We write all the project details clearly and concisely that anyone can easily understand. We make sure the documentations are updated regularly to capture every relevant changes made to the project.   ",
        },
        {
          id: 2,
          icon: <MdOutlineSecurity />,
          tittle: "Security",
          description:
            " We take all the security measures to ensure that the softwares we build are free from vulnerabilities and compliant with SOC2.",
        },
        {
          id: 3,
          icon: <IoIosColorPalette />,
          tittle: "Design",
          description:
            "Every successful project should be well designed from user experience perspective to software architecture because they define how performant, scalable and cost-effective a software is. At Neelgai, these matter!",
        },
        {
          id: 4,
          icon: <IoListOutline />,
          tittle: "Planning",
          description:
            " We clearly define project goals, tasks, and timelines and break the project into manageable steps and assign responsibilities. We regularly review progress, adjust as needed, and communicate updates to everyone involved.",
        },
        {
          id: 5,
          icon: <TbBrandSpeedtest />,
          tittle: "Testing and Deployment",
          description:
            "We ensure no software goes to production without proper testing on various testing environments. ",
        },
        {
          id: 6,
          icon: <PiInfinity />,
          tittle: "More..",
          description:
            " All our practices are defined by our guiding principles. Communication, adaptability, collaboration, and value-centric has pushed us to become a better tech company.",
        },
      ];
      const industries = [
        {
          id: 1,
        //   image: Images.health,
          tittle: "Healthcare",
          description:
            "Healthcare software, secure data management, and patient care systems.",
        },
        {
          id: 2,
        //   image: Images.finance,
          tittle: "Finance",
          description:
            " Financial software with secure payments, analytics, and user-friendly interface.",
        },
        {
          id: 3,
        //   image: Images.education,
          tittle: "Education",
          description:
            " LMS, interactive platforms, and virtual tools for remote learning.",
        },
        {
          id: 4,
        //   image: Images.ecommerce,
          tittle: "E-commerce",
          description:
            "E-commerce sites, payment gateways, and inventory management.",
        },
        {
          id: 5,
        //   image: Images.social,
          tittle: "Social Media",
          description:
            " Social media tools, content scheduling, chatbots for support, and targeted ads.",
        },
        {
          id: 6,
    
          tittle: "More...",
          description: " Tell us what you got and we will build it!",
        },
      ];
  return (
    <section className=" pt-5 container service-container mt-5">
    <h1 className="title-skill ">Services</h1>
    <p className=" fs-lead py-4 text-desc mt-4">
      We create everything from simple websites to advance AI models using
      the latest technologies and best practices.
    </p>
    <Tabs
      defaultActiveKey="build"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab
        eventKey="build"
        title={
          <div className="build-content">
            <div>
              <MdMiscellaneousServices size={20} />
            </div>
            <div className="ps-2">Services</div>
          </div>
        }
      >
        <div className="row">
          {build.map((elem, index) => (
            <div key={index} className=" col-lg-4  px-0 mt-3">
              <div className=" box-desc m-2  ">
                <div className="text-start icon-skill">
                  {elem.icon ? (
                    elem.icon
                  ) : (
                    <img
                      src={elem.image}
                      alt=" icon"
                      className="img-build"
                    />
                  )}
                </div>
                <div className="text-start skill-topic py-2">
                  {elem.tittle}
                </div>
                <div className="text-start skill-more">
                  {elem.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Tab>
      <Tab
        eventKey="technologies"
        title={
          <div className="build-content">
            <div>
              <IoHardwareChip size={20} />
            </div>
            <div className="ps-2">Technologies</div>
          </div>
        }
      >
        <div className="row techno">
          {technologies.map((elem, index) => (
            <div key={index} className="col-lg-4 px-0 mt-3">
              <div className="box-desc m-2">
                <div className="text-start skill-topic py-2">
                  <span className="icon-skill pe-3">
                    {elem.icon ? (
                      elem.icon
                    ) : (
                      <img
                        src={elem.image}
                        alt=" icon"
                        className="img-build"
                      />
                    )}
                  </span>
                  {elem.tittle}
                </div>
                <div className="tech-used row">
                  {elem.tech_used.map((tech, techIndex) => (
                    <div key={techIndex} className="col-6 pb-1">
                      {/* <img
                        key={techIndex}
                        src={tech.image}
                        alt={`Tech ${techIndex}`}
                        className="tech-image img-fluid"
                      /> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Tab>
      <Tab
        eventKey="practices"
        title={
          <div className="build-content">
            <div>
              <MdMilitaryTech size={24} />
            </div>
            <div className="ps-2">Practices</div>
          </div>
        }
      >
        <div className="row">
          {practices.map((elem, index) => (
            <div key={index} className=" col-lg-4  px-0 mt-3">
              <div className=" pra-desc m-2  ">
                <div className="text-start icon-skill"> {elem.icon}</div>
                <div className="text-start skill-topic py-2">
                  {elem.tittle}
                </div>
                <div className="text-start skill-more">
                  {elem.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Tab>
      <Tab
        eventKey="contact"
        title={
          <div className="build-content">
            <div>
              <HiBuildingOffice2 size={20} />
            </div>
            <div className="ps-2">Industires</div>
          </div>
        }
      >
        <div className="row">
          {industries.map((elem, index) => (
            <div key={index} className=" col-lg-4  px-0 mt-3">
              <div className=" ind-desc m-2  ">
                {/* {elem.image ? (
                  <img
                    src={elem.image}
                    className="img-fluid ind-img"
                    alt="description"
                  />
                ) : (
                  <div className="pt-5"></div>
                )} */}
                <div className="text-start skill-topic pt-3 pb-2 ps-3">
                  {elem.tittle}
                </div>
                <div className="text-start skill-more ps-3  pb-5">
                  {elem.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Tab>
    </Tabs>
  </section>
  )
}

export default Services

