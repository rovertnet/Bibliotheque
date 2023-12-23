
function Navbar() {
    const navItems = [
      { link: "Accueil", path: "accueil" },
      { link: "A propos", path: "about" },
      { link: "Services", path: "service" },
      { link: "Projets", path: "projet" },
    ];

  return (
    <>
      <div className=" md:px-14 lg:px-14 sm:px-16 p-5 max-w-screen-2xl mx-auto">
        <div className="fixed top-0 right-0 left-0 shadow-md ">
          <div className="text-lg  container mx-auto flex justify-between items-center">
            {/* pour le logo */}
            <a href="">
              <img src="" alt="" />
            </a>

            <ul className=" md:flex space-x-10 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  className=" block dark:text-slate-900 dark:hover:border-white dark:hover:pb-2 dark:hover:text-white d text-blue-300 hover:border-b-4 hover:border-white hover:pb-2 hover:text-white font-semibold cursor-pointer "
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar