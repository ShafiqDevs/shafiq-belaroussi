import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import ProfileLogo from "./ProfileLogo";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

export default function NavBar({ scrollAt }) {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleNavColor = () => {
      if (window.scrollY >= scrollAt) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleNavColor);
  }, []);

  const defaultNav =
    "fixed w-full h-fit  left-0 right-0 top-0 bottom-0 flex items-start justify-end p-4 bg-transparent z-10";
  const scrolledNav =
    "fixed w-full h-fit  left-0 right-0 top-0 bottom-0 flex items-start justify-end p-4  bg-white text-black z-10";

  return (
    <div className={scroll ? scrolledNav : defaultNav}>
      <div className="mr-auto  md:ml-12  self-center">
        <Link href={"/"}>
          <a>
            <p className="text-2xl font-semibold hover:text-blue-600">
              ShafiqDevs
            </p>
          </a>
        </Link>
      </div>
      {/* mobile nav button */}
      <div className="md:hidden flex flex-col gap-3 items-end">
        <button className="text-2xl p-4" onClick={() => setNav(!nav)}>
          {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        {/* mobile nav */}
        <div className={nav ? "text-center font-semibold text-xl" : "hidden"}>
          <NavItem _text={"Home"} _link={"/"} />
          <NavItem _text={"Projects"} _link={"/projects"} />
          <div>
            <NavItem _text={"Socials"} _link={"/"} />
          </div>
          <NavItem _text={"About Me"} _link={"/"} />
        </div>
      </div>
      {/* nav */}
      <div className="hidden text-2xl md:flex items-start p-6 gap-3">
        <NavItem _text={"Home"} _link={"/"} />
        <NavItem _text={"Projects"} _link={"/"} />
        <NavItem _text={"Socials"} _link={"/"} />
        <NavItem _text={"About Me"} _link={"/"} />
      </div>
    </div>
  );
}
