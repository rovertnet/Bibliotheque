import { FaSearch } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="md:px-14 px-5 md:mt-5 mt-5 bg-gray-100 h-full">
        <div className="flex items-center">
          {/* search */}
          <div className="bg-white shadow-sm rounded-2xl px-3 py-2 w-full">
            <form action="">
              <div className="flex">
                <button>
                  <FaSearch className=" text-slate-500 text-xl" />
                </button>
                <input
                  type="text"
                  className="px-3 py-1 w-full border border-white"
                  placeholder=" cherchez un livre"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Books view */}
        <div className=" container">
          <h1 className="text-center mt-10 md:mt-11 text-2xl md:text-3xl font-extrabold text-slate-900">
            Les plus populaires de nos livres
          </h1>
          <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5 md:my-4 my-2 md:py-10 py-9">
            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden">
              <img
                src="../../public/L1.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center gap-3 px-5 md:px-7">
                  <h3 className="text- md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Informatique
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Robert
                  </h3>
                </div>
                <div className="flex gap-5 px-5 md:px-7">
                  <button className=" text-lg font-medium">Acheter</button>
                  <button className=" text-lg font-medium">
                    <FaEye />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden">
              <img
                src="../../public/L2.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center gap-5">
                  <h3 className="text- md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Informatique
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Robert
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <button className=" text-lg font-medium">Acheter</button>
                  <button className=" text-lg font-medium">
                    <FaEye />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden">
              <img
                src="../../public/L8.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center gap-5">
                  <h3 className="text- md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Informatique
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Robert
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <button className=" text-lg font-medium">Acheter</button>
                  <button className=" text-lg font-medium">
                    <FaEye />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden">
              <img
                src="../../public/couverture.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center gap-5">
                  <h3 className="text- md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Informatique
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Robert
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <button className=" text-lg font-medium">Acheter</button>
                  <button className=" text-lg font-medium">
                    <FaEye />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden">
              <img
                src="../../public/L16.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center gap-5">
                  <h3 className="text- md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Informatique
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Robert
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <button className=" text-lg font-medium">Acheter</button>
                  <button className=" text-lg font-medium">
                    <FaEye />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden">
              <img
                src="../../public/L15.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center gap-5">
                  <h3 className="text- md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Informatique
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Robert
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <button className=" text-lg font-medium">Acheter</button>
                  <button className=" text-lg font-medium">
                    <FaEye />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden">
              <img
                src="../../public/L13.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center gap-5">
                  <h3 className="text- md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Informatique
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Robert
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <button className=" text-lg font-medium">Acheter</button>
                  <button className=" text-lg font-medium">
                    <FaEye />
                  </button>
                </div>
              </div>
            </div>

            <div className=" bg-white shadow-md dark:bg-slate-800 rounded-lg overflow-hidden">
              <img
                src="../../public/L11.jpg"
                alt="couverture"
                className=" w-full h-36 md:h-48 object-cover"
              />
              <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <div className=" flex justify-center items-center gap-5">
                  <h3 className="text- md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
                    Informatique
                  </h3>
                  <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
                    Robert
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <button className=" text-lg font-medium">Acheter</button>
                  <button className=" text-lg font-medium">
                    <FaEye />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
