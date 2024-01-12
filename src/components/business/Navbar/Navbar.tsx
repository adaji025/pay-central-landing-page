import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { TbMenuDeep } from "react-icons/tb";
import Logo from "../../../assets/svgs/logo.svg";
import ApiDropdown from "../ApiDropdown";
import styles from "./Navbar.module.css";

const navMenuItems = [
  {
    title: "How it works",
    url: "/",
  },
  {
    title: "Categories",
    url: "/categories",
  },
  {
    title: "Partnerships",
    url: "/partnerships",
  },
  {
    title: "API",
    url: "/api",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const router = useLocation();
  const navigate = useNavigate();

  return (
    <div className="z-[999]  w-full fixed top-[56px] bg-white">
      <nav className={`px-5 lg:px-12 max-w-[1440px] ${styles.navbarItems}`}>
        <img
          src={Logo}
          alt="efiko learning"
          className="cursor-pointer w-[100px] sm:w-[unset]"
          onClick={() => navigate("/")}
        />
        <div
          className={`cursor-pointer lg:hidden`}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <AiOutlineClose size={24} /> : <TbMenuDeep size={24} />}
        </div>

        <div
          className={` ${
            menu ? styles.nav_menu + " " + styles.active : styles.nav_menu
          }`}
        >
          {navMenuItems.map((menu, idx) => (
            <div
              key={idx}
              className={`flex gap-2 items-center relative border-b-4 border-transparent text-base cursor-pointer hover:border-pink hover:lg:text-primary-green-50 hover:lg:border-primary-green-50   transition- duration-200 ${
                router.pathname === menu.url
                  ? "lg:border-pink lg:text-primary-green-50"
                  : ""
              } `}
              onClick={() => {
                menu.title !== "API" && navigate(menu.url);
                menu.title !== "API" && setMenu(false);
              }}
            >
              {menu.title !== "API" && menu.title}

              {menu.title === "API" && <ApiDropdown />}
            </div>
          ))}
        </div>

        <button className="py-2 px-5 border max-w-[180px] w-full text-sm hidden lg:flex justify-center items-center">
          <span>Join the waitlist</span>
          <IoArrowForward />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
