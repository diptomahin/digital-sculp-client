import { useQuery } from "@tanstack/react-query";
import useAxios from "./UseAxios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useWorks = () => {
    const {user} = useContext(AuthContext)
    const axiosPublic = useAxios();
    const { data: userWorks = [], refetch, isLoading: userLoading} = useQuery({
        queryKey: ['works'],
        enabled:!!user?.email,
        queryFn: async () => {
            const res = await axiosPublic.get(`/works`);
            return res.data.filter(work => work.email === user.email)
        }
    })
    return {userWorks, refetch, userLoading};
 
};

export default useWorks;