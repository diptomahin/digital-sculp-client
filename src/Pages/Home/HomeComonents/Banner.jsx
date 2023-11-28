import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Banner = () => {
    return (
        <Carousel className="text-center ">
        <div>
            <img src="https://i.ibb.co/yphCFYK/seo.jpg" />
        </div>
        <div>
            <img src="https://i.ibb.co/7QHGqfS/smm.jpg" />
        </div>
        <div>
            <img src="https://i.ibb.co/G3k52gd/pay-per-click.webp" />
        </div>
    </Carousel>
    );
};

export default Banner;