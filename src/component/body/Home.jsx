import { FaSearch } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="md:px-14 px-5 md:mt-5 mt-5 bg-gray-100 h-full py-5">
        <div className="flex justify-between items-center">
          <h1 className=" text-2xl md:text-2xl font-bold">
            Filtrer par catégorie
          </h1>

          {/* search */}
          <div className="bg-white shadow-sm rounded-2xl px-3 py-2">
            <form action="">
              <div className="flex">
                <button>
                  <FaSearch className=" text-slate-500 text-xl" />
                </button>
                <input
                  type="text"
                  className=" border-white px-3 py-1"
                  placeholder=" cherchez un livre"
                />
              </div>
            </form>
          </div>
          <div className=" flex justify-between items-center gap-3 ">
            <span className=" bg-white rounded-full px-3 py-3 shadow-sm">
              <FaTelegram className=" text-blue-300 text-2xl font-semibold" />
            </span>
            <span className=" bg-white rounded-full px-3 py-3 shadow-sm">
              <FaInstagramSquare className=" text-red-500 text-2xl font-semibold" />
            </span>
            <span className=" bg-white rounded-full px-3 py-3 shadow-sm">
              <FaFacebook className=" text-blue-500 text-2xl font-semibold" />
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
            {/* sidebar */}
          <div className="">
            <div className="grid grid-cols-1 mt-7">
              <h2 className=" mb-1 text-blue-600 font-semibold text-lg">
                Toutes les catégories
              </h2>
              <div className="">
                <span className="flex space-x-3 text-base font-medium mt-3">
                  <BiChevronRight className=" text-2xl" />
                  Informatique
                </span>
                <span className="flex space-x-3 text-base font-medium mt-3">
                  <BiChevronRight className=" text-2xl" />
                  Mathématique
                </span>
                <span className="flex space-x-3 text-base font-medium mt-3">
                  <BiChevronRight className=" text-2xl" />
                  Economie
                </span>
                <span className="flex space-x-3 text-base font-medium mt-3">
                  <BiChevronRight className=" text-2xl" />
                  Chimie
                </span>
                <span className="flex space-x-3 text-base font-medium mt-3">
                  <BiChevronRight className=" text-2xl" />
                  Algorithm
                </span>
              </div>
            </div>
          </div>

          {/* Books view */}
          <div className="">
            
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
