import React, {useState} from 'react'
import "./Navbar.css"
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom'
import { PiToothFill } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {

const [show,setShow] = useState(true)

const showMenu = () => {
  setShow(true);
};

const closeMenu = () => {
  setShow(false);
};


  return (
    <div>
            <div className="address-link flex flex-row max-md:hidden">
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
                <ul className="logo flex place-self-center">
                    <li className="place-self-center ml-2 max-sm:size-10"> <Link to="/"> <span className=" tooth-menu-icon ">< PiToothFill /></span></Link></li>
                    <li className="max-sm:place-self-center"> <Link to="/"> <span className="  font-bold text-2xl max-sm:text-lg ">Dental</span> <span className="text-2xl font-thin max-sm:text-lg">Studio </span></Link> </li>
                </ul>
                <ul className="menu-elements flex grow flex-row justify-end pr-8  my-3 place-iterms-end space-x-8 mt-8 h-11 max-md:hidden">

                    <li><NavLink className="cursor-pointer hover:text-purple font-semibold font-sans" to="/">Home</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-purple font-semibold font-sans" to="/services">Services</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-purple font-semibold font-sans" to="/team">Team</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-purple font-semibold font-sans" to="/blog">Blog</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-purple font-semibold font-sans" to="/gallery">Gallery</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-purple font-semibold font-sans" to="/contact">Contact</NavLink></li>
                </ul>
                <ul className="menu-icon-container md:hidden ml-34 flex grow justify-end place-self-center">
                    <li className="menu-icon place-self-center pr-4" onClick={showMenu}> <FiMenu /></li>
                </ul>
                
            </div>
            { show?
               <div className="responsive-menu ease-in transition opacity-500 flex flex-col w-full h-44 md:hidden place-items-center absolute insert-x-0 top-1 ">
                 <div className="close-icon cursor-pointer  place-self-end mr-3" onClick={closeMenu}><IoMdClose /></div>
               
               
                 <ul>
                    <li><NavLink className="cursor-pointer hover:text-purple font-semibold font-sans" to="/">Home</NavLink></li>    
                    <li><NavLink className="cursor-pointer hover:text-purple font-semibold font-sans" to="/services">Services</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-purple font-semibold font-sans " to="/team">Team</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-purple font-semibold font-sans" to="/blog">Blog</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-purple font-semibold font-sans" to="/gallery">Gallery</NavLink></li>
                    <li><NavLink className="cursor-pointer hover:text-purple font-semibold font-sans" to="/contact">Contact</NavLink></li>
                 </ul>
               </div>
             :null
                }
            
    </div>
  )
}

export default Navbar