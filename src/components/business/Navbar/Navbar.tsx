import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../../../assets/svgs/logo.svg";
import styles from "./Navbar.module.css";
import ApiDropdown from "../ApiDropdown";

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
    <div className="z-[999]  w-full fixed top-[60px] bg-white">
      <nav className={`px-5 lg:px-12 max-w-[1440px] ${styles.navbarItems}`}>
        <div className="flex gap-2">
          <div
            className={`cursor-pointer lg:hidden`}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
          <img
            src={Logo}
            alt="efiko learning"
            className="cursor-pointer w-[100px] sm:w-[unset]"
            onClick={() => navigate("/")}
          />
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

        <button className="py-2 px-5 border flex justify-center items-center">
          <span>Login</span>
          <IoArrowForward />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
