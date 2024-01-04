
function Sponsor({ content, author, occupation }) {
  return (
    <>
      <div className="md:px-14 px-12 ">
        <h1 className="text-center dark:text-slate-300 md:mb-8 mb-5 text-2xl md:text-3xl font-extrabold text-slate-900">
          Clients
        </h1>
        <div className="bg-white p-4 rounded-md shadow-md">
          <p className="text-gray-800 mb-4">{content}</p>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Ajoutez une image de l'auteur si nécessaire */}
              <img src="../../public/temoin.png" alt="temoin" />
            </div>
            <div className="ml-3">
              <p className="text-lg font-semibold">{author}</p>
              <p className="text-gray-600">{occupation}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sponsor