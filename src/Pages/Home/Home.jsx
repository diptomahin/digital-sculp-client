import AboutUs from "./HomeComonents/AboutUs";
import Banner from "./HomeComonents/Banner";
import NewsLetter from "./HomeComonents/NewsLetter";
import Services from "./HomeComonents/Services";
import Testimonials from "./HomeComonents/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testimonials></Testimonials>
            <AboutUs></AboutUs>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;