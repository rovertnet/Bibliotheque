import { RiMailFill } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <div className=" dark:bg-[#101239] bg-slate-800 md:px-14 px-4 max-w-screen-2xl mx-auto">
        <div className=" py-12 flex flex-col md:flex-row sm:flex-row gap-10">
          <div className=" md:w-1/2 space-y-5">
            <a
              href="/"
              className=" text-2xl font-semibold flex items-center space-x-3 text-violet-400 py-4"
            >
              <img
                className=" h-24 inline-block items-center"
                src="../../public/logo.png"
                alt="logo"
              />
            </a>
            <p className=" md:w-1/2 text-slate-200">
              Bienvenue sur la bibliothèque et librerie de la nation.
            </p>
          </div>

          {/* Navigation */}
          <div className=" md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
            <div className=" space-y-4 mt-5">
              <h5 className=" text-white text-xl">Plate-forme</h5>
              <ul className=" space-y-2">
                <a
                  href="/"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Accueil
                </a>
                <a
                  href="/service"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Services
                </a>
                <a
                  href="/realisations"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Réqlisations
                </a>
                <a
                  href="/tarif"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Tarifs
                </a>
                <a
                  href="/contact"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Contact
                </a>
              </ul>
            </div>

            <div className=" space-y-4 mt-5">
              <h5 className=" text-white text-xl">Plate-forme</h5>
              <ul className=" space-y-2">
                <a
                  href="/"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Accueil
                </a>
                <a
                  href="/service"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Services
                </a>
                <a
                  href="/realisations"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Réqlisations
                </a>
                <a
                  href="/tarif"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Tarifs
                </a>
                <a
                  href="/contact"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Contact
                </a>
              </ul>
            </div>

            <div className=" space-y-4 mt-5">
              <h5 className=" text-white text-xl">Plate-forme</h5>
              <ul className=" space-y-2">
                <a
                  href="/"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Accueil
                </a>
                <a
                  href="/service"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Services
                </a>
                <a
                  href="/realisations"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Réqlisations
                </a>
                <a
                  href="/tarif"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Tarifs
                </a>
                <a
                  href="/contact"
                  className=" block text-gray-400 hover:text-gray-300"
                >
                  Contact
                </a>
              </ul>
            </div>
          </div>
        </div>
        {/* hr */}
        <hr />
        <div className=" flex flex-col sm:flex-row gap-8 sm:items-center justify-between py-8">
          <p className=" text-base text-slate-300">
            © Biblio {new Date().getFullYear()}. tous droits réservés
          </p>
          <div className="flex items-center space-x-5 text-slate-600 dark:text-gray-500">
            <FaInstagramSquare className="cursor-pointer dark:hover:-translate-y-4 hover:-translate-y-4 transition-all duration-300" />
            <BsTwitterX className="cursor-pointer dark:hover:-translate-y-4 hover:-translate-y-4 transition-all duration-300" />
            <FaLinkedinIn className="cursor-pointer dark:hover:-translate-y-4 hover:-translate-y-4 transition-all duration-300" />
            <FaFacebookF className="cursor-pointer dark:hover:-translate-y-4 hover:-translate-y-4 transition-all duration-300" />
            <FaSquareGithub className="cursor-pointer dark:hover:-translate-y-4 hover:-translate-y-4 transition-all duration-300" />
            <a href="mailto:matundukabamba@gmail.com">
              <RiMailFill className="cursor-pointer dark:hover:-translate-y-4 hover:-translate-y-4 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
