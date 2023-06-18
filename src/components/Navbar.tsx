import { useState } from "react";
import { navLinks } from "../constants";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

export function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center navbar py-6">
      <div className="font-roboto_condensed text-white font-bold	italic sm:text-2xl text-lg	cursor-pointer">
        COURSE MASTER
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        {toggle ? (
          <RiCloseFill
            className="text-white h-8 w-7"
            onClick={() => setToggle((previous) => !previous)}
          />
        ) : (
          <RiMenu3Fill
            className="text-white h-8 w-5"
            onClick={() => setToggle((previous) => !previous)}
          />
        )}
      </div>
    </nav>
  );
}
