import axios from "axios";

export const axiosPublic=axios.create({
    baseURL:'https://overflow-interface-data-seo-page1-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;