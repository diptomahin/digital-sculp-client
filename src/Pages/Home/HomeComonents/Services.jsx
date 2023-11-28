import { useEffect, useState } from "react";
import ServiceCard from "../../../components/serviceCard";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])
    return (
       <div className="text-center mt-10 font-bold">
        <h1 className="text-3xl border-[#FFE074] border-x-2 py-5 bg-[#D4F6C8] border-y-4">Our Services</h1>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-11/12 mx-auto my-10">
            {
                services.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
        </div>
       </div>
    );
};

export default Services;