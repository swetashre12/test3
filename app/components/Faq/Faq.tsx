
"use client";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import './Faq.css';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

interface FaqComponentProps {
  title?: string;
  description?: string;
  faq: FaqItem[];
}

const Faq: React.FC<FaqComponentProps> = ({
  title ,
  description ,
  faq,
}) => {
  return (
    <div className="pb-5 ps-4 faq-box">
      <div className="container">
        <h3 className="text-start text-faq py-4">{title}</h3>
        {description && (
          <h3 className="text-start faq-desc pb-5">{description}</h3>
        )}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Accordion >
              {faq.map((elem, index) => (
                <Accordion.Item eventKey={index.toString()} key={elem.id}>
                  <Accordion.Header>
                    <span className="me-3 item-num">{elem.id}</span>
                    <span className="text-question ms-1">{elem.question}</span>
                  </Accordion.Header>
                  <Accordion.Body
                    className="text-start ms-md-4 text-acco"
                    dangerouslySetInnerHTML={{ __html: elem.answer }}
                  ></Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
