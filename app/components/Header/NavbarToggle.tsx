"use client";

import React from "react";
import Nav from "react-bootstrap/Nav";
import Link from 'next/link'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Navbar from "react-bootstrap/Navbar";


export default function NavBarToggle() {
  

  return (

    <>
    <Navbar.Toggle style={{height: 'fit-content', width: 'fit-content'}} aria-controls="basic-navbar-nav" className="me-2">
            <GiHamburgerMenu color="#35334f" className="hamburger" />
            <ImCross
              color="#35334f"
              className="cross"
              style={{ height: "0.7rem" }}
            />
          </Navbar.Toggle>
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className={`justify-content-end flex-grow-1 me-2 me-lg-0 d-flex text-center`}>
              <Link
                href="/"
                className=" ms-0 ms-lg-5 mt-4  my-lg-auto nav-custom-edits"
                title="Home"
              >
                Home
              </Link>
              <Link
               href="/about"
                className=" ms-0 ms-lg-5 mt-4  my-lg-auto nav-custom-edits"
                title="About Us"
              >
                About
              </Link>

              <Link
                href="/services"
                className="ms-0 ms-lg-5 mt-4 my-lg-auto  nav-custom-edits"
                title="services"
              >
                Services 
              </Link>
              
              <Link
               href="/hiring"
                className=" ms-0 ms-lg-5 mt-4  my-lg-auto  nav-custom-edits"
                title="Hiring"
              >
                Hiring
              </Link>
              <Link
               href="/contact"
                className="ms-0 ms-lg-5 mt-4  my-lg-auto  nav-button-edits "
                title="Book a call"
              >
                Book a call
              </Link>
            </Nav>
          </Navbar.Collapse>
         
          </>
  );
}
