import { useState } from "react";
import { navLinks } from "../constants";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import styles from "../style";

export function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center navbar py-6">
      <div className={`${styles.logo} cursor-pointer`}>COURSE MASTER</div>

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
            alt="menu opened"
            className="text-white h-8 w-7"
            onClick={() => setToggle((previous) => !previous)}
          />
        ) : (
          <RiMenu3Fill
            alt="menu"
            className="text-white h-8 w-5"
            onClick={() => setToggle((previous) => !previous)}
          />
        )}
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
