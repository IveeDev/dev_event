import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link href={"/"} className="logo">
          <Image alt="Logo" src={"/icons/logo.png"} width={24} height={24} />
          <p>DevEvent</p>
        </Link>

        <ul>
          <Link href={"N"}>Home</Link>
          <Link href={"N"}>Event</Link>
          <Link href={"N"}>Create Event</Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
