
function Subcribe() {
  return (
    <>
      <div className=" md:px-14 px-4 max-w-screen-2xl mx-auto my-12">
        <div className=" md:p-9 px-4 py-9 bg-gradient-to-r from-black via-white to-slate-800 ...">
          <div className=" flex flex-col md:flex-row-reverse justify-between items-center gap-10">
            {/* image */}
            <div>
              <h1 className=" text-2xl font-bold text-white md:text-3xl">
                Sign up for our newsletter
              </h1>
              <p className=" text-slate-300 text-base font-medium md:text-lg">
                Join our newsletter and get news in your inbox every week! We
                hate spam too, so no worries about this.
              </p>
            </div>
            {/* La présentation */}
            <div className=" md:w-full">
              {/* le formulaire */}
              <form action="">
                <div className="">
                  <input
                    type="mail"
                    className=" md:w-full w-full outline outline-0 focus:outline-0 "
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subcribe