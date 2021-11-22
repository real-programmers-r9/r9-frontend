import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { EditProfileForm } from "~/hooks/forms/useEditProfileForm";
import { SignInForm, SignUpForm } from "~/types/forms";
import { ProfileImage, User } from "~/types/user";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_BASEURL,
    credentials: "include",
  }),
  extractRehydrationInfo: (action, { reducerPath }) => {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
    return null;
  },
  endpoints: (builder) => ({
    postAuth: builder.mutation<User, SignInForm>({
      query: (data) => ({
        url: "auth",
        method: "POST",
        body: data,
      }),
    }),
    postAuthRefresh: builder.mutation<
      User,
      { headers: Record<string, string | undefined> }
    >({
      query: ({ headers }) => ({
        url: "auth/refresh",
        method: "POST",
        headers,
      }),
    }),
    postAuthSignOut: builder.mutation<User, void>({
      query: () => ({
        url: "auth/signout",
        method: "POST",
      }),
    }),
    postUser: builder.mutation<User, SignUpForm>({
      query: (data) => {
        const { confirmPassword, ...body } = data;
        return {
          url: "users",
          method: "POST",
          body,
        };
      },
    }),
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),
    getUserMe: builder.query<
      User,
      { headers: Record<string, string | undefined> }
    >({
      query: ({ headers }) => ({
        url: "users/me",
        method: "GET",
        headers,
      }),
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => ({
        url: `users/${id}`,
        method: "GET",
      }),
    }),
    patchUserMe: builder.mutation<User, { data: any }>({
      query: ({ data }) => {
        const { confirmPassword, ...body } = data;
        return {
          url: "users/me",
          method: "PATCH",
          body,
        };
      },
    }),
    patchUserById: builder.mutation<
      void,
      { id: string; data: EditProfileForm }
    >({
      query: ({ id, data }) => {
        const { confirmPassword, ...body } = data;
        return {
          url: `users/${id}`,
          method: "PATCH",
          body,
        };
      },
    }),
    postUpload: builder.mutation<ProfileImage, FormData>({
      query: (body) => {
        return {
          url: "uploads",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useGetUserMeQuery,
  useGetUsersQuery,
  useLazyGetUserByIdQuery,
  useLazyGetUserMeQuery,
  useLazyGetUsersQuery,
  usePostAuthMutation,
  usePostAuthRefreshMutation,
  usePostAuthSignOutMutation,
  usePostUserMutation,
  usePatchUserByIdMutation,
  usePatchUserMeMutation,
  usePostUploadMutation,
  util: { getRunningOperationPromise, getRunningOperationPromises },
} = api;

export const {
  getUserById,
  getUserMe,
  getUsers,
  postAuth,
  postAuthRefresh,
  postAuthSignOut,
  postUser,
  patchUserById,
  patchUserMe,
  postUpload,
} = api.endpoints;
