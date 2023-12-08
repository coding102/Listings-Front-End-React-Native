import { useToast } from "native-base";
import { useMutation } from "react-query";
import { axiosInstance } from '../utils/axiosInstance';

export function useLogin() {
  const toast = useToast();
  return useMutation(
    ({ email, password }) =>
      axiosInstance.post("/users/sign_in.json", { user: { email, password }}),
      {
        onSuccess: (data) => {
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
  return useMutation(
    ({ email, password }) =>
      axiosInstance.post("/users.json", { user: { email, password }}),
      {
        onSuccess: (data) => {
          toast.show({ title: JSON.stringify(data?.data)});
        },
        onError: (e) => {
          toast.show({ title: e.message });
        },
      }
  );
}