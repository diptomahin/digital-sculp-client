import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="w-11/12 mx-auto items-center text-center">
           <div><img src="https://i.ibb.co/S0t4VK9/404.png" alt="" /></div>
           <div>
           <Link to='/'><Button>Home</Button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;