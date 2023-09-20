import React from "react";

import Image from "next/image";
import Link from "next/link";

import {
  LiaBookSolid,
  LiaHomeSolid,
  LiaInfoCircleSolid,
} from "react-icons/lia";
import Logo from "@/public/next.svg";
import "../app/global.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href={"/"}>
        <Image src={Logo} alt='Logo' className='logo' />
      </Link>
      <ul>
        <Link href='/' className='link navbar-items'>
          <LiaHomeSolid className='navbar-items-icon' />
          <li>Home</li>
        </Link>

        <Link href='/books' className='link navbar-items'>
          <LiaBookSolid className='navbar-items-icon' />
          <li>Books</li>
        </Link>

        <Link href='/about' className='link navbar-items'>
          <LiaInfoCircleSolid className='navbar-items-icon' />
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
