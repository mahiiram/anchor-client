import axios from "axios";
import { useEffect, useState } from "react";


/** custom hook */
export default function useFetch(query){
    const [getData, setData] = useState({ isLoading : false, apiData: undefined, status: null, serverError: null })
const email = localStorage.getItem('email')
    useEffect(() => {
         if(!query) return;
        const fetchData = async () => {
            try {
                setData(prev => ({ ...prev, isLoading: true}));
                const { data, status } =await axios.get(`https://anchor-server.onrender.com/company/${email}`)

                if(status === 201){
                    setData(prev => ({ ...prev, isLoading: false}));
                    setData(prev => ({ ...prev, apiData : data, status: status }));
                }

                setData(prev => ({ ...prev, isLoading: false}));
            } catch (error) {
                setData(prev => ({ ...prev, isLoading: false, serverError: error }))
            }
        };
        fetchData()

    }, [query]);

    return [getData, setData];
}