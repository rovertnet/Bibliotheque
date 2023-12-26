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
        <div className=" flex justify-center items-center gap-5">
          <h3 className="text- md:text-xl mb-3 md:mb-4 text-slate-900 font-bold">
            Informatique
          </h3>
          <h3 className="text-xl md:text-xl mb-3 md:mb-4 font-bold">
            Robert
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <button className=" text-lg font-medium">
            Acheter
          </button>
          <button className=" text-lg font-medium">
            <FaEye />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
