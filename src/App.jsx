import Banner from "./component/body/Banner";
import Home from "./component/body/Home";
import Footer from "./component/footer/Footer";
import Navbar from "./component/header/Navbar"

function App() {

  return (
    <>
      <div className=" bg-gray-100">
        <Navbar />
        <Banner />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App
