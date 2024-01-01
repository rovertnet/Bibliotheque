
function Cat() {
  return (
    <>
      <div className="md:px-14 px-12 md:py-12 py-10">
        <h1 className="text-center md:mb-3 mb-2 text-2xl md:text-3xl font-extrabold text-slate-900">
          Toutes les catégories
        </h1>
        <div className="flex justify-center items-center gap-5">
          <div className="">
            <img
              src="../../public/Info1.jpg"
              alt=""
              className=" rounded-full h-36 object-cover"
            />
            <div className="text-center md:mt-2">
              <h1 className=" text-lg md:text-xl font-bold text-slate-900">
                Informatique
              </h1>
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
              <h1 className="text-lg md:text-xl font-bold text-slate-900">
                Agronomie
              </h1>
              <span>15</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cat;
