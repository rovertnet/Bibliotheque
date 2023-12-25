import { FaEye } from "react-icons/fa";

function Card() {
  return (
    <div className="bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden">
      <img
        src="../../public/couverture.jpg"
        alt="couverture"
        className=" w-full h-36 md:h-48 object-cover"
      />
      <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
        <div className=" flex justify-center items-center">
          <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-semibold">
            Livre title
          </h3>
          <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-semibold">
            Auteur livre
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <button className=" bg-slate-800 px-3 py-2 text-lg font-medium">
            Acheter
          </button>
          <button className=" bg-slate-800 px-3 py-2 text-lg font-medium">
            <FaEye />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
