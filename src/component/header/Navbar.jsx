import { Link } from "react-scroll";
import { BsMoonStarsFill } from "react-icons/bs";
import { LuSunMoon } from "react-icons/lu";
import { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { LuMenu } from "react-icons/lu";


function Navbar() {
  const [theme, setTheme] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const navItems = [
    { link: "Accueil", path: "accueil" },
    { link: "A propos", path: "about" },
    { link: "Boutique", path: "shop" },
    { link: "Librairie", path: "library" },
  ];

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className=" md:px-16 lg:px-14 sm:px-16 p-5 max-w-screen-2xl mx-auto">
        <div className="fixed top-0 right-0 left-0 shadow-md bg-white dark:bg-slate-900">
          <div className="text-lg  container mx-auto flex justify-between items-center">
            {/* pour le logo */}
            <a href="">
              <img src="../../public/logo.png" alt="logo" className=" h-14" />
            </a>
            {/* Affichage du menu */}
            <ul className=" md:flex space-x-10 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  className=" block dark:hover:border-white dark:hover:pb-2 dark:hover:text-white d text-slate-950 hover:text-slate-600 dark:text-white font-semibold cursor-pointer "
                  onactiveclass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  key={link}
                  to={path}
                >
                  {link}
                </Link>
              ))}
            </ul>
            {/* Sign up button et Dark mode */}
            <div className=" space-x-12 hidden md:flex items-center">
              {/* Dark mode button */}
              <button
                type="button"
                className=" hover:bg-slate-300 dark:hover:bg-green-700 dark:hover:text-slate-300 hover:rounded-full dark:hover:p-2 hover:p-2"
                onClick={handleThemeSwitch}
              >
                {theme === "dark" ? (
                  <BsMoonStarsFill className=" text-Slate-900 text-2xl " />
                ) : (
                  <LuSunMoon className=" text-slate-800 text-2xl hover:text-slate-400" />
                )}
              </button>
              <button
                type="button"
                className=" bg-slate-950 px-3 py-2 hover:bg-slate-600  rounded-full text-white text-lg dark:hover:text-slate-300 dark:hover:p-2"
              >
                Connexion
              </button>
            </div>

            <div className="md:hidden space-x-2">
              <button
                type="button"
                className=" hover:bg-slate-300 dark:hover:bg-green-700 dark:hover:text-slate-300 hover:rounded-full dark:hover:p-2 hover:p-2"
                onClick={handleThemeSwitch}
              >
                {theme === "dark" ? (
                  <BsMoonStarsFill className=" text-Slate-900 text-2xl " />
                ) : (
                  <LuSunMoon className=" text-slate-800 text-2xl hover:text-slate-400" />
                )}
              </button>

              <button
                onClick={toggleMenu}
                className=" text-white focus:outline-none focus:text-[#feff5b]"
              >
                {showMenu ? (
                  <HiOutlineXMark className=" h-8 w-8 text-slate-800 dark:text-slate-100 transition-all duration-300" />
                ) : (
                  <div className="flex space-x-2">
                    <LuMenu className=" h-10 w-10 transition-all duration-300 text-slate-800 dark:text-slate-100" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Show menu */}
      <div className="left-11 right-11">
        <div
          className={` space-y-4 mt-16 w-[400] rounded-br-md rounded-bl-md justify-center px-6 py-3 pb-5 mx-6 dark:bg-gradient-to-r dark:from-indigo-500 dark:from-10% dark:via-sky-500 dark:via-30% dark:to-emerald-500 dark:to-90% ... bg-white ${
            showMenu
              ? "block justify-center fixed top-0 right-0 left-0"
              : "hidden "
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              spy={true}
              smooth={true}
              offset={-80}
              key={link}
              to={path}
              className=" block dark:text-slate-900 text-slate-800 hover:text-slate-700 dark:hover:text-white dark:hover:bg-[#1203541c] hover:py-2 cursor-pointer font-semibold text-xl text-center"
              onClick={toggleMenu}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
