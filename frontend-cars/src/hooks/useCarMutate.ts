import axios, { AxiosPromise } from "axios";
import { CarData } from "../interfaces/carData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const postData = async (data: CarData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/add-car', data)
    return response;
}

export function useCarDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 3,
        onSuccess: () => {
            queryClient.invalidateQueries(['car-data'])
        }
    });

    return mutate;
}