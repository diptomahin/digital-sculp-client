
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/UseAxios";
import Worktable from "../../components/WorkTable/Worktable";

const Progress = () => {
    const axiosPublic = useAxios();
    const { data: allUserWorks = [],} = useQuery({
        queryKey: ['allWorks'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/works`);
            return res.data
        }
    })
    return (
        <div>
                <Worktable userWorks={allUserWorks}></Worktable>
        </div>
    );
};

export default Progress;