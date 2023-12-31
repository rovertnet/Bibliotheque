

function Footer() {
  return (
    <div>
      <div className="bg-slate-600 md:px-14 px-12 md:py-12 py-10">
        <div className="flex justify-center items-center gap-40">
          <div className="">
            <a href="#" className="">
              <img src="../../public/logo.png" alt="logo" className=" h-24" />
            </a>
            <p className="text-slate-100 text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              repellendus possimus sunt.
            </p>
            <button className="text-slate-100 text-lg font-semibold px-3 py-2 hover:bg-slate-800 rounded-md bg-black mt-2">
              S'abonner
            </button>
          </div>
          <div>
            <h1 className="text-slate-100 font-semibold text-lg md:text-xl">
              Socials
            </h1>
            <div className="flex flex-col md:flex-col text-slate-300 text-base">
              <a href="#">Accueil</a>
              <a href="#">About</a>
              <a href="#">Boutique</a>
              <a href="#">Librerie</a>
            </div>
          </div>
          <div className="flex justify-center items-center gap-20">
            <h1 className="text-slate-100 font-semibold text-lg md:text-xl ">
              Liens
              <div className="flex flex-col md:flex-col text-slate-300 text-base">
                <a href="#">Accueil</a>
                <a href="#">About</a>
                <a href="#">Boutique</a>
                <a href="#">Librerie</a>
              </div>
            </h1>
            <h1 className="text-slate-100 font-semibold text-lg md:text-xl ">
              Menu
              <div className="flex flex-col md:flex-col text-slate-300 text-base">
                <a href="#">Accueil</a>
                <a href="#">About</a>
                <a href="#">Boutique</a>
                <a href="#">Librerie</a>
              </div>
            </h1>
            <h1 className="text-slate-100 font-semibold text-lg md:text-xl ">
              Contact
              <div className="flex flex-col md:flex-col text-slate-300 text-base">
                <a href="#">Accueil</a>
                <a href="#">About</a>
                <a href="#">Boutique</a>
                <a href="#">Librerie</a>
              </div>
            </h1>
          </div>
        </div>
        <hr />
        <div className="flex justify-between items-center md:py-3 my-2 ">
          <span className="text-slate-">
            © Robert {new Date().getFullYear()}. tous droits réservés
          </span>
          <span>par Rovertnet</span>
        </div>
      </div>
    </div>
  );
}

export default Footer