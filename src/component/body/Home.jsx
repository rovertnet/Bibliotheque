import { FaSearch } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import Subcribe from "./Subcribe";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Cat from "./Cat";
import Livre from "./Livre";


function Home() {
  return (
    <div>
      <Cat />
      <div className="md:px-14 px-5 bg-gray-100 dark:bg-slate-900 h-full">
        <div className="flex items-center">
          {/* search */}
          <div className="bg-white rounded-2xl px-3 md:py-5 py-3 w-full dark:hover:border dark:hover:border-slate-200 dark:border-slate-400 dark:bg-slate-800 shadow-2xl">
            <form action="">
              <div className="flex">
                <input
                  type="search"
                  className="px-3 py-1 w-full dark:bg-slate-800 outline outline-0 focus:outline-0 dark:focus:text-slate-200"
                  placeholder=" cherchez un livre"
                />

                <button>
                  <FaSearch className=" text-slate-500 dark:text-slate-200 text-3xl" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Books view ui */}
        <div className=" container">
          <h1 className="text-center dark:text-slate-300 md:py-14 py-12 text-2xl md:text-4xl font-extrabold text-slate-900">
            Les plus consultés
          </h1>
          <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5 md:my-4 my-2 md:py-10 py-9">
            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden cursor-pointer">
              <img
                src="../../public/L1.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center gap-3 px-5 md:px-7">
                  <h3 className=" dark:text-slate-400 md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Robert
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Algo
                  </h3>
                </div>
                <div className="flex justify-center items-center space-x-2 text-2xl text-amber-400 md:mb-5 mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex justify-center items-center gap-3 px-10 md:text-xl md:px-7">
                  <button className=" text-2xl font-medium">
                    <FaShoppingCart />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaEye />
                  </button>
                  <button className=" text-2xl font-medium">
                    <BiBookmark />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg cursor-pointer">
              <img
                src="../../public/L2.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center space-x-2">
                  <h3 className="dark:text-slate-400 md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Robert
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Anglais
                  </h3>
                </div>
                <div className="flex justify-center items-center space-x-2 text-2xl text-amber-400 md:mb-5 mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                </div>
                <div className="flex justify-center items-center gap-3 px-10 md:text-xl md:px-7">
                  <button className=" text-2xl font-medium">
                    <FaShoppingCart />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaEye />
                  </button>
                  <button className=" text-2xl font-medium">
                    <BiBookmark />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden cursor-pointer">
              <img
                src="../../public/L8.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center space-x-2">
                  <h3 className="dark:text-slate-400 md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Robert
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Gest.pro
                  </h3>
                </div>
                <div className="flex justify-center items-center space-x-2 text-2xl text-amber-400 md:mb-5 mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                </div>
                <div className="flex justify-center items-center gap-3 px-10 md:text-xl md:px-7">
                  <button className=" text-2xl font-medium">
                    <FaShoppingCart />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaEye />
                  </button>
                  <button className=" text-2xl font-medium">
                    <BiBookmark />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden cursor-pointer">
              <img
                src="../../public/couverture.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center space-x-2">
                  <h3 className="dark:text-slate-400 md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Robert
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Economie
                  </h3>
                </div>
                <div className="flex justify-center items-center space-x-2 text-2xl text-amber-400 md:mb-5 mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <div className="flex justify-center items-center gap-3 px-10 md:text-xl md:px-7">
                  <button className=" text-2xl font-medium">
                    <FaShoppingCart />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaEye />
                  </button>
                  <button className=" text-2xl font-medium">
                    <BiBookmark />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden cursor-pointer">
              <img
                src="../../public/L16.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center space-x-2">
                  <h3 className="dark:text-slate-400 md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Robert
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Psycho
                  </h3>
                </div>
                <div className="flex justify-center items-center space-x-2 text-2xl text-amber-400 md:mb-5 mb-3">
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <div className="flex justify-center items-center gap-3 px-10 md:text-xl md:px-7">
                  <button className=" text-2xl font-medium">
                    <FaShoppingCart />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaEye />
                  </button>
                  <button className=" text-2xl font-medium">
                    <BiBookmark />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden cursor-pointer">
              <img
                src="../../public/L15.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center space-x-2">
                  <h3 className="dark:text-slate-400 md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Robert
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Dev.web
                  </h3>
                </div>
                <div className="flex justify-center items-center space-x-2 text-2xl text-amber-400 md:mb-5 mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                </div>
                <div className="flex items-center justify-center gap-3 px-10 md:px-7">
                  <button className=" text-2xl font-medium">
                    <FaShoppingCart />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaEye />
                  </button>
                  <button className=" text-2xl font-medium">
                    <BiBookmark />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden cursor-pointer">
              <img
                src="../../public/L9.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center space-x-2">
                  <h3 className="dark:text-slate-400 md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Robert
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Dev.web
                  </h3>
                </div>
                <div className="flex justify-center items-center space-x-2 text-2xl text-amber-400 md:mb-5 mb-3">
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
                <div className="flex items-center justify-center gap-3 px-10 md:px-7">
                  <button className=" text-2xl font-medium">
                    <FaShoppingCart />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaEye />
                  </button>
                  <button className=" text-2xl font-medium">
                    <BiBookmark />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden cursor-pointer">
              <img
                src="../../public/L13.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center space-x-2">
                  <h3 className="dark:text-slate-400 md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Robert
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Réseau
                  </h3>
                </div>
                <div className="flex justify-center items-center space-x-2 text-2xl text-amber-400 md:mb-5 mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>

                <div className="flex justify-center items-center gap-3 px-10 md:text-xl md:px-7">
                  <button className=" text-2xl font-medium">
                    <FaShoppingCart />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaEye />
                  </button>
                  <button className=" text-2xl font-medium">
                    <BiBookmark />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden cursor-pointer">
              <img
                src="../../public/20.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center space-x-2">
                  <h3 className="dark:text-slate-400 md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Robert
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Réseau
                  </h3>
                </div>
                <div className="flex justify-center items-center space-x-2 text-2xl text-amber-400 md:mb-5 mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                </div>
                <div className="flex justify-center items-center gap-3 px-10 md:text-xl md:px-7">
                  <button className=" text-2xl font-medium">
                    <FaShoppingCart />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaEye />
                  </button>
                  <button className=" text-2xl font-medium">
                    <BiBookmark />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden cursor-pointer">
              <img
                src="../../public/E1.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center space-x-2">
                  <h3 className="dark:text-slate-400 md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Robert
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Math
                  </h3>
                </div>
                <div className="flex justify-center items-center space-x-2 text-2xl text-amber-400 md:mb-5 mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaStarHalfAlt />
                </div>
                <div className="flex justify-center items-center gap-3 px-10 md:text-xl md:px-7">
                  <button className=" text-2xl font-medium">
                    <FaShoppingCart />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaEye />
                  </button>
                  <button className=" text-2xl font-medium">
                    <BiBookmark />
                  </button>
                  <button className=" text-2xl font-medium">
                    <FaRegHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Livre />
      <Subcribe />
    </div>
  );
}

export default Home;
