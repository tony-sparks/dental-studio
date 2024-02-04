import React from 'react'
import "./Navbar.css"
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom'
import { PiToothFill } from "react-icons/pi";
//import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div>
            <div className="address-link flex flex-row">
              <ul className="address flex space-x-6 py-2 ms-7">
                <li className=" cursor-pointer flex flex-row"> <span className="icon text-2xl"> <CiLocationOn /> </span> Pansandena 100369, United States </li>
                <li className=" cursor-pointer flex flex-row"> <span className="icon text-2xl"> <HiOutlineMailOpen /> </span> office@dentalstudio.io </li>
              </ul>
              <ul className="link flex grow flex-row justify-end pr-8  my-3 place-iterms-end space-x-2 ">
                <li> <span className=" social-media-links cursor-pointer text-1xl"> <FaFacebookF /> </span> </li>
                <li> <span className=" social-media-links cursor-pointer text-1xl"> <IoLogoInstagram /> </span>  </li>
                <li> <span className=" social-media-links cursor-pointer text-1xl"> <RiTwitterXFill />  </span> </li>
              </ul> 
            </div>

            <div className="menu flex shadow-md">
                <ul className="logo flex mx-5">
                    <li className="mt-3"> <Link to="/"> <span className="text-6xl menu-icon">< PiToothFill /></span></Link></li>
                    <li className="mt-5"> <Link to="/"> <span className="text-3xl font-bold">Dental</span> <span className="text-3xl font-thin">Studio </span></Link> </li>
                </ul>
                <ul className="menu-elements flex grow flex-row justify-end pr-8  my-3 place-iterms-end space-x-8 mt-8 h-11 ">
                    <li><NavLink className="cursor-pointer hover:text-purple" to="/">Home</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-purple" to="/services">Services</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-purple" to="/team">Team</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-purple" to="/blog">Blog</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-purple" to="/gallery">Gallery</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-purple" to="/contact">Contact</NavLink></li>
                </ul>
            </div>

    </div>
  )
}

export default Navbar