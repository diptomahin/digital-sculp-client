import { useQuery } from "@tanstack/react-query";
import ServiceCard from "../../../components/serviceCard";
import useAxios from "../../../Hooks/UseAxios";

const Services = () => {
    const axiosPublic = useAxios();
    const { data: services = []} = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services');
            return res.data;
        }
    })
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