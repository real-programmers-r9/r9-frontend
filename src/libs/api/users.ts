import { SignUpForm } from "~/types/forms";
import { User } from "~/types/user";
import { client } from ".";

export const postUser = async (body: SignUpForm) => {
  const result = await client.post<User>("users", body).then((res) => res.data);
  return result;
};

export const getUsers = async () => {
  const result = await client.get<User[]>("users").then((res) => res.data);
  return result;
};

export const getBusinesses = async () => {
  const result = await client
    .get<User[]>("users/businesses")
    .then((res) => res.data);
  return result;
};

export const getUserMe = async () => {
  const result = await client.get<User>("users/me").then((res) => res.data);
  return result;
};

export const getUserById = async (id: string) => {
  const result = await client.get<User>(`users/${id}`).then((res) => res.data);
  return result;
};

export const patchUserById = async (id: string) => {
  const result = await client
    .patch<void>(`users/${id}`)
    .then((res) => res.data);
  return result;
};

export const deleteUserById = async (id: string) => {
  const result = await client
    .delete<void>(`users/${id}`)
    .then((res) => res.data);
  return result;
};
