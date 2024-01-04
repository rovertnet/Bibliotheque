import { IoSend } from "react-icons/io5";

function Subcribe() {
  return (
    <>
      <div className=" md:px-14 px-4 max-w-screen-2xl mx-auto my-10 md:pb-10 pb-8">
        <div className=" md:p-9 px-4 py-12 rounded-md bg-gradient-to-r from-black via-slate-400 to-slate-800 ... dark:bg-gradient-to-r dark:from-blue-500 dark:via-slate-300 dark:to-slate-800">
          <div className=" flex flex-col md:flex-row justify-between items-center gap-10">
            {/* image */}
            <div>
              <h1 className=" text-3xl font-extrabold text-white md:text-4xl md:mb-3 mb-2">
                Sign up for our newsletter
              </h1>
              <p className=" text-slate-200 text-xl font-medium md:text-xl">
                Join our newsletter and get news in your inbox every week! We
                hate spam too, so no worries about this.
              </p>
            </div>
            {/* La présentation */}
            <div className=" md:w-full">
              {/* le formulaire */}
              <form action="">
                <div className="flex justify-center items-center space-x-3">
                  <input
                    type="mail"
                    className=" md:w-full w-full outline outline-0 focus:outline-0 px-6 md:px-7 py-4 md:py-5 text-slate-700 rounded-md"
                    placeholder="Votre adresse e-mail"
                  />
                  <button
                    type="submit"
                    className="bg-black px-6 md:px-7 py-4 md:py-5 rounded-md hover:bg-slate-700"
                  >
                    <IoSend className="text-slate-200 text-2xl md:text-3xl font-semibold" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subcribe;
