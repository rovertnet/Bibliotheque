import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Data from "./data/Data";

function Sponsor() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="md:px-14 px-12 pb-14">
        <h1 className="text-center dark:text-slate-300 md:mb-8 mb-5 text-2xl md:text-3xl font-extrabold text-slate-900">
          Clients
        </h1>
        <div className=" w-3/4 m-auto">
          <div className=" mt-10">
          <Slider {...settings}>
            {
              Data.map((d) => (
                <div key={d.nom} className=" bg-slate-200 dark:bg-blue-950 text-slate-900 dark:text-slate-400 space-x-3 rounded-md">
                  <div className=" h-56 dark:bg-blue-400 bg-slate-900 flex justify-center items-center rounded-t-xl">
                    <img src={d.imageUrl} alt="" className=" h-44 w-44 rounded-full" />
                  </div>
                  <div className=" flex flex-col items-center justify-center gap-4 p-4">
                    <span className=" md:text-2xl text-xl font-semibold"> { d.nom } </span>
                    <span className="text-center"> { d.description } </span>
                  </div>
                </div>
              ))
            }
          </Slider> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsor;
