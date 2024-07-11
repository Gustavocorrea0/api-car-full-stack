import axios, { AxiosPromise } from "axios";
import { CarData } from "../interfaces/carData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<CarData[]> => {
    const response = axios.get(API_URL + '/search-cars');
    return response;
}

export function useCarData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['car-data'],
        retry: 2
    });

    return {
        ...query,
        data: query.data?.data
    }
}