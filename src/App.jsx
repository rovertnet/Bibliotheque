import Banner from "./component/body/Banner";
import Home from "./component/body/Home";
import Navbar from "./component/header/Navbar"

function App() {

  return (
    <>
      <div className=" bg-gray-100">
        <Navbar />
        <Banner />
        <Home />
      </div>
    </>
  );
}

export default App
