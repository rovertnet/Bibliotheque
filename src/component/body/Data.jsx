import Slider from "react-slick";
import Sponsor from "./Sponsor";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonies = [
  {
    id: 1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "John Doe",
    occupation: "Web Developer",
  },
  // Ajoutez d'autres témoignages selon votre besoin
];

function Data() {
  
 const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
 };

  return (
    <div>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Témoignages</h1>
        <Slider {...settings}>
          {testimonies.map((testimonial) => (
            <Sponsor key={testimonial.id} {...testimonial} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Data