import { AxiosRequestConfig } from "axios";
import { SignInForm } from "~/types/forms";
import { User } from "~/types/user";
import { client } from ".";

export const postAuth = async (
  body: SignInForm,
  config?: AxiosRequestConfig
) => {
  const result = await client
    .post<User>("auth", body, config)
    .then((res) => res.data);
  return result;
};

export const postAuthRefresh = async (config?: AxiosRequestConfig) => {
  const result = await client
    .post<void>("auth/refresh", null, config)
    .then((res) => res.data);
  return result;
};

export const postAuthSignOut = async (config?: AxiosRequestConfig) => {
  const result = await client
    .post<void>("auth/signout", null, config)
    .then((res) => res.data);
  return result;
};
