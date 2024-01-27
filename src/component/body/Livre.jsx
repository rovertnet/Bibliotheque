
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function Livre() {
  return (
    <>
      <div className="md:px-16 px-10 bg-white dark:bg-slate-900">
        <h1 className="text-center dark:text-slate-300 md:mb-8 mb-5 text-2xl md:text-4xl font-extrabold text-slate-900">
          Les plus vendus
        </h1>

        {/* les cards de livres */}
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
    </>
  );
}

export default Livre;
