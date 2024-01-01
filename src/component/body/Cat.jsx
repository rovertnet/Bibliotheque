import { FaComputer } from "react-icons/fa6";

function Cat() {
  return (
    <>
      <div className="md:px-14 px-12 md:py-12 py-10">
        <div className="flex justify-center items-center gap-5">
          <div className="">
            <img
              src="../../public/Info1.jpg"
              alt=""
              className=" rounded-full h-36 object-cover"
            />
            <div className="text-center md:mt-2">
              <h1>Informatique</h1>
              <span>12</span>
            </div>
          </div>

          <div className=" cursor-pointer">
            <img
              src="../../public/A2.jpg"
              alt=""
              className=" rounded-full h-36"
            />
            <div className="text-center md:mt-2">
              <h1>Informatique</h1>
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cat;
