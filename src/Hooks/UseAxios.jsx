import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://digital-sculp-server.vercel.app'
})

const useAxios = () => {
    return axiosPublic;
};

export default useAxios;

