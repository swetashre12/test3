import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import "./Footer.css";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className={`shared footer   bg-blue-light pb-5`}>
      <div className="container ">
        {
          (
            <div className="newsletter">
              <iframe
                src="https://embeds.beehiiv.com/dcb3f95e-250c-4051-94b4-e2c8c536d844"
                data-test-id="beehiiv-embed"
                width="100%"
                title="news-letter"
                height="220"
                style={{
                  margin: 0,
                }}
              ></iframe>
            </div>)}
        <div className="row pb-4">
          <div className="col-12 col-xl-4 text-center text-xl-start pb-4">
            <h4 className="fs-4 fw-semibold ">neelgai</h4>

            <ul className="d-flex justify-content-center justify-content-xl-start list-unstyled mt-3">
              <li className="rounded-circle bg-blue-63 me-4 p-2">
                <a
                  className="d-flex align-items-center justify-content-center "
                  href="https://www.linkedin.com/company/neelgai/about/"  aria-label="Visit Neelgai's LinkedIn profile"
                >
                  <CiLinkedin size={20} />
                </a>
              </li>
              <li className="rounded-circle bg-blue-63 me-4 p-2">
                <a
                  className="d-flex align-items-center justify-content-center "
                  href="https://www.facebook.com/profile.php?id=61558400588347"
                  aria-label="Visit Neelgai's Facebook profile"
                >
                  <FaFacebookF size={20} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-xl-2 text-center text-xl-start pb-4">
            <h5 className="fs-6 fw-semibold text-pri">Company</h5>
            <ul className="list-unstyled">
              <li className=" ps-lg-1">
                <Link className="small text-pri text-decoration-none" href="/">
                  Home
                </Link>
              </li>
              <li className="ps-lg-1">
                <Link
                  className="small text-pri text-decoration-none"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li className="ps-lg-1">
                <Link
                  className="small text-pri text-decoration-none"
                  href="/services"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-xl-3 text-center text-xl-start pb-4">
            <h5 className="fs-6 fw-semibold text-pri">Location</h5>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-center justify-content-xl-start mb-2">
                <div className="d-flex align-items-center text-pri">
                  <CiLocationOn />
                </div>
                <p className="small text-pri m-0 ps-2">Arlington, VA</p>
              </li>
              <li className="d-flex justify-content-center justify-content-xl-start mb-2">
                <div className="d-flex align-items-center text-pri">
                  <CiLocationOn />
                </div>
                <p className="small text-pri m-0 ps-2">Austin, TX</p>
              </li>
              <li className="d-flex justify-content-center justify-content-xl-start mb-2">
                <div className="d-flex align-items-center text-pri">
                  <CiLocationOn />
                </div>
                <p className="small text-pri m-0 ps-2">
                  Budhanilkantha, Kathmandu
                </p>
              </li>
              <li className="d-flex justify-content-center justify-content-xl-start mb-2">
                <div className="d-flex align-items-center text-pri">
                  <CiLocationOn />
                </div>
                <p className="small text-pri m-0 ps-2">
                  Janakchowk, Janakpur
                </p>
              </li>
            </ul>
          </div>
          <div className="col-12 col-xl-3 text-center text-xl-start pb-4">
            <h5 className="fs-6 fw-semibold text-pri">Contact us</h5>

            <p className="small text-pri mb-1">support@neelgai.com</p>
            <p className="small text-pri mb-1">573.550.9350</p>
          </div>
        </div>

        

        <div className="line-bot"></div>
        <div className="d-md-flex justify-content-between  text-bot">
          <div className="mt-3">
            © Copyright 2024.Neelgai All Rights Reserved
          </div>
         
        </div>
      </div>
    </footer>
  );
}