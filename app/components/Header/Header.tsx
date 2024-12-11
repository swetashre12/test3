import React from "react";
import Image from "next/image";
import NavBarToggle from './NavbarToggle';
import Navbar from "react-bootstrap/Navbar";
import './Header.css';




export default function Header() {
 
  return (
    <header className={`header`}>
      <Navbar variant="light" expand="lg">
        <div className="container nav-contain">
          <Navbar title="Neelgai" className="title-neelgai ">
          <Image 
            src="/neelgai-logos.png"
            alt="Neelgai logo"
            width={35} 
            height={40} 
          />
         <span className="ms-1">Neelgai</span>
          </Navbar>
          <NavBarToggle/>
          
        </div>

       
      </Navbar>
      
    </header>


   
  );
}