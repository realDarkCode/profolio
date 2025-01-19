import { images } from "../../constants/";
import "./style.scss";

import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const navItems = ["home", "about", "work", "skills", "contact"];
function index() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4  md:px-20 md:py-6  bg-[rgba(255,255,255,0.25)]  backdrop-filter backdrop-blur-sm border border-[rgba(255,255,255,0.18)] fixed top-0 z-30 shadow-md">
      <div className="flex justify-start items-center ">
        <img src={images.logo} alt="Logo" className="w-24 lg:w-32  " />
      </div>
      <ul className="flex-1 hidden lg:flex justify-end items-center list-none gap-4">
        {navItems.map((item) => (
          <li
            key={`nav-item-${item}`}
            className="text-md cursor-pointer flex-col  group"
          >
            <a
              className="text-gray no-underline flex-col uppercase font-medium  group-hover:text-secondary transition-colors ease-in-out duration-300"
              href={`#${item}`}
            >
              {item}
            </a>
            <div className="size-1 mt-1 bg-transparent rounded-full group-hover:bg-secondary group-hover:w-full transition-all ease-in-out duration-300" />
          </li>
        ))}
      </ul>
      <div className="size-9 rounded-full relative flex justify-center items-center cursor-pointer bg-secondary lg:hidden">
        <HiMenuAlt4
          className="text-white size-2/3"
          onClick={() => setIsNavOpen(true)}
        />
        {isNavOpen && (
          <motion.div
            className="fixed top-0 bottom-0 right-0 z-10 p-8 w-4/5 h-screen flex items-end justify-end flex-col bg-[url(/bgWhite.png)] bg-cover bg-repeat bg-white shadow-lg"
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX
              onClick={() => setIsNavOpen(false)}
              className="size-9 cursor-pointer text-secondary mx-2 my-4 "
            />
            <ul className="list-none m-0 p-0 h-full w-full flex flex-col justify-start items-start gap-4">
              {navItems.map((item) => (
                <li
                  key={`nav-item-${item}`}
                  onClick={() => setIsNavOpen(false)}
                  className="group flex items-center gap-2 "
                >
                  <div className="w-1 h-0 bg-transparent rounded-full group-hover:bg-secondary group-hover:h-full transition-all ease-in-out duration-300" />
                  <a
                    className="text-gray uppercase font-medium group-hover:text-secondary transition-colors ease-in-out duration-300"
                    href={`#${item}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default index;
