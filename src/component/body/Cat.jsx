import { motion } from "framer-motion";
function Cat() {
  return (
    <>
      <div className="md:px-14 px-12 md:py-12 py-10">
        <h1 className="text-center md:mb-8 mb-5 text-2xl md:text-3xl font-extrabold text-slate-900">
          Toutes les catégories
        </h1>
        <motion.div
          initial={{ opacity: 0, y: "-100px" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-16"
        >
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
              <span>12 Livres</span>
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
              <span>15 Livres</span>
            </div>
          </div>

          <div className=" cursor-pointer">
            <img
              src="../../public/Psy1.jpg"
              alt=""
              className=" rounded-full h-36"
            />
            <div className="text-center md:mt-2">
              <h1 className="text-lg md:text-xl font-bold text-slate-900">
                Psychologie
              </h1>
              <span>15 Livres</span>
            </div>
          </div>

          <div className=" cursor-pointer">
            <img
              src="../../public/C1.jpg"
              alt=""
              className=" rounded-full h-36"
            />
            <div className="text-center md:mt-2">
              <h1 className="text-lg md:text-xl font-bold text-slate-900">
                Agriculture
              </h1>
              <span>2 Livres</span>
            </div>
          </div>

          <div className=" cursor-pointer">
            <img
              src="../../public/G1.jpg"
              alt=""
              className=" rounded-full h-36"
            />
            <div className="text-center md:mt-2">
              <h1 className="text-lg md:text-xl font-bold text-slate-900">
                Gestion de projet
              </h1>
              <span>5 Livres</span>
            </div>
          </div>

          <div className=" cursor-pointer">
            <img
              src="../../public/AA.jpg"
              alt=""
              className=" rounded-full h-36"
            />
            <div className="text-center md:mt-2">
              <h1 className="text-lg md:text-xl font-bold text-slate-900">
                Anglais
              </h1>
              <span>23 Livres</span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Cat;
