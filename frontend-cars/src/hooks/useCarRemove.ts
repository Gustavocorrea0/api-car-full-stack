import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const API_URL = 'http://localhost:8080/remove-car/';

const removeData = async (id: string): AxiosPromise<any> => {
    const response = axios.delete(API_URL + id);
    return response;
}

export function useCarRemove() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: removeData,
        retry: 0,
        onSuccess: () => {
            queryClient.invalidateQueries(['car-data']);
        }
    });

    return mutate;
}