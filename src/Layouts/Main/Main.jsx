import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import FooterComponent from "../../Shared/Footer/FooterComponent";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
           <Outlet></Outlet>
           <FooterComponent></FooterComponent>
        </div>
    );
};

export default Main;