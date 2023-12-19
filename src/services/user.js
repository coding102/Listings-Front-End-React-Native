import { useToast } from "native-base";
import { useMutation, useQueryClient } from "react-query";
import { axiosInstance } from '../utils/axiosInstance';
import * as SecureStore from 'expo-secure-store';

export const FETCH_USER_QUERY_KEY = "fetch_user";

export function useLogin() {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    ({ email, password }) =>
      axiosInstance.post("/users/sign_in.json", { user: { email, password }}),
      {
        onSuccess: async (data) => {
          const token = data.headers.authorization;
          await SecureStore.setItemAsync(TOKEN_QUERY_KEY, token);

          queryClient.invalidateQueries([TOKEN_QUERY_KEY]);
          queryClient.invalidateQueries([FETCH_USER_QUERY_KEY]);

          toast.show({ title: JSON.stringify(data?.data)});
        },
        onError: (e) => {
          toast.show({ title: e.message });
        },
      }
  );
}

export function useRegister() {
  const toast = useToast();
  const queryClient = useQueryClient();

  return useMutation(
    ({ email, password }) =>
      axiosInstance.post("/users.json", { user: { email, password }}),
      {
        onSuccess: async (data) => {
          const token = data.headers.authorization;
          await SecureStore.setItemAsync(TOKEN_QUERY_KEY, token);

          queryClient.invalidateQueries([TOKEN_QUERY_KEY]);
          queryClient.invalidateQueries([FETCH_USER_QUERY_KEY]);

          toast.show({ title: "Registered" });
        },
        onError: (e) => {
          toast.show({ title: e.message });
        },
      }
  );
}